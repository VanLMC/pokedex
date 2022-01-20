import React from 'react';
import Home from './pages/home';
import { GlobalStyle } from './styles/global';
import { PokemonProvider } from './hooks/usePokemon';

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <GlobalStyle />
        <Home />
      </PokemonProvider>
    </div>
  );
}

export default App;
