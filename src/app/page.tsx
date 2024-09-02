import SearchInput from "../components/SearchInput";
import PokemonResult from "../components/PokemonResult";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <SearchInput />
      <PokemonResult />
    </div>
  );
};

export default Home;
