import { NextApiRequest, NextApiResponse } from "next";
import { Character } from "../types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      
      const users = data.results.map((character: Character) => ({
        id: character.id,
        name: character.name,
        image: character.image,
      }));
  
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Помилка отримання даних" });
    }
  }
  