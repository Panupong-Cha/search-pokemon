"use client";

import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../queries/getPokemon";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

const PokemonResult = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name },
  });

  if (loading)
    return (
      <p className="flex items-center justify-center text-black">
        Loading Pokémon data...
      </p>
    );
  if (error || !data.pokemon)
    return (
      <p className="flex items-center justify-center text-black">
        Pokémon Not Found
      </p>
    );

  const { pokemon } = data;

  const handleEvolutionClick = (evoName: string) => {
    router.push(`/?name=${evoName}`);
  };

  return (
    <div className="flex items-center justify-center max-h-full text-black">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">{pokemon.name}</h1>

        <Image
          src={pokemon.image}
          alt={`${pokemon.name} image`}
          width={200}
          height={200}
          className="m-6 mx-auto"
        />

        <h2 className="mb-4">
          <span className="text-xl font-semibold">Types: </span>
          <span className="text-base">{pokemon.types.join(", ")}</span>
        </h2>

        <h2 className="mb-4">
          <span className="text-xl font-semibold">Resistant: </span>
          <span className="text-base">{pokemon.resistant.join(", ")}</span>
        </h2>

        <h2 className="mb-4">
          <span className="text-xl font-semibold">Weaknesses: </span>
          <span className="text-base">{pokemon.weaknesses.join(", ")}</span>
        </h2>

        <h2 className="text-xl font-semibold mb-2">Attacks</h2>
        <div className="mb-4">
          <h3 className="font-semibold mb-1">Fast</h3>
          <ul className="list-disc pl-5 mb-4">
            {pokemon.attacks.fast.map((attack: any) => (
              <li key={attack.name}>
                {attack.name} ({attack.type}, {attack.damage} dmg)
              </li>
            ))}
          </ul>
          <h3 className="font-semibold mb-1">Special</h3>
          <ul className="list-disc pl-5">
            {pokemon.attacks.special.map((attack: any) => (
              <li key={attack.name}>
                {attack.name} ({attack.type}, {attack.damage} dmg)
              </li>
            ))}
          </ul>
        </div>

        {/* แปลงร่าง */}
        {pokemon.evolutions && (
          <>
            <h2 className="text-xl font-semibold mb-2">Evolutions</h2>
            <ul className="list-none pl-0">
              {pokemon.evolutions.map((evolution: any) => (
                <li
                  key={evolution.id}
                  onClick={() => handleEvolutionClick(evolution.name)}
                  className="cursor-pointer text-blue-500 hover:underline mb-1"
                >
                  {evolution.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonResult;
