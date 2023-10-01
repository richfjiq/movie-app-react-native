import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '546bbb475772bad50957fe01723b7767',
    language: 'es-ES',
  },
});

export default movieDB;
