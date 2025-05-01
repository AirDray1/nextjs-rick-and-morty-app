import Layout from "../components/Layout";

export default function About() {
    return (
        <Layout title="Про нас | Next.js">
            <h1 className="text-3xl font-bold text-white">ℹ️ About Page</h1>
            <p className="text-gray-600 mt-2">Це тестова сторінка про нас у Next.js.</p>
        </Layout>
    );
}