import { Cache } from "./pokecache.js";
import { type Pokemon } from "./state.js";
export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

export type LocationAreaDetail = {
  pokemon_encounters: {
    pokemon: {
      name: string;
    };
  }[];
};

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor(cacheIntervalMS: number) {
    
    this.cache = new Cache(cacheIntervalMS);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
  
  const url = pageURL || `${PokeAPI.baseURL}/location-area?offset=0&limit=20`;

  const cachedData = this.cache.get<ShallowLocations>(url);
  if (cachedData) {
    console.log(" [CACHE HIT] Loading from memory...");
    return cachedData;
  }

  console.log(" [CACHE MISS] Fetching from internet...");
  const response = await fetch(url);
  const data = (await response.json()) as ShallowLocations;

  this.cache.add(url, data);
  return data;
}

async fetchLocationArea(areaName: string): Promise<LocationAreaDetail> {
  const url = `${PokeAPI.baseURL}/location-area/${areaName}`;

  const cachedData = this.cache.get<LocationAreaDetail>(url);
  if (cachedData) return cachedData;

  const response = await fetch(url);
  const data = (await response.json()) as LocationAreaDetail;

  this.cache.add(url, data);
  return data;
}
async fetchPokemon(pokemonName: string): Promise<Pokemon> {
  const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;

 
  const cached = this.cache.get<Pokemon>(url);
  if (cached) return cached;

  const res = await fetch(url);
  const data = (await res.json()) as Pokemon;

  this.cache.add(url, data);
  return data;
}
}
