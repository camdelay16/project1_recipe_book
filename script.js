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
const notFound = document.querySelector(`#not-found`)
const notFoundImg = document.querySelector(`#not-found-img`)

function clearSearch() {
    textInputWiz.value = "";
    textInputSP.value = "";
}

wizButton.addEventListener(`click`, async () => {
    await searchWizard()
})
textInputWiz.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { searchWizard() }
})

async function searchWizard() {
   try { 
    const url = 'https://corsproxy.io/?' + encodeURIComponent('https://potterhead-api.vercel.app/api/characters/'); //needed to run off a proxxy server? the thunderclient seemed to work just fine so not sure why. Used chat GPT to diagnose.
    let searchText = textInputWiz.value
    console.log(searchText)
    let response = await axios.get(`${url}${searchText}`) 
    console.log(response)

    wizInfo.style.display = `grid`
    spInfo.style.display = `none`
    notFound.style.display = `none`

    let wizardName = response.data.name
    wizName.textContent = `${wizardName}`

    let wizardHouse = response.data.house
    wizHouse.textContent = `House: ${wizardHouse}`

    let wizardImg = response.data.image
    wizImg.setAttribute('src', wizardImg)

    let houseImg = {
        Gryffindor: `https://1000logos.net/wp-content/uploads/2021/11/Gryffindor-Logo-768x432.png`,
        Slytherin: `https://1000logos.net/wp-content/uploads/2023/05/Slytherin-Logo-768x432.png`,
        Ravenclaw: `https://logos-world.net/wp-content/uploads/2022/11/Ravenclaw-Symbol-500x281.png`,
        Hufflepuff: `https://www.seekpng.com/png/full/146-1467974_hufflepuff-house.png`,
    }
    wizHouseImg.setAttribute('src', houseImg[wizardHouse] || `None`)

    let wizardAlias = response.data.alternate_names[0]
    wizAlias.textContent = `Alias: ${wizardAlias || `None`}`

    let wizardBorn = response.data.dateOfBirth
    wizBorn.textContent = `DOB: ${wizardBorn || `Unknown`}`

    let wizardOrMug = response.data.wizard;
    let wizardOrMugText;
    if (wizardOrMug === true) { wizardOrMugText = `wizard` }
    else { wizardOrMugText = `muggle` };
    wizOrMug.textContent = `Is a ${wizardOrMugText}`;

    let wizardAncestry = response.data.ancestry
    wizAncestry.textContent = `Ancestry: ${wizardAncestry || `Unknown`}`

    let wizardSpecies = response.data.species
    wizSpecies.textContent = `Species: ${wizardSpecies || `Unknown`}`

    let wizardPatronus = response.data.patronus
    wizPatronus.textContent = `Patronus: ${wizardPatronus|| `Unknown`}`

    let wizWandWood = response.data.wand.wood
    wandWood.textContent = `Wood: ${wizWandWood || `Unknown`}`

    let wizWandCore = response.data.wand.core
    wandCore.textContent = `Core: ${wizWandCore || `Unknown`}`

    let wizWandLength = response.data.wand.length
    wandLength.textContent = `Length: ${wizWandLength || `Unknown`} in.`

    clearSearch()

    return;
   }
   catch (err) {
    console.log(`Wizard not found`)

    wizInfo.style.display = `none`
    spInfo.style.display = `none`
    notFound.style.display = `grid`

    notFoundImg.setAttribute('src', `https://www.wizardingworld.com/assets/_next/static/images/sorting-hat-768-c1739973b4e53269f48e0e4390a48a05.png`)

    clearSearch()
}

}


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
    await searchSpellPotion()
})

textInputSP.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { searchSpellPotion() }
})

