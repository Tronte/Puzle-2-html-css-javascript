// // PASO 1 
// const CARDS = 3;
// // PASO 2 = POKEAPI-APIV2-POKEMON-GET https://pokeapi.co/api/v2/pokemon/{id or name}/
// // PASO3 = FETCH SIGNIFICA BUSQUEDA
// // fetch('https://pokeapi.co/api/v2/pokemon/1/')
// // .then(res => res.json())
// // .then(data => console.log(data))

// // PASO 4 = Math.random() para aleatorio, Math.floor() para redondear
// // PASO 5 
// function getRandomId(max){
//     return Math.floor(Math.random()*max)+1
// }

// // PASO 6
// for(let i = 1; i <= CARDS; i++){
//     let id = getRandomId(150);
//     searchPokemonById(id);
// }

// // PASO 7
// async function searchPokemonById(id){
//     let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
//     let data = await res.json();
//     pokemonSearched.push(data);
//     console.log(pokemonSearched);

//     // PASO 9
//     // pokemonSearched.forEach(pokemon => console.log(pokemon))
//     // PASO 11
//     draggableElements.innerHTML = '';
//     pokemonSearched.forEach(pokemon =>{
//         console.log(pokemon.sprites.back_default)
//         draggableElements.innerHTML += 
//         `<div class="pokemon">
//             <img class="image" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="">
//         </div>`;
//     })
// }
// // PASO 8
// let pokemonSearched = [];

// // PASO 10
// let draggableElements = document.querySelector('.draggable-elements');

// const CARDS = 3;

// for(let i = 1; i <= CARDS; i++){
//     let id = getRandomId(150);
//     searchPokemonById(id);
// }



// function getRandomId(max){
//     return Math.floor(Math.random()*max)+1
// }

// let draggableElements = document.querySelector('.draggable-elements');
// let droppableElements = document.querySelector('.droppable-elements');
// let pokemonSearched = [];
// let pokemonNames = [];


// async function searchPokemonById(id){
//     let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     let data = await res.json();
//     pokemonSearched.push(data);
//     pokemonNames.push(data.name);
//     console.log(pokemonNames);
//     pokemonNames = pokemonNames.sort(()=>Math.random()-0.5)
//     // Dibujando los pokemones
//     console.log(pokemonNames);
//     draggableElements.innerHTML = '';
//     pokemonSearched.forEach(pokemon => {
//         console.log(pokemon)
//         draggableElements.innerHTML += `
//         <div class="pokemon">
//                 <img id=${pokemon.name} draggable = "true" class="image" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="">
//         </div>`;
//     })
//     // Insertando nombres
//     droppableElements.innerHTML = '';
//     pokemonNames.forEach(name => {
//         droppableElements.innerHTML += 
//         `<div class="names">
//                 <p>${name}</p>
//         </div>`;
//     }) 
//     let pokemons = document.querySelectorAll('.image');
//     // El sprade operator convierte un nodelist en un array
//     pokemons = [...pokemons];
//     pokemons.forEach(pokemon => {
//         pokemon.addEventListener('dragstart', event=>{
//             event.dataTransfer.setData('text', event.target.id);
//             console.log(event.target.id)
//         })
//     })
//     let names = document.querySelectorAll('.names');
//     let wrongMsg = document.querySelector('.wrong');
//     names = [...names];
//     names.forEach(name => {
//         name.addEventListener('dragover', event=>{
//             event.preventDefault();
//         })
//         name.addEventListener('drop', event=>{
//             let draggableElementData = event.dataTransfer.getData('text');
//             let pokemonElement = document.querySelector(`#${draggableElementData}`);
//             if(event.target.innerText == draggableElementData){
//                 console.log('SI');
//                 event.target.innerHTML = '';
//                 event.target.appendChild(pokemonElement);
//                 wrongMsg.innerText = '';
//             }else{
//                 console.log('NO');
//                 wrongMsg.innerText = 'Ups!';
//             }
//         })
//     })
// }

let CARDS = 10;
let draggableElements = document.querySelector('.draggable-elements');
let droppableElements = document.querySelector('.droppable-elements');
let pokemonSearched = [];
let pokemonNames = [];



getRandomId(150);

function getRandomId(max){
    return Math.floor(Math.random()*max)+1;
}

for(let i = 1; i <= CARDS; i++){
    let id = getRandomId(150);
    searchPokemonById(id);
}

async function searchPokemonById(id){
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    let data = await res.json();
    pokemonSearched.push(data);
    pokemonNames.push(data.name);
    pokemonNames.sort(()=>Math.random()-0.5);
    console.log(pokemonNames);

    draggableElements.innerHTML = '';
    pokemonSearched.forEach(pokemon =>{
        draggableElements.innerHTML += 
        `<div class="pokemon">
                <img id="${pokemon.name}" draggable= "true" class="image" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="">
        </div>`;
    })
    
    
    droppableElements.innerHTML = '';
    pokemonNames.forEach(name =>{
        droppableElements.innerHTML += 
        `<div class="names">
                <p>${name}</p>
        </div>`;
    })

    let pokemons = document.querySelectorAll('.image');
    pokemons = [...pokemons];
    pokemons.forEach(pokemon =>{
        pokemon.addEventListener('dragstart', event=>{
            event.dataTransfer.setData('text', event.target.id);
            // console.log(event.target.id)
        })
    })

    let names = document.querySelectorAll('.names');
    let wrongMsg = document.querySelector('.wrong');
    let point = 0;

    names = [...names];
    names.forEach(name =>{
        name.addEventListener('dragover', event=>{
            event.preventDefault();
            // console.log('dragover');
        })
        name.addEventListener('drop', event=>{
            const draggableElementData = event.dataTransfer.getData('text');
            let pokemonElement = document.querySelector(`#${draggableElementData}`);
            if(event.target.innerText == draggableElementData){
                console.log('SI');
                point++;
                event.target.innerHTML = '';
                event.target.appendChild(pokemonElement);
                wrongMsg.innerText = '';

                if(point == CARDS){
                    draggableElements.innerHTML = `<h class="win">Ganaste!</h2>`;
                }
            }else{
                console.log('NO');
                wrongMsg.innerText = 'Ups!';
            }
        })
    })
}