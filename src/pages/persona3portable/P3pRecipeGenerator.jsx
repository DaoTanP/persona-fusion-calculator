import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import persona from '../../data/persona3p_personae'
import { arcana2Combos, arcana3Combos, specialCombos } from "../../data/persona3p_fusion";
import { FusionCalculator } from "../../helpers/personaUtils";
import { ComponentLoading, PersonaTable, RecipeTable } from '../../components/FusionHelper';

const calculator = new FusionCalculator(persona, arcana2Combos, arcana3Combos, specialCombos)

const noRecipe = (
    <div className="container-fluid py-5 text-center">
        <h3>No recipe found</h3>
    </div>
)

export default function P3pRecipeGenerator() {
    const { personaName } = useParams();
    const navigate = useNavigate();

    const handleChoosePersona = (p) => {
        let persona = (typeof p === "string") ? calculator.getPersona(p) : p

        navigate(persona.name);
    }

    return (
        <>
            {
                personaName ?
                    <RecipeTab
                        personaName={personaName}
                        handleChoosePersona={handleChoosePersona}
                    />
                    :
                    <PersonaTable
                        fusionCalculator={calculator}
                        personaList={calculator.personaList}
                        handleChoosePersona={handleChoosePersona}
                    />
            }
        </>
    );

}

const RecipeTab = ({ personaName, handleChoosePersona }) => {
    let p = calculator.getPersona(personaName);

    const [appState, setAppState] = useState({
        loading: true,
        recipes: null,
    });

    // useEffect(() => {
    //     // setAppState({ loading: true });

    //     calculator.getRecipes_async(p).then((list) => {
    //         setAppState({ loading: false, recipes: list });
    //     });
    // }, [setAppState]);

    useEffect(() => {
        setAppState({ loading: true });
        p = calculator.getPersona(personaName);

        calculator.getRecipes_async(p).then((list) => {
            setAppState({ loading: false, recipes: list });
        });
    }, [personaName]);

    const TabComponent = ComponentLoading(Tab);

    return (
        <TabComponent
            isLoading={appState.loading}
            persona={p}
            recipes={appState.recipes}
            handleChoosePersona={handleChoosePersona}
        />
    )
}

const Tab = (props) => {
    let normalRecipes = undefined,
        triangleRecipes = undefined,
        specialRecipes = undefined;
    if (!props.persona.special) {
        normalRecipes = props.recipes.filter(r => (r.sources.length === 2))
        if (normalRecipes && normalRecipes.length <= 0)
            normalRecipes = undefined

        triangleRecipes = props.recipes.filter(r => (r.sources.length === 3))
        if (triangleRecipes && triangleRecipes.length <= 0)
            triangleRecipes = undefined
    }
    else {
        specialRecipes = props.recipes
    }

    return (
        <div className="card container-fluid">
            <h5 className="card-title">
                {props.persona.name}
                <span> | Total recipes: {props.recipes?.length || 'N/A'}</span>
            </h5>

            <ul className="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link px-2 active" id="normal-tab" data-bs-toggle="tab" data-bs-target="#bordered-normal" type="button" role="tab" aria-controls="normal" aria-selected="true">Normal</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link px-2" id="triangle-tab" data-bs-toggle="tab" data-bs-target="#bordered-triangle" type="button" role="tab" aria-controls="triangle" aria-selected="false">Triangle</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link px-2" id="special-tab" data-bs-toggle="tab" data-bs-target="#bordered-special" type="button" role="tab" aria-controls="special" aria-selected="false">Special</button>
                </li>
            </ul>
            <div className="tab-content pt-2" id="borderedTabContent">
                <div className="tab-pane fade show active" id="bordered-normal" role="tabpanel" aria-labelledby="normal-tab">
                    {
                        normalRecipes ?
                            <RecipeTable
                                recipeList={normalRecipes}
                                handleChoosePersona={props.handleChoosePersona}
                            />
                            : noRecipe
                    }
                </div>
                <div className="tab-pane fade" id="bordered-triangle" role="tabpanel" aria-labelledby="triangle-tab">
                    {
                        triangleRecipes ?
                            <RecipeTable
                                recipeList={triangleRecipes}
                                handleChoosePersona={props.handleChoosePersona}
                            />
                            : noRecipe
                    }
                </div>
                <div className="tab-pane fade" id="bordered-special" role="tabpanel" aria-labelledby="special-tab">
                    {
                        specialRecipes ?
                            <RecipeTable
                                recipeList={specialRecipes}
                                handleChoosePersona={props.handleChoosePersona}
                            />
                            : noRecipe
                    }
                </div>
            </div>
        </div>
    )
}