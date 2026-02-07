import { type State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
  if (args.length === 0) {
    console.log("Error: Please provide a pokemon name.");
    return;
  }

  const name = args[0];
  const pokemon = state.pokedex[name];

  if (!pokemon) {
    console.log("you have not caught that pokemon");
    return;
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  
  console.log("Stats:");
  pokemon.stats.forEach(s => {
    console.log(`  -${s.stat.name}: ${s.base_stat}`);
  });

  console.log("Types:");
  pokemon.types.forEach(t => {
    console.log(`  - ${t.type.name}`);
  });
}
