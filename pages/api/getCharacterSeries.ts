import { Dispatch, SetStateAction } from "react";
import { Character } from "../types";

export const fetchEpisodes = async (character: Character, setEpisodeNames: Dispatch<SetStateAction<string[]>>) => {
    try {
      const episodeIds = character.episode.map(url => url.split('/').pop()).join(',');

      const res = await fetch(`https://rickandmortyapi.com/api/episode/${episodeIds}`);
      const data = await res.json();

      const episodes = Array.isArray(data) ? data : [data];

      const names = episodes.map(ep => ep.name);
      setEpisodeNames(names);
    } catch (error) {
      console.error("Error fetching episodes:", error);
    }
};