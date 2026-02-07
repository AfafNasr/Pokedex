import { type State } from "./state.js";


export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
}

export function startREPL(state: State) {
  state.rl.prompt();

  
  state.rl.on("line", async (line) => {
    const words = cleanInput(line);
    if (words.length === 0) {
      state.rl.prompt();
      return;
    }

    const commandName = words[0];
    const command = state.commands[commandName];

    if (command) {
      try {
        
        await command.callback(state);
      } catch (err) {
        console.error("Error executing command:", err);
      }
    } else {
      console.log("Unknown command");
    }
    state.rl.prompt();
  });
}
