export interface CharacterLocation {
    name: string;
    url: string;
  }

export type EpisodeUrls = string[];

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export interface User {
    id: number;
    name: string;
    image: string;
}

export interface CharacterList {
    users: Character[];
}

// Main Character interface
export interface Character extends User {
    status: CharacterStatus;
    species: CharacterSpecies;
    type: string; // Often empty as in your example
    gender: CharacterGender;
    origin: CharacterLocation;
    location: CharacterLocation;
    episode: EpisodeUrls;
    url: string; // URL to character endpoint
    created: string; // ISO 8601 date string
}

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';
export type CharacterSpecies = 'Human'| 'Alien'| 'Humanoid'| 'Poopybutthole'| 'Mythological Creature'| 'Robot'| 'Animal'| 'Cronenberg'| 'Disease'| string;

export interface Props {
  users: User[] | Character;
}