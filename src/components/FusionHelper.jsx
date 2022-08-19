import React, { useState, useMemo, useEffect } from "react";
import DataTable from "react-data-table-component";

const styles = {
    table: {
        style: {
            borderRadius: '0.25rem 0.25rem 0 0',
            overflow: 'hidden',
        },
    },
    header: {
        style: {
            backgroundColor: 'transparent',
        },
    },
    subHeader: {
        style: {
            padding: '.5rem 0',
            backgroundColor: 'transparent',
        },
    },
    headRow: {
        style: {
            backgroundColor: 'rgba(var(--bs-secondary-rgb), 0.2)',
        },
    },
    head: {
        style: {
            fontSize: '.85rem',
            fontWeight: 700,
            color: 'var(--bs-secondary)',
        },
    },
    rows: {
        style: {
            fontSize: '.75rem',
            '&:not(:last-of-type)': {
                borderBottomStyle: 'solid',
            },
        },
        denseStyle: {

        },
        highlightOnHoverStyle: {
            color: 'var(--bs-primary)',
            backgroundColor: 'rgba(var(--bs-primary-rgb), 0.1)',
            transitionDuration: '0.15s',
            transitionProperty: 'background-color',
            borderColor: 'transparent',
            outlineStyle: 'none',
            outlineWidth: '0',
            outlineColor: 'var(--bs-primary)',
            '&:hover': {
                cursor: 'pointer',
            },
        },
        stripedStyle: {

            backgroundColor: 'rgba(var(--bs-secondary-rgb), 0.1)',
        },
    },
    cells: {
        style: {
        },
    },
    pagination: {
        style: {
            borderRadius: '0 0 0.25rem 0.25rem',
        },
    },
};

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <div className="row">
            <div className="input-group input-group-sm col-4">
                <span className="input-group-text">
                    <span
                        className="material-symbols-outlined text-black-50">
                        search
                    </span>
                </span>
                <input type="text"
                    className="form-control"
                    placeholder="Filter By Name"
                    aria-label="Search Input"
                    value={filterText}
                    onChange={onFilter}
                />
                <button className="btn btn-outline-primary" onClick={onClear}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
            </div>
        </div>
    </>
);

