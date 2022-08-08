
export class FusionCalculator {
    constructor(personaList, arcana2Combos = undefined, arcana3Combos = undefined, specialCombos = undefined) {
        this.personaList = personaList
        this.personaeByArcana = this.groupPersonaeByArcana(personaList);
        this.arcanaRank = this.getArcanaRank(personaList);
        this.arcana2Combos = arcana2Combos
        this.arcana3Combos = arcana3Combos
        this.specialCombos = specialCombos
        this.recipeListNormal = {}
        this.recipeListTriangle = {}
        // this.getAllRecipes().then((recipeList) => this.recipeList = recipeList)
    }

    //#region Data Utils
    groupPersonaeByArcana(personaList) {
        let personaeByArcana_ = {}
        for (let i = 0; i < personaList.length; i++) {
            let persona = personaList[i]
            if (!personaeByArcana_[persona.arcana]) {
                personaeByArcana_[persona.arcana] = []
            }
            personaeByArcana_[persona.arcana].push(persona)
        }

        for (let key in personaeByArcana_) {
            personaeByArcana_[key].sort((a, b) => a.level - b.level)
        }

        return personaeByArcana_
    }

    getPersona(personaName) {
        for (let i = 0; i < this.personaList.length; i++) {
            const p = this.personaList[i];
            if (p.name === personaName)
                return p
        }
        return null
    }

    canFuse(persona1, persona2, persona3) {
        if (persona1.name === persona2.name) return false;
        if (persona3.name === persona1.name) return false;
        if (persona3.name === persona2.name) return false;

        if (persona3.level < persona1.level) return false;
        if (persona3.level < persona2.level) return false;

        if (persona3.level === persona1.level) {
            return this.arcanaRank[persona3.arcana] < this.arcanaRank[persona1.arcana];
        }
        if (persona3.level === persona2.level) {
            return this.arcanaRank[persona3.arcana] < this.arcanaRank[persona2.arcana];
        }

        return true;
    }

    getArcanaRank(personaList) {
        var arcanaRank_ = {};
        var rank = 0;
        var lastArcana = null;
        for (let i = 0; i < personaList.length; i++) {
            let arcana = personaList[i].arcana;
            if (arcana === lastArcana) continue;
            lastArcana = arcana;
            arcanaRank_[arcana] = rank++;
        }
        return arcanaRank_;
    }

    /**
     * Check if arr1 contain arr2
     * @param {Array}arr1 parent array
     * @param {Array}arr2 child array
     */
    contain(arr1, arr2) {
        let i = 0
        while (i < arr2.length) {
            for (let j = 0; j <= arr1.length; j++) {
                // console.log(arr1[i] + ' ' + arr2[j])
                if (arr1[j] === arr2[i]) {
                    i++
                    break
                }
                if (j === arr1.length)
                    return false
            }
        }
        return true
    }

    /**
     * Check if arr1 and arr2 have the same values (ignore order)
     */
    areEqual(arr1, arr2) {
        return arr1.sort().join(' ') === arr2.sort().join(' ');
    }
    //#endregion

    //#region Fusing
    /**
     * Fuse 2 persona. This can handle normal fusion, rare fusion or special fusion.
     * @param persona1 First persona to fuse
     * @param persona2 Second persona to fuse
     * @returns {PersonaData} The result persona, or null if the fusion is not possible
     */
    fuse(persona1, persona2) {
        // special fusion
        let result = this.getSpecialFuseResult(persona1, persona2)
        if (result !== null) {
            return result
        }

        result = this.fuseNormal(persona1, persona2)
        return result
    }

    /**
     * Return the result persona if 2 or more given persona is a special formula
     * @param persona The persona combos to check
     * @returns the result persona if it is a special formula, null otherwise
     */
    getSpecialFuseResult(...persona) {
        for (let x = 0; x < this.specialCombos.length; x++) {
            let combo = this.specialCombos[x]
            if (this.areEqual(combo.sources, persona.map(p => p.name))) {
                return this.getPersona(combo.result)
            }
        }

        return null
    }

