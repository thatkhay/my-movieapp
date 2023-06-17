import React, { useEffect, useState } from 'react';
import './App.css';
import Mypage from './pages/Mypage';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function searchMovies(searchTerm) {
    try {
      if (!searchTerm) {
        setMovies([]);
        setErrorMessage('Input movie title');
        return;
      }

      const apiKey = '7a447440';

      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setErrorMessage('');
      } else {
        setMovies([]);
        setErrorMessage(response.data.Error);
      }
    } catch (error) {
      console.error(error);
      setMovies([]);
      setErrorMessage('Error searching movies. Please try again later.');
    }
  }

  useEffect(() => {
    searchMovies(search);
  }, [search]);

  return (
    <div className="App">
      <Mypage movies={movies} search={search} setSearch={setSearch} errorMessage={errorMessage} />
    </div>
  );
}

export default App;
