import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import { getFooterData } from "./api/api_info";

export default function About({c_length, l_length, e_length}: {c_length: number, l_length: number, e_length: number}) {
    return (
        <Layout title="Про нас | Next.js"  c_length={c_length} l_length={l_length} e_length={e_length}>
            <h1 className="text-3xl font-bold text-white">ℹ️ About Page</h1>
            <p className="text-gray-600 mt-2">Це тестова сторінка про нас у Next.js.</p>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
    const data = await response.json();
    const { c_length, l_length, e_length } = await getFooterData();
    return { props: { initialUsers: data.results || [], c_length, l_length, e_length } };
};