    /**
     * Fuse 2 persona. Doesn't handle rare fusion and special fusion.
     * @param persona1 First persona to fuse
     * @param persona2 Second persona to fuse
     * @returns The result persona, or null when the fusion is not possible,
     * the fusion is a rare fusion, or the fusion is a special fusion.
     */
    fuseNormal(persona1, persona2) {
        // don't handle 2-persona-special fusions
        if (this.getSpecialFuseResult(persona1, persona2) !== null) {
            return null
        }

        let level = 1 + Math.floor((persona1.level + persona2.level) / 2)
        let arcana = this.getResultArcana(persona1, persona2)
        if (arcana === null) {
            return null
        }

        let personae = this.personaeByArcana[arcana]

        let persona = null
        let found = false
        if (persona1.arcana === persona2.arcana) {
            // same-arcana down-rank fusion
            for (let i = personae.length - 1; i >= 0; i--) {
                persona = personae[i]
                if (persona.level <= level) {
                    if (persona.special || /* persona.rare || */
                        persona === persona1 || persona === persona2)
                        continue

                    found = true
                    break
                }
            }
        } else {
            // different-arcana fusion
            for (let i = 0; i < personae.length; i++) {
                persona = personae[i]
                if (persona.level >= level) {
                    if (persona.special /*|| persona.rare*/) continue
                    found = true
                    break
                }
            }
        }

        if (!found)
            persona = null

        return persona
    }

    fuseTriangle(persona1, persona2, persona3) {
        // don't handle 3-persona-special fusions
        if (this.getSpecialFuseResult(persona1, persona2, persona3) !== null) {
            return null
        }

        let level = 5 + Math.floor((persona1.level + persona2.level + persona3.level) / 3);
        let arcana = this.getResultArcana(persona1, persona2, persona3)
        let personae = this.personaeByArcana[arcana];

        let found = false;
        let i = 0;
        for (; i < personae.length; i++) {
            let persona = personae[i]
            if (persona.level >= level) {
                if (persona.special) continue;
                found = true;
                break;
            }
        }
        if (!found) return null;

        // In same arcana fusion, skip over the ingredients.
        if (persona1.arcana === arcana
            && persona2.arcana === arcana
            && persona3.arcana === arcana) {
            while (persona1.name === personae[i].name
                || persona2.name === personae[i].name
                || persona3.name === personae[i].name) {
                i++;
                if (!personae[i]) return null;
            }
        }

        return personae[i];
    }
    //#endregion

    //#region Recipe
    /**
     * Get all 2-fusion recipes with the given persona as one of the ingredients
     * @param persona The persona to fuse from
     * @returns {Recipe[]} The list of recipes. In each recipe's sources, the given persona
     * is guaranteed to be the first one.
     */
    getAllResultingRecipesFrom(persona) {
        let recipes = []
        for (let i = 0; i < this.personaList.length; i++) {
            let result = this.fuse(persona, this.personaList[i])
            if (result !== null) {
                let recipe = {
                    sources: [persona, this.personaList[i]],
                    result: result
                }

                this.addRecipe(recipe, recipes, false)
            }
        }

        return recipes
    }

    /**
     * Get the recipe for a special persona
     * @param persona The special persona
     * @returns {Array} An array of 1 element containing the recipe for the persona
     */
    getSpecialRecipe(persona) {
        if (!persona.special) {
            return null
        }
        let allRecipe = []
        for (let i = 0; i < this.specialCombos.length; i++) {
            let combo = this.specialCombos[i]
            if (persona.name === combo.result) {
                let recipe = {
                    sources: [],
                    result: this.getPersona(combo.result)
                }
                for (let j = 0; j < combo.sources.length; j++) {
                    recipe.sources.push(this.getPersona(combo.sources[j]))
                }
                this.addRecipe(recipe, allRecipe, true)
                return allRecipe
            }
        }
        return null
    }

    /**
     * Get the list of all recipes
     * @returns {Array} List of all recipes
     */
    async getAllRecipes() {
        let allRecipe = []
        let arcanaList = Object.keys(this.arcanaRank).sort((a, b) => a - b)

        for (let i = 0; i < arcanaList.length; i++) {
            const arcana = arcanaList[i]
            let recipes = this.getNormalRecipes(arcana)
            for (let i = 0; i < recipes.length; i++) {
                this.addRecipe(recipes[i], allRecipe, true)
            }
            recipes = this.getTriangleRecipes(arcana)
            for (let i = 0; i < recipes.length; i++) {
                this.addRecipe(recipes[i], allRecipe, true)
            }
        }

        for (let i = 0; i < this.specialCombos.length; i++) {
            allRecipe.push(this.getSpecialRecipe(this.getPersona(this.specialCombos[i].result))[0])
        }

        return allRecipe.sort((a, b) => a.cost - b.cost)
    }

