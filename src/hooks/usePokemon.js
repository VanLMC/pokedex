import React, {
  createContext, useState, useMemo,
} from 'react';

export const pokemonContext = createContext({});

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState();

  let value;

  useMemo(() => {
    value = { pokemon, setPokemon };
  }, [pokemon]);

  return (
    <pokemonContext.Provider value={value}>
      {children}
    </pokemonContext.Provider>
  );
}
