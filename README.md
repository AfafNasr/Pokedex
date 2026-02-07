#  PokéCLI
A high-performance Pokedex CLI built with **TypeScript** and **Node.js**. Developed as part of the Boot.dev Backend Engineering curriculum.

##  Key Features
* **Real-time API**: Fetches live data from [PokeAPI](https://pokeapi.co/).
* **Caching**: Optimized performance with an internal caching system.
* **Interactive REPL**: A seamless command-line experience.
* **Catch & Inspect**: Logic-based capture mechanics and data visualization.

  ##  Commands
| Command | Description |
| :--- | :--- |
| `map` / `mapb` | Navigate through world areas (Next/Prev). |
| `explore <area>` | List all Pokémon in a specific location. |
| `catch <name>` | Attempt to catch a Pokémon (probability-based). |
| `inspect <name>` | View detailed stats of caught Pokémon. |
| `pokedex` | List all Pokémon in your collection. |

Tech Stack
-Language: TypeScript
-Runtime: Node.js
-API: PokeAPI
-Environment: Linux / WSL

## Quick Start
```bash
npm install
npm run dev