    getAllNormalRecipes() {
        let normalRecipesByArcana = {}
        let arcanaList = Object.keys(this.arcanaRank).sort((a, b) => a - b)

        for (let i = 0; i < arcanaList.length; i++) {
            const arcana = arcanaList[i]
            let recipes = this.getNormalRecipes(arcana)
            let allRecipe = []
            for (let i = 0; i < recipes.length; i++) {
                this.addRecipe(recipes[i], allRecipe, true)
            }
            normalRecipesByArcana[arcana] = allRecipe.sort((a, b) => a.cost - b.cost)
        }

        return normalRecipesByArcana
    }

    getAllTriangleRecipes() {
        let triangleRecipesByArcana = {}
        let arcanaList = Object.keys(this.arcanaRank).sort((a, b) => a - b)

        for (let i = 0; i < arcanaList.length; i++) {
            const arcana = arcanaList[i]
            let recipes = this.getTriangleRecipes(arcana)
            let allRecipe = []
            for (let i = 0; i < recipes.length; i++) {
                this.addRecipe(recipes[i], allRecipe, true)
            }
            triangleRecipesByArcana[arcana] = allRecipe.sort((a, b) => a.cost - b.cost)
        }

        return triangleRecipesByArcana
    }

    /**
     * Get the list of all recipes for the given persona (pre-calculated)
     * @param persona The resulting persona
     * @returns {Array} List of all recipes for the given persona
     */
    getRecipes_Pre(persona) {
        if (persona.special)
            return this.getSpecialRecipe(persona)

        let allRecipe
        if (this.recipeListTriangle[persona.arcana] === undefined) {
            let arcanaRecipes = []
            let recipes = this.getTriangleRecipes(persona.arcana)
            for (let i = 0; i < recipes.length; i++) {
                this.addRecipe(recipes[i], arcanaRecipes, true)
            }
            this.recipeListTriangle[persona.arcana] = arcanaRecipes.sort((a, b) => a.cost - b.cost)
        }
        allRecipe = this.recipeListTriangle[persona.arcana]
            .filter((recipe) => this.filterResultingPersona(recipe, persona))

        if (this.recipeListNormal[persona.arcana] === undefined) {
            let arcanaRecipes = []
            let recipes = this.getNormalRecipes(persona.arcana)
            for (let i = 0; i < recipes.length; i++) {
                this.addRecipe(recipes[i], arcanaRecipes, true)
            }
            this.recipeListNormal[persona.arcana] = arcanaRecipes.sort((a, b) => a.cost - b.cost)
        }
        var r = this.recipeListNormal[persona.arcana]
            .filter((recipe) => this.filterResultingPersona(recipe, persona))
        allRecipe.push(...r)

        return allRecipe
    }

    /**
     * Get the list of all recipes for the given persona
     * @param persona The resulting persona
     * @returns {Array} List of all recipes for the given persona
     */
    getRecipes(persona) {
        // Check special recipes.
        if (persona.special) {
            return this.getSpecialRecipe(persona)
        }

        let allRecipe = []
        let recipes = this.getNormalRecipes(persona.arcana)
        recipes = recipes.filter((recipe) => this.filterResultingPersona(recipe, persona))
        for (let i = 0; i < recipes.length; i++) {
            this.addRecipe(recipes[i], allRecipe, true)
        }
        recipes = this.getTriangleRecipes(persona.arcana)
        recipes = recipes.filter((recipe) => this.filterResultingPersona(recipe, persona))
        for (let i = 0; i < recipes.length; i++) {
            this.addRecipe(recipes[i], allRecipe, true)
        }

        return allRecipe.sort((a, b) => a.cost - b.cost)
    }

    /**
     * Return true if the given recipe have expectedPersona as the result.
     * A recipe is good if the sources are different from the expected result,
     * and the actual result is the same as the expected result.
     * @param recipe The recipe to check
     * @param expectedPersona The expected resulting persona
     * @returns {boolean} true if the recipe is correct for the given persona, false otherwise
     */
    filterResultingPersona(recipe, expectedPersona) {
        for (let i = 0; i < recipe.sources.length; i++) {
            if (recipe.sources[i].name === expectedPersona.name)
                return false
        }

        return recipe.result.name === expectedPersona.name
    }

