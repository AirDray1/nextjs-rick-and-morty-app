import { Character, Episode } from "@/pages/types";
import Layout from "./Layout";
import Link from "next/link";

export default function HeroCard({ user }: {user: Character}) {
  return (
      <div className="flex flex-col items-stretch text-white px-5 py-3 sm:flex-row sm:w-[600px] sm:h-52">
        <img src={user.image} alt={user.name} className="max-h-75 w-[50%-30px] object-cover object-center rounded-t-lg sm:w-56 sm:h-full sm:rounded-l-lg sm:rounded-r-none" />
        <div className="flex flex-col w-full rounded-b-lg py-4 px-2 bg-gray-700 sm:rounded-bl-none sm:rounded-tr-lg">
          <Link href={`/characters/${user.id}`}>
            <h1 className="font-bold text-3xl">{user.name}</h1>
          </Link>
          {user.status === "Alive" ? 
          <div className="flex gap-2 items-center">
            <div className="block h-2 w-2 rounded-full bg-green-600"/>
            <span>Alive – {user.species}</span>
          </div> : 
          <div className="flex gap-2 items-center mt-2">
            <div className="block h-2 w-2 rounded-full bg-red-600"/>
            <span>Died – {user.species}</span>
          </div>}
          <div className="flex flex-col gap-1">
            <span className="title text-gray-400">Last known location:</span>
            <span>{user.location.name}</span>
          </div>
          {/* <div className="flex flex-col gap-1">
            <span className="title text-gray-400">First seen in:</span>
            <span>{f_epizode.name}</span>
          </div> */}
        </div>
      </div>
  );
}