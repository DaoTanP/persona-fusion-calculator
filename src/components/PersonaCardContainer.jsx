import React from "react";
import PersonaCard from "./PersonaCard";
import persona from "../data/persona3p_personae";
import { FusionCalculator } from "../personaUtils";
import { arcana2Combos, arcana3Combos, specialCombos } from "../data/persona3p_fusion";

const calculator = new FusionCalculator(persona, arcana2Combos, arcana3Combos, specialCombos)
// const ps = [calculator.getPersona('Pyro Jack'), calculator.getPersona('Unicorn'), calculator.getPersona('Orpheus')]
// let p = calculator.getTriangleRecipes('Fool').sort((recipe1, recipe2) => recipe1.result.level - recipe2.result.level)
// console.log('Result: ');
// arcana rank
// console.log(Object.entries(calculator.arcanaRank).sort((a, b) => a - b));
// console.log(...ps);
// console.log(p);


const flexContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: '1rem',
}

class PersonaCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persona: undefined,
            recipes: undefined
        };
    }

    handleChoosePersona = (p) => {
        this.setState({ persona: p, recipes: calculator.getRecipes(p) })
    }

    handleResetPersona = () => {
        this.setState({ persona: undefined, recipes: undefined })
    }

    render() {
        if (!this.state.persona) {
            if (!this.props.isCardVertical) {
                return (
                    <div className="container-fluid pad2y flex-container">
                        <div class="row">
                            <h4 className="col-sm-8 text-primary">List of persona</h4>
                            <div class="col-sm input-group mb-3">
                                <input type="text" class="form-control" placeholder="Persona Name" aria-label="PersonaName" aria-describedby="button-addon2" />
                                <button class="btn btn-outline-primary" type="button" id="button-addon2"><span class="material-symbols-outlined" style={{ transform: 'translateY(20%)' }}>
                                    search
                                </span></button>
                            </div>
                        </div>
                        <table className="table table-bordered table-responsive table-sm table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Level</th>
                                    <th>Arcana</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {
                                    persona.map(p =>
                                        <tr key={p.name}>
                                            <td>{p.name}</td>
                                            <td>{p.level}</td>
                                            <td>{p.arcana}</td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div >
                )
            }
            return (
                <div className="flex-container" style={{ padding: '2rem' }}>
                    <PersonaCard
                        key={0}
                        image=''
                        name='Name'
                        level=''
                        arcana='Arcana'
                        isVertical={this.props.isCardVertical}
                    />
                    {
                        persona.map(p =>
                            <PersonaCard
                                key={p.name}
                                image={'./image/' + p.arcana + "/" + p.name + '.png'}
                                persona={p}
                                onClick={this.handleChoosePersona}
                                onClickParam={[p]}
                                isVertical={this.props.isCardVertical}
                            />
                        )}
                </div>
            );
        }
        else
            return (
                <div className="flex-container" style={{ padding: '2rem' }}>
                    <div className="flex-container" style={{ flexDirection: 'column', width: '100%' }}>
                        <h1>{'There are ' + this.state.recipes.length + ' recipes for ' + this.state.persona.name}</h1>
                        {
                            this.props.isCardVertical &&
                            <PersonaCard
                                key={this.state.persona.name}
                                image={'./image/' + this.state.persona.arcana + "/" + this.state.persona.name + '.png'}
                                persona={this.state.persona}
                                isVertical={this.props.isCardVertical}
                            />
                        }
                        <button onClick={this.handleResetPersona}>Back to Persona list</button>
                    </div>
                    <div style={{ ...flexContainer }}>
                        {
                            this.state.recipes.map((recipe, index) =>
                                <div style={{ ...flexContainer, flexDirection: 'column' }} key={index}>
                                    <div style={{ ...flexContainer }}>
                                        {
                                            recipe.sources.map(persona =>
                                                <PersonaCard
                                                    key={persona.name}
                                                    image={'./image/' + persona.arcana + "/" + persona.name + '.png'}
                                                    persona={persona}
                                                    onClick={this.handleChoosePersona}
                                                    onClickParam={[persona]}
                                                    isVertical={this.props.isCardVertical}
                                                />
                                            )
                                        }
                                    </div>
                                    <h1>{'Cost: ' + recipe.cost}</h1>
                                </div>
                            )
                        }
                    </div>
                </div >
            );
    }
}

export default PersonaCardContainer;