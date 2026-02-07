import { type State } from "./state.js";

export async function commandExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!");
  state.rl.close(); // إغلاق الواجهة بشكل نظيف
  process.exit(0);
}
