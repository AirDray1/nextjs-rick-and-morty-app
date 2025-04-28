import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { Character, Episode } from "../types";
import { getFooterData } from "../api/api_info";


export default function characterPage({ character, f_epizode, c_length, l_length, e_length}: {character: Character, f_epizode: Episode, c_length: number, l_length: number, e_length: number}) {
  return (
    <Layout title={character.name} c_length={c_length} l_length={l_length} e_length={e_length}>
      <div className="flex flex-col bg-sky-950 items-stretch text-white p-4">
        <img src={character.image} alt={character.name} className="w-[50%-30px] rounded-t-lg" />
        <div className="flex flex-col w-full rounded-b-lg py-4 px-2 bg-gray-700">
          <h1 className="font-bold text-3xl">{character.name}</h1>
          {character.status === "Alive" ? 
          <div className="flex gap-2 items-center mt-2">
            <div className="block h-2 w-2 rounded-full bg-green-600"/>
            <span>Alive – {character.species}</span>
          </div> : 
          <div className="flex gap-2 items-center mt-2">
            <div className="block h-2 w-2 rounded-full bg-red-600"/>
            <span>Died – {character.species}</span>
          </div>}
          <div className="flex flex-col gap-1">
            <span className="title text-gray-400">Last known location:</span>
            <span>{character.location.name}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="title text-gray-400">First seen in:</span>
            <span>{f_epizode.name}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const character_responese = await fetch(`https://rickandmortyapi.com/api/character/${params?.id}`);
  const character: Character = await character_responese.json();
  const f_epizode_responese = await fetch(`${character.episode[0]}`);
  const f_epizode = await f_epizode_responese.json();
  const { c_length, l_length, e_length } = await getFooterData();

  return {
    props: { character, f_epizode, c_length, l_length, e_length },
  };
};