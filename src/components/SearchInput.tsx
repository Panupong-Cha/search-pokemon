"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    router.push(`/?name=${e.target.value}`);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Image src="/pokeball.svg" alt="Pokeball" width={30} height={30} />
        </div>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search a Pokémon"
          className="border border-gray-300 rounded-lg pl-12 pr-4 py-2 w-full text-black"
        />
      </div>
    </div>
  );
};

export default SearchInput;
