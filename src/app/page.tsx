import SearchInput from "../components/SearchInput";
// import PokemonResult from "../components/PokemonResult";
import React, { Suspense, lazy } from "react";

const PokemonResult = lazy(() => import("../components/PokemonResult"));

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <SearchInput />
      <Suspense fallback={<div>Loading Pokémon Data...</div>}>
        <PokemonResult />
      </Suspense>
    </div>
  );
};

export default Home;
