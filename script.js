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
const wizInfo = document.querySelector(`#wizard-info`)

wizButton.addEventListener(`click`, async () => {
    let searchText = textInputWiz.value
    console.log(searchText)
    let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://potterhead-api.vercel.app/api/characters/${searchText}`) //needed to run off a proxxy server? the thunderclient seemed to work just fine so not sure why. Used chat GPT to diagnose.
    console.log(response)

    wizInfo.style.display = `block`

    let wizardName = response.data.name
    wizName.textContent = `${wizardName}`

    let wizardHouse = response.data.house
    wizHouse.textContent = `${wizardHouse}`

    let wizardImg = response.data.image
    wizImg.setAttribute('src', wizardImg)

    if (wizardHouse == `Gryffindor`) {wizHouseImg.setAttribute('src', `https://1000logos.net/wp-content/uploads/2021/11/Gryffindor-Logo-768x432.png`)} else if (wizardHouse == `Slytherin`) {wizHouseImg.setAttribute('src', `https://1000logos.net/wp-content/uploads/2023/05/Slytherin-Logo-768x432.png`)} else if (wizardHouse == `Ravenclaw`) {wizHouseImg.setAttribute('src', `https://logos-world.net/wp-content/uploads/2022/11/Ravenclaw-Symbol-500x281.png`)} else if (wizardHouse == `Hufflepuff`) {wizHouseImg.setAttribute('src', `https://www.seekpng.com/png/full/146-1467974_hufflepuff-house.png`)} else {'None'}

    let wizardAlias = response.data.alternate_names[0]
    wizAlias.textContent = `Alias: ${wizardAlias}`

    let wizardBorn = response.data.dateOfBirth
    wizBorn.textContent = `DOB: ${wizardBorn}`

    let wizardOrMug = response.data.wizard;
    let wizardOrMugText;
    if (wizardOrMug === true) {wizardOrMugText = `Wizard`} 
    else {wizardOrMugText =`Muggle`};
    wizOrMug.textContent = `Is a ${wizardOrMugText}`;

    let wizardAncestry = response.data.ancestry
    wizAncestry.textContent = `Ancestry: ${wizardAncestry}`

    let wizardSpecies = response.data.species
    wizSpecies.textContent = `Species: ${wizardSpecies}`

    let wizardPatronus = response.data.patronus
    wizPatronus.textContent = `Patronus: ${wizardPatronus}`

    let wizWandWood = response.data.wand.wood
    wandWood.textContent = `Wood: ${wizWandWood}`

    let wizWandCore = response.data.wand.core
    wandCore.textContent = `Core: ${wizWandCore}`

    let wizWandLength = response.data.wand.length
    wandLength.textContent = `Length: ${wizWandLength}`

})


const spButton = document.querySelector(`#search-btn-spell-potion`)
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
const spInfo = document.querySelector(`#sp-info`)
const sAttributes = document.querySelector(`#spell-attributes`)
const pAttributes = document.querySelector(`#potion-attributes`)

spButton.addEventListener(`click`, async () => {
    let searchText = textInputSP.value
    console.log(searchText)
    try {let responseSpell = await axios.get(`https://api.potterdb.com/v1/spells/${searchText}/`)
    console.log(responseSpell)

    spInfo.style.display = `block`
    sAttributes.style.display = `block`
    pAttributes.style.display = `None`

    spImgLogo.setAttribute('src',`https://pngimg.com/uploads/wand/wand_PNG25.png`)

    let spellImg = responseSpell.data.data.attributes.image
    spImg.setAttribute(`src`, spellImg)

    let spellName = responseSpell.data.data.attributes.name
    spName.textContent = `${spellName}`

    let spellCategory = responseSpell.data.data.attributes.category
    sCategory.textContent = `${spellCategory}`

    let spellEffect = responseSpell.data.data.attributes.effect
    sEffect.textContent = `${spellEffect}`

    let spellHandMotion = responseSpell.data.data.attributes.hand
    sHandMotion.textContent = `${spellHandMotion}`

    let spellIncantation = responseSpell.data.data.attributes.incantation
    sIncantation.textContent = `${spellIncantation}`

    let spellLight = responseSpell.data.data.attributes.light
    sLight.textContent = `${spellLight}`

    let spellWiki = responseSpell.data.data.attributes.wiki
    sWiki.textContent = `${spellWiki}`
}
    catch (err) {
        console.log(`trying potions next`)
    }

    try {let responsePotion = await axios.get(`https://api.potterdb.com/v1/potions/${searchText}/`)
    console.log(responsePotion)

    spInfo.style.display = `block`
    pAttributes.style.display = `block`
    sAttributes.style.display = `none`

    let potionImg = responsePotion.data.data.attributes.image
    spImg.setAttribute(`src`, potionImg)

    spImgLogo.setAttribute('src',`https://static.vecteezy.com/system/resources/previews/009/380/777/non_2x/witch-cauldron-clipart-design-illustration-free-png.png`)

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
}
catch (err) {console.error(`potion not found`)}

})
