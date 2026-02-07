import { type State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
  if (args.length === 0) {
    console.log("Error: You must provide a location area name.");
    return;
  }

  const areaName = args[0];
  console.log(`Exploring ${areaName}...`);

  try {
    const data = await state.pokeapi.fetchLocationArea(areaName);
    console.log("Found Pokemon:");
    data.pokemon_encounters.forEach((encounter) => {
      console.log(` - ${encounter.pokemon.name}`);
    });
  } catch (error) {
    console.log(`Error: Could not find location ${areaName}`);
  }
}
