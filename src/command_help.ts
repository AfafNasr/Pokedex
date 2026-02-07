import { type State } from "./state.js";

export async function commandHelp(state: State) {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log("");
  
  
  for (const name in state.commands) {
    const cmd = state.commands[name];
    console.log(`${cmd.name}: ${cmd.description}`);
  }
}
