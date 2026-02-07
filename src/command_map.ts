import { type State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  
  const data = await state.pokeapi.fetchLocations(state.nextLocationsURL || undefined);

  
  state.nextLocationsURL = data.next;
  state.prevLocationsURL = data.previous;

  
  for (const area of data.results) {
    console.log(area.name);
  }
}