export function ComponentLoading(Component) {
    return function LoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{ height: '10rem' }}>
                <p className="fs-1 text-primary">
                    Generating recipes...
                </p>
                <div className="spinner-border" style={{ width: '2.5rem', height: '2.5rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    };
}

export function RecipeTable(props) {

    const columns = [
        {
            name: 'Cost',
            selector: row => row.cost,
            sortable: true,
            grow: 0.5,
        },
        {
            name: 'Ingredients',
            cell: row => <div className="row py-3 px-0 py-sm-0 flex-sm-nowrap flex-wrap container-fluid">
                {
                    row.sources.map(
                        persona => {
                            if (persona.max) {
                                return <span key={persona.name} className="col-12 col-sm pb-1 pb-sm-0" style={{ cursor: "pointer" }} onClick={() => props.handleChoosePersona(persona)}>
                                    {persona.name} <span className="badge bg-secondary">Max</span>
                                </span>
                            }
                            return <span key={persona.name} className="col-12 col-sm pb-1 pb-sm-0" style={{ cursor: "pointer" }} onClick={() => props.handleChoosePersona(persona)}>
                                {persona.name}
                            </span>
                        }
                    )
                }
            </div>
            ,
            grow: 2,
        },
    ];

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredIngredient = props.recipeList.filter(
        recipe => recipe.sources.map(s => s.name)
            .some(p => p.toLowerCase().includes(filterText.toLowerCase())),
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent
                onFilter={e => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <DataTable
            title=''
            columns={columns}
            data={filteredIngredient}
            striped
            customStyles={styles}
            pagination
            highlightOnHover
            paginationRowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
            paginationPerPage={5}
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
        />
    );
}

export function PersonaTable(props) {

    const nameSort = (rowA, rowB) => {
        const a = rowA.name.toLowerCase();
        const b = rowB.name.toLowerCase();

        if (a > b) {
            return 1;
        }

        if (b > a) {
            return -1;
        }

        return 0;
    };

    const arcanaSort = (rowA, rowB) => {
        const a = rowA.arcana;
        const b = rowB.arcana;

        if (props.fusionCalculator.arcanaRank[a] > props.fusionCalculator.arcanaRank[b]) {
            return 1;
        }

        if (props.fusionCalculator.arcanaRank[b] > props.fusionCalculator.arcanaRank[a]) {
            return -1;
        }

        return 0;
    };

    const columns = [
        {
            name: 'Name',
            selector: persona => {
                if (persona.max) {
                    return <span>
                        {persona.name} <span className="badge bg-secondary">Max</span>
                    </span>
                }
                return persona.name
            },
            sortable: true,
            sortFunction: nameSort,
            grow: 2,
        },
        {
            name: 'Level',
            selector: persona => persona.level,
            sortable: true,
            grow: 0.5,
        },
        {
            name: 'Arcana',
            selector: persona => persona.arcana,
            sortable: true,
            sortFunction: arcanaSort,
            grow: 1,
        },
    ];

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredPersona = props.personaList.filter(
        persona => persona.name && persona.name.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent
                onFilter={e => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <>
            <DataTable
                title={props.title}
                columns={columns}
                data={filteredPersona}
                striped
                customStyles={styles}
                pagination
                highlightOnHover
                onRowClicked={(row) =>
                    props.handleChoosePersona(row.name)
                }
                paginationRowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
                paginationPerPage={5}
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
            />
        </>
    );


}

/**
     * @param id
     * @param personaList
     * @param onChange
     */
const SelectDropdown = ({ id, personaList, onChange }) => {

    return (
        <select id={id} className="form-select" aria-label="Select persona to fuse" onChange={onChange}>
            <option selected value={undefined}>Choose persona</option>
            {
                personaList.map(p => (
                    <option key={p.name} value={p.name}>{p.name}</option>
                ))
            }
        </select>
    )
}

/**
     * @param index
     * @param title
     * @param fusionCalculator
     * @param personaList
     */
const FusionCard = (props) => {

    const [selectedPersona, setSelectedPersona] = useState(undefined);

    const minLevel = props.fusionCalculator.getPersona(selectedPersona?.name)?.level;

    const onChange = e => {
        setSelectedPersona(props.fusionCalculator.getPersona(e.target.value))
    }
    const handleSetLevel = e => {
        const { name, value } = e.target;
        const valueToInt = parseInt(value);
        if (valueToInt < minLevel || valueToInt > 99)
            return;
        setSelectedPersona(prev => ({
            ...prev,
            [name]: valueToInt
        }))
    }

    useEffect(() => {
        if (typeof props.onChange === 'function')
            props.onChange(selectedPersona, props.index);

    }, [selectedPersona])

    return (
        <div className="card container-fluid col-12 col-md">
            <h1 className="card-title">
                {props.title}
            </h1>
            <div className="mb-3">
                <label htmlFor='p1-name' className="form-label">Name</label>
                <SelectDropdown
                    id='p1-name'
                    personaList={props.personaList}
                    onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="p1-level" className="form-label">Level</label>
                <input type="number" disabled={props.levelEditDisabled} name='level' id="p1-level" className="form-control" min={minLevel || 1} max='99' value={selectedPersona?.level || 1} onChange={handleSetLevel} />
            </div>
            <div className="mb-3">
                <p>Arcana</p>
                <input type="text" disabled className="form-control" value={(selectedPersona?.arcana || '')} />
            </div>
        </div>
    )
}

function NormalFusion(props) {
    const [personaArr, setPersonaArr] = useState(new Array(2).fill(undefined));
    const [fusionResult, setFusionResult] = useState(undefined);

    const handleChange = (persona, index) => {
        setPersonaArr(personaArr.map((p, i) => {
            if (i === index)
                return persona

            return p
        }))
    }

    // useEffect(() => {
    //     console.log(fusionResult);

    // }, [fusionResult])
    // useEffect(() => {
    //     console.log(personaArr);

    // }, [personaArr])

    const handleFuse = e => {
        setFusionResult(props.fusionCalculator.fuseNormal(...personaArr))
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <FusionCard
                        index={0}
                        title='Persona 1'
                        fusionCalculator={props.fusionCalculator}
                        personaList={props.personaList}
                        onChange={handleChange}
                    />

                    <div className="col-4"></div>

                    <FusionCard
                        index={1}
                        title='Persona 2'
                        fusionCalculator={props.fusionCalculator}
                        personaList={props.personaList}
                        onChange={handleChange}
                    />
                </div>

                <div className="row">
                    <button className="col btn btn-primary" onClick={handleFuse}>
                        Fuse
                    </button>
                </div>

                <div className="row mt-3">
                    <div className="card container-fluid col-12">
                        <h1 className="card-title">
                            Result
                        </h1>
                        <div className="mb-3">
                            <p>Name</p>
                            <input type="text" disabled className="form-control" value={fusionResult?.name || ''} />
                        </div>
                        <div className="mb-3">
                            <p>Level</p>
                            <input type="number" disabled className="form-control" min='1' max='99' value={fusionResult?.level || ''} />
                        </div>
                        <div className="mb-3">
                            <p>Arcana</p>
                            <input type="text" disabled className="form-control" value={fusionResult?.arcana || ''} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function TriangleFusion(props) {
    const [personaArr, setPersonaArr] = useState(new Array(3).fill(undefined));
    const [fusionResult, setFusionResult] = useState(undefined);

    const handleChange = (persona, index) => {
        setPersonaArr(personaArr.map((p, i) => {
            if (i === index)
                return persona

            return p
        }))
    }

    // useEffect(() => {
    //     console.log(fusionResult);

    // }, [fusionResult])
    // useEffect(() => {
    //     console.log(personaArr);

    // }, [personaArr])

    const handleFuse = e => {
        setFusionResult(props.fusionCalculator.fuseTriangle(...personaArr))
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row gap-1">
                    <FusionCard
                        index={0}
                        title='Persona 1'
                        fusionCalculator={props.fusionCalculator}
                        personaList={props.personaList}
                        onChange={handleChange}
                    />

                    <FusionCard
                        index={1}
                        title='Persona 2'
                        fusionCalculator={props.fusionCalculator}
                        personaList={props.personaList}
                        onChange={handleChange}
                    />

                    <FusionCard
                        index={2}
                        title='Persona 3'
                        fusionCalculator={props.fusionCalculator}
                        personaList={props.personaList}
                        onChange={handleChange}
                    />
                </div>

                <div className="row">
                    <button name='triangle' className="col btn btn-primary" onClick={handleFuse}>
                        Fuse
                    </button>
                </div>

                <div className="row mt-3">
                    <div className="card container-fluid col-12">
                        <h1 className="card-title">
                            Result
                        </h1>
                        <div className="mb-3">
                            <p>Name</p>
                            <input type="text" disabled className="form-control" value={fusionResult?.name || ''} />
                        </div>
                        <div className="mb-3">
                            <p>Level</p>
                            <input type="number" disabled className="form-control" min='1' max='99' value={fusionResult?.level || ''} />
                        </div>
                        <div className="mb-3">
                            <p>Arcana</p>
                            <input type="text" disabled className="form-control" value={fusionResult?.arcana || ''} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export function FusionTable(props) {

    return (
        <>
            <ul className="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link px-2 active" id="normal-tab" data-bs-toggle="tab" data-bs-target="#bordered-normal" type="button" role="tab" aria-controls="normal" aria-selected="true">Normal</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link px-2" id="triangle-tab" data-bs-toggle="tab" data-bs-target="#bordered-triangle" type="button" role="tab" aria-controls="triangle" aria-selected="false">Triangle</button>
                </li>
            </ul>
            <div className="tab-content pt-2" id="borderedTabContent">
                <div className="tab-pane fade show active" id="bordered-normal" role="tabpanel" aria-labelledby="normal-tab">
                    <NormalFusion
                        personaList={props.personaList}
                        fusionCalculator={props.fusionCalculator}
                    />
                </div>
                <div className="tab-pane fade" id="bordered-triangle" role="tabpanel" aria-labelledby="triangle-tab">
                    <TriangleFusion
                        personaList={props.personaList}
                        fusionCalculator={props.fusionCalculator}
                    />
                </div>
            </div>

        </>
    );
}