    /**
     * Get all recipes that result in a persona in the given arcana
     * @param arcana The result arcana
     * @returns {Array} the list of recipes
     */
    getNormalRecipes(arcana) {
        let recipes = []
        let arcanaCombos = this.arcana2Combos.filter(x => x.result === arcana)

        // fuse 2 persona normally (including down-rank)
        for (let i = 0, combo = null; (combo = arcanaCombos[i]); i++) {
            let personae1 = this.personaeByArcana[combo.source[0]]
            let personae2 = this.personaeByArcana[combo.source[1]]

            for (let j = 0, persona1 = null; (persona1 = personae1[j]); j++) {
                for (let k = 0, persona2 = null; (persona2 = personae2[k]); k++) {
                    // for same arcana fusion only consider k > j to avoid duplicates
                    if (persona1.arcana === persona2.arcana && k <= j)
                        continue

                    // // rare fusion will be handled separately
                    // if (persona1.rare && !persona2.rare) continue
                    // if (persona2.rare && !persona1.rare) continue

                    let result = this.fuseNormal(persona1, persona2)
                    if (!result)
                        continue

                    recipes.push({
                        sources: [persona1, persona2],
                        result: result
                    })
                }
            }
        }

        return recipes
    }

    getTriangleRecipes(arcana) {
        let recipes = [];
        let arcana3Combos = this.arcana3Combos.filter(x => x.result === arcana)
        for (let i = 0; i < arcana3Combos.length; i++) {
            let j = 0;
            while (j <= 1) {
                let sourceArcana = arcana3Combos[i].source;
                let highestLevelArcana = sourceArcana[1 - j];
                let highestLevelPersonae = this.personaeByArcana[highestLevelArcana];
                let step1Recipes = this.getNormalRecipes(sourceArcana[j]);
                for (let k = 0; k < step1Recipes.length; k++) {
                    let step1Recipe = step1Recipes[k];
                    let persona1 = step1Recipe.sources[0];
                    let persona2 = step1Recipe.sources[1];
                    let thirdPersonae = highestLevelPersonae.filter(p => this.canFuse(persona1, persona2, p));
                    for (let l = 0; l < thirdPersonae.length; l++) {
                        let persona3 = thirdPersonae[l];
                        var result = this.fuseTriangle(persona1, persona2, persona3);
                        if (!result)
                            continue;

                        recipes.push({
                            sources: [persona1, persona2, persona3],
                            result: result
                        })
                    }
                }
                j++;
            }
        }

        return recipes
    }

    //find all source arcana that contain a1 and a2
    getResultArcana(persona1, persona2, persona3 = undefined) {
        if (persona3 === undefined) {
            return this.fuseArcana(persona1.arcana, persona2.arcana, this.arcana2Combos)
        }

        let p = [persona1, persona2, persona3].sort((a, b) => a.level - b.level)
        let arcana = this.fuseArcana(p[0].arcana, p[1].arcana, this.arcana2Combos)
        return this.fuseArcana(arcana, p[2].arcana, this.arcana3Combos)
    }

    fuseArcana(arcana1, arcana2, arcanaCombos) {
        let arcana = null
        arcanaCombos.forEach(combo => {
            let a1 = combo.source[0], a2 = combo.source[1]
            if ((a1 === arcana1 && a2 === arcana2) ||
                (a1 === arcana2 && a2 === arcana1)) {
                arcana = combo.result
            }
        })

        return arcana
    }


    /**
     * Add a recipe to a list of recipe. Before adding, add an estimated cost
     * to the recipe and sort the recipe's sources.
     * @param recipe The recipe to add
     * @param allRecipes List of recipes to add to
     * @param sortIngredients if true the ingredient list will be sorted
     */
    addRecipe(recipe, allRecipes, sortIngredients) {
        // add an approximated cost
        recipe.cost = this.getApproxCost(recipe)

        if (sortIngredients) {
            // Sort ingredients so that highest level persona is first
            recipe.sources.sort((a, b) => b.level - a.level)
        }

        // help with rare persona fusion warning
        // let isAllRare = true
        // for (let i = 0; i < recipe.sources.length; i++) {
        //     isAllRare = isAllRare && recipe.sources[i].rare
        // }
        // recipe.isAllRare = isAllRare

        allRecipes.push(recipe)
    }

    getApproxCost(recipe) {
        let cost = 0
        for (let i = 0, source = null; (source = recipe.sources[i]); i++) {
            let level = source.level
            cost += (27 * level * level) + (126 * level) + 2147
        }

        return cost
    }
    //#endregion
}
