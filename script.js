const button = document.querySelector(`#search-btn`)
const textInput = document.querySelector(`#search-bar`)

button.addEventListener(`click`, async () => {
    let searchText = textInput.value
    console.log(searchText)
    let response = await axios.get(`https://api.potterdb.com/v1/characters/${searchText}/`)
    console.log(response)
})