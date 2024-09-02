import SearchInput from "../components/SearchInput";
import PokemonResult from "../components/PokemonResult";
import { Suspense } from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <SearchInput />
      <Suspense fallback={<p>Loading Pokémon data...</p>}>
        <PokemonResult />
      </Suspense>
    </div>
  );
};

export default Home;
