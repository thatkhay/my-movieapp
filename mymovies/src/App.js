import React, { useEffect, useState } from 'react';
import './App.css';
import Mypage from './pages/Mypage';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0); 

  async function searchMovies(searchTerm, pageNumber) {
    try {
      if (!searchTerm) {
        setMovies([]);
        setErrorMessage('Input movie title above');
        return;
      }

      const apiKey = '7a447440';

      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&page=${pageNumber}`
      );

      if (response.data.Response === "True") {
        setMovies((prevMovies) => [...prevMovies, ...response.data.Search]);
        setTotalPages(Math.ceil(response.data.totalResults / 10)); 
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

  const getMovieDetails = async (id) => {
    try {
      const apiKey = 'f20d812250a70b94887c21e989fafe18';
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
      const { overview, popularity } = response.data;
      return { id, overview, popularity };
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return { id, overview: 'N/A', popularity: 'N/A' };
    }
  };

  useEffect(() => {
    setMovies([]);
    setPage(1);
    searchMovies(search, 1);
  }, [search]);

  const loadMoreMovies = () => {
    const nextPage = page + 1;
    searchMovies(search, nextPage);
    setPage(nextPage);
  };

  return (
    <div className="App">
      <Mypage movies={movies} search={search} setSearch={setSearch} errorMessage={errorMessage} loadMoreMovies={loadMoreMovies} totalPages={totalPages} currentPage={page} getMovieDetails={getMovieDetails} />
    </div>
  );
}

export default App;
