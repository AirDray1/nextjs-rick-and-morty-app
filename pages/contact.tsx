import Layout from "../components/Layout";

export default function Contact({c_length, l_length, e_length}: {c_length: number, l_length: number, e_length: number}) {
    return(
    <Layout title="Контакти | Next.js"  c_length={c_length} l_length={l_length} e_length={e_length}>
        <div className="main-wrapper container mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900">📞 Contacts Page</h1>
            <p className="text-gray-600 mt-2">Зв’яжіться з нами за email: contact@nextjs.com</p>
        </div>
    </Layout>
    )
}