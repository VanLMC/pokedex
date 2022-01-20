import React, { useEffect, useState, useContext } from 'react';

// Hooks
import { pokemonContext } from '../../hooks/usePokemon';

// Components
import Header from '../../components/header';
import Card from '../../components/card';

// Services
import api from '../../services/api';

// Styles
import { GridContainer, GridItem } from './styles';

// Assets
import { ReactComponent as Loader } from '../../assets/loader.svg';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { pokemon, setPokemon } = useContext(pokemonContext);

  const fetchPokemon = async () => {
    try {
      const res = await api.get('/pokedex.json');
      setPokemon(res.data.pokemon);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <Header />
      {loading && <Loader className="spinner" />}
      <GridContainer>
        {pokemon && pokemon.map((p) => <GridItem key={p.id}><Card data={p} /></GridItem>)}
      </GridContainer>
    </>
  );
}
