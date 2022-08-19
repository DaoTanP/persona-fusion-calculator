import React from 'react';
import persona from '../../data/persona3p_personae'
import { arcana2Combos, arcana3Combos, specialCombos } from "../../data/persona3p_fusion";
import { FusionCalculator } from "../../helpers/personaUtils";
import { FusionTable } from '../../components/FusionHelper';

const calculator = new FusionCalculator(persona, arcana2Combos, arcana3Combos, specialCombos)

export default function P3pFusion() {

    return (
        <>
            <FusionTable
                personaList={calculator.personaList}
                fusionCalculator={calculator}
            />
        </>
    );

}