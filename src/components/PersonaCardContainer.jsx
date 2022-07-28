import React from "react";
import PersonaCard from "./PersonaCard";
import persona from "../data/persona3p_personae";
import { FusionCalculator } from "../personaUtils";
import { arcana2Combos, arcana3Combos, specialCombos } from "../data/persona3p_fusion";

const calculator = new FusionCalculator(persona, arcana2Combos, arcana3Combos, specialCombos)
const ps = [calculator.getPersona('Pyro Jack'), calculator.getPersona('Unicorn'), calculator.getPersona('Orpheus')]
let p = calculator.getTriangleRecipes('Fool').sort((recipe1, recipe2) => recipe1.result.level - recipe2.result.level)
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

const cardContainer = {
    maxWidth: '100%',
    maxHeight: '80vh',
    height: '100%',
    overflowY: 'auto',
    padding: '1rem 0',
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
        if (!this.state.persona)
            return (
                <div style={{ ...flexContainer, ...cardContainer }}>
                    {
                        persona.map(p =>
                            <PersonaCard
                                key={p.name}
                                background='darkblue'
                                image={'./image/' + p.arcana + "/" + p.name + '.png'}
                                name={p.name}
                                arcana={p.arcana}
                                level={p.level}
                                onClick={this.handleChoosePersona}
                                onClickParam={[p]}
                            />
                        )
                    }
                </div>
            );
        else
            return (
                <div style={{ ...flexContainer, ...cardContainer }}>
                    <div style={{ ...flexContainer, flexDirection: 'column', flexWrap: 'nowrap', width: '100%' }}>
                        <h1>{'There are ' + this.state.recipes.length + ' recipes for ' + this.state.persona.name}</h1>
                        <PersonaCard
                            key={this.state.persona.name}
                            background='darkblue'
                            image={'./image/' + this.state.persona.arcana + "/" + this.state.persona.name + '.png'}
                            name={this.state.persona.name}
                            arcana={this.state.persona.arcana}
                            level={this.state.persona.level}
                        />
                        <button onClick={this.handleResetPersona}>Back to Persona list</button>
                    </div>
                    <div style={{ ...flexContainer }}>
                        {
                            this.state.recipes.map((recipe, index) =>
                                <div style={{ ...flexContainer, flexDirection: 'column', alignItems: 'center' }} key={index}>
                                    <div style={{ ...flexContainer }}>
                                        {
                                            recipe.sources.map(persona =>
                                                <PersonaCard
                                                    key={persona.name}
                                                    background='darkblue'
                                                    image={'./image/' + persona.arcana + "/" + persona.name + '.png'}
                                                    name={persona.name}
                                                    arcana={persona.arcana}
                                                    level={persona.level}
                                                    onClick={this.handleChoosePersona}
                                                    onClickParam={[persona]}
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