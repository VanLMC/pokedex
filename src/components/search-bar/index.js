import React, { useContext, useState } from 'react';

// Hooks
import { pokemonContext } from '../../hooks/usePokemon';

// Services
import api from '../../services/api';

// Styles
import * as S from './styles';

export default function SearchBar() {
  const { setPokemon } = useContext(pokemonContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const { data } = await api.get('/pokedex.json');
    const { pokemon } = data;

    const numberRgx = /^[0-9]+$/;

    const isSearchTermNumber = searchTerm.match(numberRgx);

    let newArray = [];
    if (!isSearchTermNumber) {
      newArray = pokemon.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      newArray = pokemon.filter((p) => p.id === parseInt(searchTerm, 10));
    }

    setPokemon(newArray);
  };

  return (
    <S.Search>
      <S.SearchBarInput type="text" placeholder="Procure um pokémon" onChange={(e) => setSearchTerm(e.target.value)} />
      <S.SearchBarButton onClick={handleSearch}>
        <S.SearchIcon />
      </S.SearchBarButton>
    </S.Search>
  );
}
