# project1_wonders_of_wizarding_world

## Ideas
Planning to create a HP search using the HP-API (https://potterhead-api.vercel.app/api/characters) to get Characters and Potter DB API (https://potterdb.com/) to get spells and potions. 
This will have a search feature to look up information on characters, spells, and potions. 

Information to be included:

Characters ->
- Name
- House Logo
- picutre
- Alias
- Born
- species
- Wizard (yes/no)
- patronus
- ancestry
- wand information (wood, core, length)

Spells ->
- name
- picture
- category
- effect
- handmotion
- incantation
- light color
- wiki link

Potions ->
- Name
- Difficult
- Characteristics
- Effect
- Ingredients
- Side-effects
- wiki link

Planning to build for desktop then for mobile.

## Pseudo code

- plan on using CSS grid to get the layout
- button to get info (have button light up when hover and flash when activated)
- search bar for characters (by name) and search bar for spells/potions
- will need to get img of houses, wand, and potion flask, to be pulled/placed based on the data searched
- Will need to figure out a way to get loose match to character - currently Harry Potter = Harry James Potter -> want to be Harry Potter
- Would like to add 'magic' effect to cursor where there is a glittery trail or something
- have background image be school at night or some other fun background - not plain solid color 
- want soft edges on container borders
- have error not found screen
- have search clear after searching
- 


### Stretch goals to complete at a later time
- maybe add some search filters to get by house, type of spell, or difficult of potion?
- figure out an auto complete function for search?
- maybe add a button to get a random character or spell? Since their JSON file has IDs with random characters, will need to figure out a way to get a random result from array.

### Sources
- Used the following sites for help
    - https://developer.mozilla.org/en-US/docs/Web
    - https://www.w3schools.com/
    - https://grid.malven.co/
    - https://www.youtube.com/watch?v=rg7Fvvl3taU&t=1989s
    - https://stackoverflow.com/

- Used ChatGPT to debug unknown errors in console. 

- used https://www.winterwind.com/tutorials/css/60  to get glitter trail on desktop version








