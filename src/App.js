import './App.css';
import PokemonCard from './components/PokemonCard.js';
import pokedex from './pokedex.json';
const colorList = {
  'Dragon' : ["#7038f8","#b79bfb"],
  'Ghost' : ["#705898","#a99ac1"],
  "Rock" : ["#b8a038", "#d4c687"],
  "Bug" : ["#a8b820", "#cad479"],
  "Psychic" : ["#f85888", "#fa9ab7"],
  "Flying" : ["#a890f0", "#cabcf6"],
  "Ground" : ["#e0c068", "#e9d295"],
  "Poison" : ["#a040a0", "#bc79bc"],
  "Fighting" : ["#c03028", "#d9827e"],
  "Ice" : ["#6a9797", "#98d8d8"],
  "Electric" : ["#f8d030", "#fade6e"],
  "Grass" : ["#78c850", "#aede96"],
  "Water" : ["#6890f0","#a4bcf6"],
  "Fire" : ["#f08030","#f6b282"],
  "Normal" : ["#a8a878","#cacaae"],
  "Dark": ["#705848","#a99a91"],
  "Steel": ["#9393a6","#b8b8d0"],
  "Fairy": ["#f0b6bc","#f6d3d6"]
}

function cardColor(name){
  if(name.type.length === 1){
    return (`${colorList[name.type[0]][0]},${colorList[name.type[0]][1]}`);
  } else{
    return (`${colorList[name.type[0].slice(0,-3)][0]},${colorList[name.type[1]][0]}`);
  }
}
function App() {
  return (
    <div>
      <div className='wrapper'>
        {pokedex.map((name,index) => 
          <PokemonCard 
          cardstyle={{backgroundImage: `linear-gradient(to bottom left,${cardColor(name)})`}} 
          sprite = {name.id}
          pokemonName = {name.name.english}
          pokemonType = {name.type}
          pokemonHP = {name.base.HP}
          pokemonAtk = {name.base.Attack}
          pokemonDfn = {name.base.Defense}
          pokemonSpAtk = {name.base['Sp. Attack']}
          pokemonSpDfn = {name.base['Sp. Defense']}
          pokemonSpd = {name.base.Speed}
          />
        )}
      </div>
    </div>
  );
}

export default App;
