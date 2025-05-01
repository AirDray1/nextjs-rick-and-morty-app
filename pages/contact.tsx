import Layout from "../components/Layout";

export default function Contact() {
    return(
    <Layout title="Контакти | Next.js">
        <div className="main-wrapper container mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900">📞 Contacts Page</h1>
            <p className="text-gray-600 mt-2">Зв’яжіться з нами за email: contact@nextjs.com</p>
        </div>
    </Layout>
    )
}