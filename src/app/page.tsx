import SearchInput from "../components/SearchInput";
import PokemonResultWrapper from "../components/PokemonResultWrapper";
import React, { Suspense, lazy } from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <SearchInput />
      <Suspense>
        <PokemonResultWrapper />
      </Suspense>
    </div>
  );
};

export default Home;
