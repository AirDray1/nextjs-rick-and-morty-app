import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { getFooterData } from "../api/getFooterData";
import { Episode } from "../types";


export default function episodePage({ episode }: { episode: Episode }) {
  return (
    <Layout title={episode.name}>
      <div className="flex flex-col bg-sky-950 items-stretch text-white p-4">
        <span>{episode.name}</span>
        <span>{episode.air_date}</span>
        <span>{episode.episode}</span>
        <span>{episode.characters}</span>
        <span>{episode.url}</span>
        <span>{episode.created}</span>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const episode_responese = await fetch(`https://rickandmortyapi.com/api/episode/${params?.id}`);
  const episode = await episode_responese.json();
  // const f_epizode_responese = await fetch(`${episode.episode[0]}`);
  // const f_epizode = await f_epizode_responese.json();
  const { c_length, l_length, e_length } = await getFooterData();

  return {
    props: { episode, c_length, l_length, e_length },
  };
};