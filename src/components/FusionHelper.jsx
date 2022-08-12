import React, { useState, useMemo, useEffect } from "react";
import DataTable from "react-data-table-component";

export default class RecipeGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persona: undefined,
            personaList: this.props.fusionCalculator.personaList,
            recipes: undefined
        };
    }

    handleChoosePersona = (p) => {
        let persona = (typeof p === "string") ? this.props.fusionCalculator.getPersona(p) : p
        this.setState({
            persona: persona,
            recipes: this.props.fusionCalculator.getRecipes_Pre(persona),
            personaList: undefined
        })
    }

    handleResetPersona = () => {
        this.setState({
            persona: undefined,
            recipes: undefined,
            personaList: this.props.fusionCalculator.personaList
        })
    }

    noRecipe = (
        <div className="container-fluid py-5 text-center">
            <h3>No recipe found</h3>
        </div>
    )

    render() {
        const customColor = {
            '--bs-link-color': this.props.primaryColor,
            '--bs-link-hover-color': this.props.primaryColor,
            '--bs-primary': this.props.primaryColor,
            '--bs-primary-rgb': this.props.primaryColorRGB,
        }
        const btnColor = {
            '--bs-btn-bg': this.props.primaryColor,
            '--bs-btn-border-color': this.props.primaryColor,
            '--bs-btn-hover-bg': this.props.primaryColor,
            '--bs-btn-hover-border-color': this.props.primaryColor,
            '--bs-btn-focus-shadow-rgb': this.props.primaryColorRGB,
            '--bs-btn-active-bg': this.props.primaryColor,
            '--bs-btn-active-border-color': this.props.primaryColor,
            '--bs-btn-disabled-color': this.props.primaryColor,
            '--bs-btn-disabled-border-color': this.props.primaryColor,
        }
        const btnOutlinedColor = {
            '--bs-btn-color': this.props.primaryColor,
            '--bs-btn-border-color': this.props.primaryColor,
            '--bs-btn-hover-bg': this.props.primaryColor,
            '--bs-btn-hover-border-color': this.props.primaryColor,
            '--bs-btn-focus-shadow-rgb': this.props.primaryColorRGB,
            '--bs-btn-active-bg': this.props.primaryColor,
            '--bs-btn-active-border-color': this.props.primaryColor,
            '--bs-btn-disabled-color': this.props.primaryColor,
            '--bs-btn-disabled-border-color': this.props.primaryColor,
        }
        if (!this.state.persona) {
            return (
                // <div className="tab-pane active" style={{ borderRadius: 'var(--tab-border-radius)', padding: '1rem', overflow: 'hidden' }}>
                // </div>
                <PersonaTable
                    personaList={this.state.personaList}
                    handleChoosePersona={this.handleChoosePersona}
                />
            )
        }
        else {
            let normalRecipes = undefined,
                triangleRecipes = undefined,
                specialRecipes = undefined;
            if (!this.state.persona.special) {
                normalRecipes = this.state.recipes.filter(r => (r.sources.length === 2))
                if (normalRecipes && normalRecipes.length <= 0)
                    normalRecipes = undefined

                triangleRecipes = this.state.recipes.filter(r => (r.sources.length === 3))
                if (triangleRecipes && triangleRecipes.length <= 0)
                    triangleRecipes = undefined
            }
            else {
                specialRecipes = this.state.recipes
            }

            return (
                <div className="card container-fluid" style={customColor}>
                    <h5 className="card-title">
                        {this.state.persona.name}
                        <span> | Total recipes: {this.state.recipes.length}</span>
                    </h5>
                    <button
                        className="btn btn-primary btn-sm position-absolute end-0 top-0 mt-2 me-2"
                        style={{ ...customColor, ...btnColor }}
                        onClick={this.handleResetPersona}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>

                    <ul class="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link px-2 active" id="normal-tab" data-bs-toggle="tab" data-bs-target="#bordered-normal" type="button" role="tab" aria-controls="normal" aria-selected="true">Normal</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link px-2" id="triangle-tab" data-bs-toggle="tab" data-bs-target="#bordered-triangle" type="button" role="tab" aria-controls="triangle" aria-selected="false">Triangle</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link px-2" id="special-tab" data-bs-toggle="tab" data-bs-target="#bordered-special" type="button" role="tab" aria-controls="special" aria-selected="false">Special</button>
                        </li>
                    </ul>
                    <div class="tab-content pt-2" id="borderedTabContent">
                        <div class="tab-pane fade show active" id="bordered-normal" role="tabpanel" aria-labelledby="normal-tab">
                            {
                                normalRecipes ?
                                    <RecipeTable
                                        recipeList={normalRecipes}
                                        handleChoosePersona={this.handleChoosePersona}
                                    />
                                    : this.noRecipe
                            }
                        </div>
                        <div class="tab-pane fade" id="bordered-triangle" role="tabpanel" aria-labelledby="triangle-tab">
                            {
                                triangleRecipes ?
                                    <RecipeTable
                                        recipeList={triangleRecipes}
                                        handleChoosePersona={this.handleChoosePersona}
                                    />
                                    : this.noRecipe
                            }
                        </div>
                        <div class="tab-pane fade" id="bordered-special" role="tabpanel" aria-labelledby="special-tab">
                            {
                                specialRecipes ?
                                    <RecipeTable
                                        recipeList={specialRecipes}
                                        handleChoosePersona={this.handleChoosePersona}
                                    />
                                    : this.noRecipe
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }
}

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
            <option selected>Choose persona</option>
            {
                personaList.map(p => (
                    <option value={p.name}>{p.name}</option>
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

export function FusionTable(props) {

    const [personaArr, setPersonaArr] = useState({});
    const [fusionResult, setFusionResult] = useState(undefined);

    const handleChange = (persona, index) => {
        setPersonaArr(prev => ({ ...prev, [index]: persona }))
    }

    // useEffect(() => {
    //     console.log(fusionResult);

    // }, [fusionResult])
    // useEffect(() => {
    //     console.log(personaArr);

    // }, [personaArr])

    const ResetState = () => {
        setPersonaArr({})
        setFusionResult(undefined)
    }

    const handleFuse = () => {
        const p = Object.values(personaArr)
        if (p.length === 2)
            setFusionResult(props.fusionCalculator.fuseNormal(...p))
        if (p.length === 3)
            setFusionResult(props.fusionCalculator.fuseTriangle(...p))
    }

    return (
        <>
            <ul className="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button onClick={ResetState} className="nav-link px-2 active" id="normal-tab" data-bs-toggle="tab" data-bs-target="#bordered-normal" type="button" role="tab" aria-controls="normal" aria-selected="true">Normal</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={ResetState} className="nav-link px-2" id="triangle-tab" data-bs-toggle="tab" data-bs-target="#bordered-triangle" type="button" role="tab" aria-controls="triangle" aria-selected="false">Triangle</button>
                </li>
            </ul>
            <div className="tab-content pt-2" id="borderedTabContent">
                <div className="tab-pane fade show active" id="bordered-normal" role="tabpanel" aria-labelledby="normal-tab">
                    <div className="container-fluid">
                        <div className="row">
                            <FusionCard
                                index={0}
                                title='Persona 1'
                                levelEditDisabled
                                fusionCalculator={props.fusionCalculator}
                                personaList={props.personaList}
                                onChange={handleChange}
                            />

                            <div className="col-4"></div>

                            <FusionCard
                                index={1}
                                title='Persona 2'
                                levelEditDisabled
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
                </div>
                <div className="tab-pane fade" id="bordered-triangle" role="tabpanel" aria-labelledby="triangle-tab">
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
                </div>
            </div>

        </>
    );
}