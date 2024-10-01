const wizButton = document.querySelector(`#search-btn-wizard`)
const textInputWiz = document.querySelector(`#search-bar-wizard`)
const wizImg = document.querySelector(`#wizard-img`)
const wizHouseImg = document.querySelector(`#wizard-house-img`)
const wizHouse = document.querySelector(`#wizard-house`)
const wizName = document.querySelector(`#wizard-name`)
const wizAlias = document.querySelector(`#alias`)
const wizBorn = document.querySelector(`#born`)
const wizOrMug = document.querySelector(`#wiz-or-mug`)
const wizAncestry = document.querySelector(`#ancestry`)
const wizSpecies = document.querySelector(`#species`)
const wizPatronus = document.querySelector(`#patronus`)
const wandWood = document.querySelector(`#wand-wood`)
const wandCore = document.querySelector(`#wand-core`)
const wandLength = document.querySelector(`#wand-length`)

wizButton.addEventListener(`click`, async () => {
    let searchText = textInputWiz.value
    console.log(searchText)
    let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://potterhead-api.vercel.app/api/characters/${searchText}`) //needed to run off a proxxy server? the thunderclient seemed to work just fine so not sure why. Used chat GPT to diagnose.
    console.log(response)

    let wizardName = response.data.name
    wizName.textContent = `${wizardName}`

    let wizardHouse = response.data.house
    wizHouse.textContent = `${wizardHouse}`

    // if (wizardHouse == `Gryffindor`) {wizHouseImg.settAttribute('src', )} else if (wizardHouse == `Slytherin`) {wizHouseImg.settAttribute('src', )} else if (wizardHouse == `Ravenclaw`) {wizHouseImg.settAttribute('src', )} else if (wizardHouse == `Huffelpuff`) {wizHouseImg.settAttribute('src', )} else {'None'}

    let wizardAlias = response.data.alternate_names[0]
    wizAlias.textContent = `Alias: ${wizardAlias}`

    let wizardBorn = response.data.dateOfBirth
    wizBorn.textContent = `DOB: ${wizardBorn}`

    // if (response.data.wizard == 'true') {let wizardOrMug = `Wizard`} else {let wizardOrMug =`Muggle`}
    // wizOrMug.textContent = `Is a ${wizardOrMug}`

    let wizardAncestry = response.data.ancestry
    wizAncestry.textContent = `Ancestry: ${wizardAncestry}`

    let wizardSpecies = response.data.species
    wizSpecies.textContent = `Species: ${wizardSpecies}`

    let wizardPatronus = response.data.patronus
    wizPatronus.textContent = `Patronus: ${wizardPatronus}`

    let wizWandWood = response.data.wand.wood
    wandWood.textContent = `Wood: ${wizWandWood}`

    let wizWandCore = response.data.wand.core
    wandCore.textContent = `Wood: ${wizWandCore}`

    let wizWandLength = response.data.wand.length
    wandLength.textContent = `Wood: ${wizWandLength}`

})


const spellButton = document.querySelector(`#search-btn-spell`)
const potionButton = document.querySelector(`#search-btn-potion`)
const textInputSP = document.querySelector(`#search-bar-spell-potion`)
const spImg = document.querySelector(`#sp-img`)
const spImgLogo = document.querySelector(`#sp-logo`)
const spName = document.querySelector(`#sp-name`)
const sCategory = document.querySelector(`#spell-category`)
const sEffect = document.querySelector(`#spell-effect`)
const sHandMotion = document.querySelector(`#hand-motion`)
const sIncantation = document.querySelector(`#incantation`)
const sLight = document.querySelector(`#light`)
const sWiki = document.querySelector(`#wiki-spell`)
const pCharacteristics = document.querySelector(`#characteristics`)
const pDifficulty = document.querySelector(`#difficulty`)
const pEffect = document.querySelector(`#potion-effect`)
const pIngredients = document.querySelector(`#ingredients`)
const pSideEffects = document.querySelector(`#side-effects`)
const pWiki = document.querySelector(`#wiki-potion`)


spellButton.addEventListener(`click`, async () => {
    let searchText = textInputSP.value
    console.log(searchText)
    let responseSpell = await axios.get(`https://api.potterdb.com/v1/spells/${searchText}/`)
    console.log(responseSpell)

    let spellName = responseSpell.data.data.attributes.name
    spName.textContent = `${spellName}`

    let spellCategory = responseSpell.data.data.attributes.category
    sCategory.textContent = `${spellCategory}`

    let spellEffect = responseSpell.data.data.attributes.effect
    sCategory.textContent = `${spellEffect}`

    let spellHandMotion = responseSpell.data.data.attributes.hand
    sHandMotion.textContent = `${spellHandMotion}`

    let spellIncantation = responseSpell.data.data.attributes.incantation
    sIncantation.textContent = `${spellIncantation}`

    let spellLight = responseSpell.data.data.attributes.light
    sLight.textContent = `${spellLight}`

    let spellWiki = responseSpell.data.data.attributes.wiki
    sWiki.textContent = `${spellWiki}`


})

potionButton.addEventListener(`click`, async () => {
    let searchText = textInputSP.value
    console.log(searchText)
    let responsePotion = await axios.get(`https://api.potterdb.com/v1/potions/${searchText}/`)
    console.log(responsePotion)

    let potionName = responsePotion.data.data.attributes.name
    spName.textContent = `${potionName}`

    let potionChar = responsePotion.data.data.attributes.characteristics
    pCharacteristics.textContent = `${potionChar}`

    let potionDifficulty = responsePotion.data.data.attributes.difficulty
    pDifficulty.textContent = `${potionDifficulty}`

    let potionEffect = responsePotion.data.data.attributes.effect
    pEffect.textContent = `${potionEffect}`

    let potionIngredients = responsePotion.data.data.attributes.ingredients
    pIngredients.textContent = `${potionIngredients}`

    let potionSideEffects = responsePotion.data.data.attributes.side_effects
    pSideEffects.textContent = `${potionSideEffects}`

    let potionWiki = responsePotion.data.data.attributes.wiki
    pWiki.textContent = `${potionWiki}`

})