async function searchSpellPotion() {
    let searchTextInput = textInputSP.value
    console.log(searchTextInput)

    let searchText = searchTextInput.replace(' ', '-')
    console.log(searchText)

    try {
        let responseSpell = await axios.get(`https://api.potterdb.com/v1/spells/${searchText}/`)
        console.log(responseSpell)

        spInfo.style.display = `grid`
        sAttributes.style.display = `grid`
        pAttributes.style.display = `None`
        wizInfo.style.display = `None`

        spImgLogo.setAttribute('src', `https://pngimg.com/uploads/wand/wand_PNG25.png`)

        let spellImg = responseSpell.data.data.attributes.image
        spImg.setAttribute(`src`, spellImg)

        let spellName = responseSpell.data.data.attributes.name
        spName.textContent = `${spellName}`

        let spellCategory = responseSpell.data.data.attributes.category
        sCategory.textContent = `Category: ${spellCategory || `Unknown`}`

        let spellEffect = responseSpell.data.data.attributes.effect
        sEffect.textContent = `Effect: ${spellEffect || `Unknown`}`

        let spellHandMotion = responseSpell.data.data.attributes.hand
        sHandMotion.textContent = `Hand Motion: ${spellHandMotion || `Unknown`}`

        let spellIncantation = responseSpell.data.data.attributes.incantation
        sIncantation.textContent = `Incantation: ${spellIncantation || `Unknown`}`

        let spellLight = responseSpell.data.data.attributes.light
        sLight.textContent = `Light Color: ${spellLight || `Unknown`}`

        let spellWiki = responseSpell.data.data.attributes.wiki
        let wikiLink = document.createElement('a')
        wikiLink.href = spellWiki
        wikiLink.textContent = `More info on Wikipedia`
        wikiLink.target = `_blank`

        sWiki.innerHTML = ''
        sWiki.appendChild(wikiLink)

        clearSearch()

        return;
    }
    catch (err) {
        console.log(`trying potions next`)
    }

    try {
        let responsePotion = await axios.get(`https://api.potterdb.com/v1/potions/${searchText}/`)
        console.log(responsePotion)

        spInfo.style.display = `grid`
        pAttributes.style.display = `grid`
        sAttributes.style.display = `none`
        wizInfo.style.display = `none`

        let potionImg = responsePotion.data.data.attributes.image
        spImg.setAttribute(`src`, potionImg)

        spImgLogo.setAttribute('src', `https://static.vecteezy.com/system/resources/previews/009/380/777/non_2x/witch-cauldron-clipart-design-illustration-free-png.png`)

        let potionName = responsePotion.data.data.attributes.name
        spName.textContent = `${potionName}`

        let potionChar = responsePotion.data.data.attributes.characteristics
        pCharacteristics.textContent = `Characteristics: ${potionChar || `Unknown`}`

        let potionDifficulty = responsePotion.data.data.attributes.difficulty
        pDifficulty.textContent = `Difficulty: ${potionDifficulty || `Unknown`}`

        let potionEffect = responsePotion.data.data.attributes.effect
        pEffect.textContent = `Effect: ${potionEffect || `Unknown`}`

        let potionIngredients = responsePotion.data.data.attributes.ingredients
        pIngredients.textContent = `Ingredients: ${potionIngredients || `Unknown`}`

        let potionSideEffects = responsePotion.data.data.attributes.side_effects
        pSideEffects.textContent = `Side Effects: ${potionSideEffects || `Unknown`}`

        let potionWiki = responsePotion.data.data.attributes.wiki
        let wikiLink = document.createElement('a')
        wikiLink.href = potionWiki
        wikiLink.textContent = `More info on Wikipedia`
        wikiLink.target = `_blank`

        pWiki.innerHTML = ''
        pWiki.appendChild(wikiLink)

        clearSearch()

        return;
    }
    catch (err) { console.error(`potion not found`) 

        wizInfo.style.display = `none`
        spInfo.style.display = `none`
        notFound.style.display = `grid`
    
        notFoundImg.setAttribute('src', `https://www.wizardingworld.com/assets/_next/static/images/sorting-hat-768-c1739973b4e53269f48e0e4390a48a05.png`)

        clearSearch()
    }

}

//used https://www.winterwind.com/tutorials/css/60 to get JS code below and the CSS
window.addEventListener(`mousemove`, function (e) {
    let arr = [1, 0.9, 0.8, 0.5, 0.2]

    arr.forEach(function(i){
        let x = (1 - i) * 75;
        let star = document.createElement('div');

        star.className = 'star';
        star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

        document.body.appendChild(star);

        window.setTimeout(function() {
            document.body.removeChild(star);
        }, Math.round(Math.random() * i * 600));
    });
}, false);