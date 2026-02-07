import { type State } from "./state.js";

export async function commandPokedex(state: State, ...args: string[]): Promise<void> {
  
  const names = Object.keys(state.pokedex);

  if (names.length === 0) {
    console.log("Your pokedex is empty. Go catch some pokemon!");
    return;
  }

  console.log("Your Pokedex:");
  
  names.forEach(name => {
    console.log(` - ${name}`);
  });
}
