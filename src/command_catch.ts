import { type State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
  if (args.length === 0) {
    console.log("Error: You must provide a pokemon name.");
    return;
  }

  const pokemonName = args[0];
  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  try {
    const pokemon = await state.pokeapi.fetchPokemon(pokemonName);
    
    
    const threshold = pokemon.base_experience / 2; 
    const roll = Math.random() * pokemon.base_experience;

    if (roll > threshold) {
      console.log(`${pokemonName} was caught!`);
      state.pokedex[pokemonName] = pokemon; 
    } else {
      console.log(`${pokemonName} escaped!`);
    }
  } catch (error) {
    console.log(`Error: Could not find Pokemon ${pokemonName}`);
  }
}
