const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const colors = {
    fire: '#fddfdf',
    grass: '#defde0',
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#e5e5e5'
}


const fetchPokemon = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);

    const bgColor = colors[data.types[0].type.name];
    const pokeImg = data.sprites.front_default;
    const getPokeTypes = () => {
        let typeList = '';
        data.types.forEach(t => {
            typeList = typeList + ' ' + t.type.name;
        })
        return typeList;
    }
    const pokeTypes = getPokeTypes();
    const getUpdatedId = (id) => {
        let updatedId ='';
        if (id < 10) {
            updatedId = `00${id}`
        } else if (id < 100 && id > 9) {
            updatedId = `0${id}`
        } else {
            updatedId = id;
        }
        return updatedId;
    };

    const newCard = document.createElement('div');
    newCard.classList.add('pokemon');
    newCard.style.backgroundColor = `${bgColor}`;
    newCard.innerHTML = `
            <div class="img-container">
                <img src="${pokeImg}" alt="${data.name}">
            </div>
            <div class="info">
                <span class="number">#${getUpdatedId(data.id)}</span>
                <h3 class="name">${data.name}</h3>
                <small class="type">Type: <span>${pokeTypes}</span></small>
            </div>
    `
    // console.log(newCard)

    poke_container.appendChild(newCard)
}

fetchPokemon();
