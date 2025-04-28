import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-around w-full border border-gray-800 text-gray-800 rounded-md">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Введіть ім'я персонажа..."
        className="text-black py-2 focus:border-none focus:outline-none"
      />
      <button type="submit" className="bg-transparent py-2 rounded-md">
        Пошук
      </button>
    </form>
  );
}
