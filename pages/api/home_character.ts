import { Character } from "../types";

export async function startRandomCharacterUpdates(count: number): Promise<Character[]> {
  try {
    const page = Math.floor(Math.random() * 42) + 1;
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const randCharacters = await response.json();
    const allCharacters: Character[] = randCharacters.results;
    const shuffled: Character[] = allCharacters.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  } catch (error) {
    console.error(`Ошибка при получении страницы:`, error);
    return []
  }
}