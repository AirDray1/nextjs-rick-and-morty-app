import Layout from "@/components/Layout";
import { getFooterData } from "./api/api_info";
import { GetStaticProps } from "next";
import { SpriteIcons } from "@/public/SpriteIcons";
import { Character } from "./types";
import { startRandomCharacterUpdates } from "./api/home_character";
import HeroCard from "@/components/HeroCard";

export default function Home({characters, c_length, l_length, e_length}: {characters: Character[], c_length: number, l_length: number, e_length: number}) {
  return (
    <Layout title="The Rick and Morty Next.js" c_length={c_length} l_length={l_length} e_length={e_length}>
      <div className="main-wrapper relative mx-auto bg-white flex justify-center">
        <div className="flex justify-center max-w-(--breakpoint-lg) container h-[40vh]">
          <h1 className="relative z-1 flex items-center justify-center text-5xl/13 font-bold text-gray-800 text-center mb-2 lg:text-7xl/16">The Rick and Morty with Next.js</h1>
          <div className="hero-image absolute top-0 left-0 bottom-0 right-0 z-0">
              <SpriteIcons id="RAM_bg" width={376} height={378} className="w-full h-[40vh]" />
          </div>
        </div>
      </div>
      <div className="catalog flex flex-col items-center bg-sky-950 xl:flex-row xl:flex-1 xl:flex-wrap py-5 xl:justify-center">
        {characters.map(el => <HeroCard user={el}/>)}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const { c_length, l_length, e_length } = await getFooterData();
  const characters: Character[] = await startRandomCharacterUpdates(6);

  return {
    props: { characters, c_length, l_length, e_length },
  };
};