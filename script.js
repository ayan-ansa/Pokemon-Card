const btn = document.getElementById("btn");
const image = document.getElementById("image");
const name = document.getElementById("name");
const health = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const speed = document.getElementById("speed");
const types = document.getElementById("types");
const card = document.getElementById("card");

const typeColor = {
  bug: "#26de81",
  gragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};
btn.addEventListener("click", getData);

async function getData() {
  let id = Math.floor(Math.random() * 150 + 1);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  console.log(data);
  generatedData(data);
  appendTypes(data.types);
  let themeColor = typeColor[data.types[0].type.name];
  styleCard(themeColor);
}

function generatedData(data) {
  name.innerHTML = data.name;
  image.src = data.sprites.other.dream_world.front_default;
  health.innerHTML = data.stats[0].base_stat;
  attack.innerHTML = data.stats[1].base_stat;
  defense.innerHTML = data.stats[2].base_stat;
  speed.innerHTML = data.stats[5].base_stat;
}
let appendTypes = (data) => {
  types.innerHTML = "";
  data.forEach((item) => {
    let button = document.createElement("button");
    button.innerHTML = item.type.name;
    button.classList.add("type");
    types.appendChild(button);
  });
};

let styleCard = (color) => {
  console.log("Color is", color);
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #fff 36%)`;
  document.querySelectorAll(".type").forEach((typeColor) => {
    typeColor.style.background = color;
  });
};
