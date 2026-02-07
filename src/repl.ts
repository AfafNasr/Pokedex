import * as readline from 'node:readline';
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import type { CLICommand } from "./command.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 0);
}

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
  };
}
    
export function startREPL() {
  const commands = getCommands();
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > '
  });

  rl.prompt();

  rl.on('line', (line) => {
    const words = cleanInput(line);

   
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];

    
    if (commandName in commands) {
      const command = commands[commandName];
      try {
        
        command.callback(commands);
      } catch (err) {
        console.error("Error executing command:", err);
      }
    } else {
      
      console.log("Unknown command");
    }

    
    rl.prompt();
  }).on('close', () => {
    
    console.log("\nClosing the Pokedex... Goodbye!");
    process.exit(0);
  });
}
