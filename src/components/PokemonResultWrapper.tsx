// components/PokemonResultWrapper.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import PokemonResult from "./PokemonResult";

const PokemonResultWrapper = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <Suspense
      fallback={
        <p className="flex items-center justify-center text-black">
          Loading Pokémon data...
        </p>
      }
    >
      {name ? (
        <PokemonResult name={name} />
      ) : (
        <p className="flex items-center justify-center text-black">
          Please enter a Pokémon name.
        </p>
      )}
    </Suspense>
  );
};

export default PokemonResultWrapper;
