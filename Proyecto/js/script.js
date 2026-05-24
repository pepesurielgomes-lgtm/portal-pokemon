async function cargarPokemon(){

let contenedor = document.getElementById("contenedor-pokemon");

contenedor.innerHTML="";

for(let i=1;i<=30;i++){

try{

let respuesta=await fetch(
`https://pokeapi.co/api/v2/pokemon/${i}`
);

let datos=await respuesta.json();

contenedor.innerHTML += `

<div class="card">

<h3>${datos.name}</h3>

<img src="${datos.sprites.front_default}">

<p>Tipo: ${datos.types[0].type.name}</p>

</div>

`;

}catch(error){

console.log(error);

}

}

}

async function buscarPokemon(){

let nombre=document.getElementById("pokemon").value.toLowerCase();

try{

let respuesta=await fetch(
`https://pokeapi.co/api/v2/pokemon/${nombre}`
);

let datos=await respuesta.json();

document.getElementById("resultado").innerHTML=`

<div class="card">

<h3>${datos.name}</h3>

<img src="${datos.sprites.front_default}">

<p>Tipo: ${datos.types[0].type.name}</p>

</div>

`;

}catch{

document.getElementById("resultado").innerHTML=
"<h3>Pokémon no encontrado</h3>";

}

}

cargarPokemon();