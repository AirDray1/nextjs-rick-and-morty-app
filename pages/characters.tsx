import Link from "next/link";
import { Character } from "./types";
import Layout from "@/components/Layout";
import { useState } from "react";
import StatusFilter from "@/components/StatusFilter";
import SearchBar from "@/components/SearchBar";
import { GetServerSideProps } from "next";
import { getFooterData } from "./api/api_info";
import { SpriteIcons } from "@/public/SpriteIcons";

export default function Characters({ initialUsers, c_length, l_length, e_length }: { initialUsers: Character[], c_length: number, l_length: number, e_length: number }) {
    const [users, setUsers] = useState<Character[]>(initialUsers);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(true);
    const [hasPrev, setHasPrev] = useState(false);
  
    const fetchData = async (name = "", status = "", pageNum = 1) => {
      setLoading(true);
  
      let url = `https://rickandmortyapi.com/api/character/?page=${pageNum}`;
      if (name) url += `&name=${name}`;
      if (status) url += `&status=${status}`;
  
      const res = await fetch(url);
      const data = await res.json();
  
      setUsers(data.results || []);
      setHasNext(Boolean(data.info?.next));
      setHasPrev(Boolean(data.info?.prev));
      setLoading(false);
    };
  
    const handleSearch = (query: string) => {
      setSearchQuery(query);
      setPage(1);
      fetchData(query, statusFilter, 1);
    };
  
    const handleStatusChange = (status: string) => {
      setStatusFilter(status);
      setPage(1);
      fetchData(searchQuery, status, 1);
    };
  
    const handleNextPage = () => {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchData(searchQuery, statusFilter, nextPage);
    };
  
    const handlePrevPage = () => {
      const prevPage = page - 1;
      setPage(prevPage);
      fetchData(searchQuery, statusFilter, prevPage);
    };
  
    return (
      <Layout title="Characters" c_length={c_length} l_length={l_length} e_length={e_length}>
        <div className="main-wrapper flex flex-col gap-5 px-5 py-3">
          <h1 className="text-5xl/13 font-bold text-gray-800">Characters</h1>
          <SearchBar onSearch={handleSearch} />
          <StatusFilter selectedStatus={statusFilter} onStatusChange={handleStatusChange} />
        </div>
        <div className="catalog block bg-sky-950">

          {loading && <p className="text-center text-gray-600">🔄 Завантаження...</p>}

          <div className="flex flex-col items-stretch gap-5 py-3 px-5 first:pt-5 last:pb-5 text-white">
            {users.length > 0 ? (
              users.map((user) => (
                <div key={user.id} className="bg-gray-700 shadow-md p-4 rounded-lg text-center">
                  <img src={user.image} alt={user.name} className="w-24 h-24 mx-auto rounded-full" />
                  <h3 className="mt-2 text-lg font-semibold">{user.name}</h3>
                  <Link href={`/characters/${user.id}`} className="text-blue-600 hover:underline">
                    🔍 Детальніше
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">❌ Нічого не знайдено</p>
            )}
          </div>
          <div className="flex justify-between items-center mt-2 gap-4 text-gray-800 text-center">
            <button
              onClick={handlePrevPage}
              disabled={!hasPrev}
              className="flex bg-gray-300 py-2 rounded disabled:opacity-50 px-1"
            >
              <SpriteIcons id="Caret_left" width={25} height={25} />
              Попередня
            </button>
            <span className="font-medium text-white">Сторінка {page}</span>
            <button
              onClick={handleNextPage}
              disabled={!hasNext}
              className="flex bg-gray-300 py-2 rounded disabled:opacity-50 px-1"
            >
              Наступна
              <SpriteIcons id="Caret_right" width={25} height={25} />  
            </button>
          </div>
        </div>
      </Layout>
    );
  }
  
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
  const data = await response.json();
  const { c_length, l_length, e_length } = await getFooterData();
  return { props: { initialUsers: data.results || [], c_length, l_length, e_length } };
};