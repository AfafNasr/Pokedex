import { createInterface, type Interface } from "node:readline";
import { PokeAPI } from "./pokeapi.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>; 
};


export type State = {
  rl: Interface;                         
  commands: Record<string, CLICommand>;  
  pokeapi: PokeAPI;                      
  nextLocationsURL: string | null;       
  prevLocationsURL: string | null;
pokedex: Record<string, Pokemon>;       
};

export type Pokemon = {
  name: string;
  base_experience: number;
  
};

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const pokeapi = new PokeAPI(300000);
 
  
  const commands: Record<string, CLICommand> = {
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
    map: {
      name: "map",
      description: "Display the next 20 location areas",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Display the previous 20 location areas",
      callback: commandMapb,
    },
    explore: {
      name: "explore <location_area>",
      description: "Lists the pokemon in a location area",
      callback: commandExplore,
    },
    catch: {
  name: "catch <pokemon_name>",
  description: "Attempt to catch a pokemon",
  callback: commandCatch,
},
  };

  return {
    rl,
    commands,
    pokeapi,
    nextLocationsURL: null, 
    prevLocationsURL: null,
    pokedex: {},
  };
}
