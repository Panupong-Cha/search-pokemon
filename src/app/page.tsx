import SearchInput from "../components/SearchInput";
import PokemonResult from "../components/PokemonResult";
import React, { Suspense, lazy } from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <SearchInput />
      <Suspense>
        <PokemonResult />
      </Suspense>
    </div>
  );
};

export default Home;
