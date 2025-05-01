import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode, useEffect, useState } from "react";
import { SpriteSheet } from "@/public/SpriteSheet";
import { getFooterData } from "@/pages/api/getFooterData";

interface HomeProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = "Next.js App"} : HomeProps) {
  const [footState, setFootState] = useState<{c_length: number, l_length: number, e_length: number} | null>();
  useEffect(() => {
    getFooterData().then((a) => setFootState(a));
  }) 
  return (
    <div className="min-h-screen flex flex-col">
      <SpriteSheet />
      <Head>
        <title>{title}</title>
        <meta name="description" content="Навчальний проєкт Next.js з Tailwind" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="flex-1 bg-white">
          {children}
      </main>
      <footer className="relative flex flex-col items-center self-center w-full max-h-98 gap-6 pt-20 pb-20 bg-zinc-800 text-white shadow-md">
        <Footer c_length={footState?.c_length} l_length={footState?.e_length} e_length={footState?.l_length} />
      </footer>
    </div>
  );
}
