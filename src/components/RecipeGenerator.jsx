import React, { useState, useMemo } from "react";
import persona from "../data/persona3p_personae";
import { FusionCalculator } from "../helpers/personaUtils";
import { arcana2Combos, arcana3Combos, specialCombos } from "../data/persona3p_fusion";
import DataTable from "react-data-table-component";
import styled from "styled-components";

const calculator = new FusionCalculator(persona, arcana2Combos, arcana3Combos, specialCombos)

export default class RecipeGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persona: undefined,
            personaList: persona,
            recipes: undefined
        };
    }

    handleChoosePersona = (p) => {
        this.setState({
            persona: p,
            recipes: calculator.getRecipes_Pre(p),
            personaList: undefined
        })
    }

    handleResetPersona = () => {
        this.setState({
            persona: undefined,
            recipes: undefined,
            personaList: persona
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
                <div className="tab-pane active" style={{ borderRadius: 'var(--tab-border-radius)', padding: '1rem', overflow: 'hidden' }}>
                    <PersonaTable
                        personaList={this.state.personaList}
                        handleChoosePersona={this.handleChoosePersona}
                    />
                </div>
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
                    <div className="card-body position-relative">
                        <h5 className="card-title">
                            {this.state.persona.name}
                            <span> | Total recipes: {this.state.recipes.length}</span>
                        </h5>
                        <button
                            className="btn btn-primary btn-sm position-absolute end-0 top-0 mt-2"
                            style={{ ...customColor, ...btnColor }}
                            onClick={this.handleResetPersona}>
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    </div>
                    <ul className="nav nav-tabs nav-justified">
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="tab" href="#normal">Normal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#triangle">Triangle</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#special">Special</a>
                        </li>
                    </ul>
                    <div className="tab-content text-nowrap">
                        <div className="tab-pane fade show active" id="normal">
                            {
                                normalRecipes ?
                                    <RecipeTable
                                        recipeList={normalRecipes}
                                        handleChoosePersona={this.handleChoosePersona}
                                    />
                                    : this.noRecipe
                            }
                        </div>
                        <div className="tab-pane fade" id="triangle">
                            {
                                triangleRecipes ?
                                    <RecipeTable
                                        recipeList={triangleRecipes}
                                        handleChoosePersona={this.handleChoosePersona}
                                    />
                                    : this.noRecipe
                            }
                        </div>
                        <div className="tab-pane fade" id="special">
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
    subHeader: {
        style: {
            padding: '4px 16px'
        },
    },
    headRow: {
        style: {
            backgroundColor: 'var(--tab-color-inactive)',
        },
    },
    head: {
        style: {
            fontSize: '.9rem',
            fontWeight: 700,
        },
    },
    rows: {
        style: {
            fontSize: '.75rem',
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

function RecipeTable(props) {

    const columns = [
        {
            name: 'Cost',
            selector: row => row.cost,
            sortable: true,
            grow: 0.5,
        },
        {
            name: 'Ingredients',
            cell: row => <div className="row flex-nowrap container-fluid">
                {
                    row.sources.map(
                        persona => {
                            if (persona.max) {
                                return <span className="col" style={{ cursor: "pointer" }} onClick={() => props.handleChoosePersona(persona)}>
                                    {persona.name} <span className="badge bg-secondary">Max</span>
                                </span>
                            }
                            return <span className="col" style={{ cursor: "pointer" }} onClick={() => props.handleChoosePersona(persona)}>
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

function PersonaTable(props) {

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

        if (calculator.arcanaRank[a] > calculator.arcanaRank[b]) {
            return 1;
        }

        if (calculator.arcanaRank[b] > calculator.arcanaRank[a]) {
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
                title=''
                columns={columns}
                data={filteredPersona}
                customStyles={styles}
                pagination
                highlightOnHover
                onRowClicked={(row) =>
                    props.handleChoosePersona(calculator.getPersona(row.name))
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