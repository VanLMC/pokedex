import axios from 'axios';
// process.env.API_URL
const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master',
});

export default api;
