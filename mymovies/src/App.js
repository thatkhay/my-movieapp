import React, { useEffect, useState } from 'react';
import './App.css';
import Mypage from './pages/Mypage';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  async function searchMovies() {
    try {
      const apiKey = '7a447440';
      const searchTerm = 'Avatar';

      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      );
      console.log(response.data);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="App">
      <Mypage movies={movies} />
    </div>
  );
}

export default App;
