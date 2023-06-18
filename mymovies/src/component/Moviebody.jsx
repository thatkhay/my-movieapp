import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function Moviebody({ movies, setSearch, search, errorMessage, loadMoreMovies, totalPages, currentPage }) {
  const [expandedMovieId, setExpandedMovieId] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleDetails = (movieId) => {
    if (expandedMovieId === movieId) {
      setExpandedMovieId('');
    } else {
      setExpandedMovieId(movieId);
    }
  };

  useEffect(() => {
    setExpandedMovieId('');
  }, [search]);

  const handleLoadMore = () => {
    setLoading(true); 

    setTimeout(async () => {
      try {
        await loadMoreMovies();
      } catch (error) {
        console.log('Error loading more movies:', error);
      }

      setLoading(false); 
    }, 2000); 
  };

  return (
    <div className='movieBody' style={{ gap: '2rem', alignItems: 'center', marginTop: '2rem', padding: '1rem' }}>
      <TextField
        className='input'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        id="outlined-basic"
        label="Search movies"
        variant="outlined"
        style={{ marginBottom: '2rem', width: '80%' }}
      />
      <div className='mainMovieDiv' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {movies.map((movie) => (
          <div
            className='movies'
            key={movie.imdbID}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'primary.main',
              boxShadow: 2,
            }}
          >
            <img
              className='moviePoster'
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: '100%', height: 'auto', marginBottom: '1rem', maxWidth: '28rem', maxHeight: '30rem' }}
            />
            <h3 style={{ color: 'secondary.main', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', textAlign: 'center' }}>
              {movie.Title}
            </h3>
            <p style={{ color: 'secondary.main', fontSize: '1rem', marginBottom: '0.5rem', textAlign: 'center' }}>{movie.Year}</p>
            {expandedMovieId === movie.imdbID && (
              <>
                <p style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem', textAlign: 'center' }}>{movie.Type}</p>
                <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem', textAlign: 'center' }}>{movie.imdbID}</p>
              </>
            )}
            <Button
              style={{ height: '2rem', width: '7rem', backgroundColor: 'black', fontSize: '.5rem', color: 'white', marginTop: '2rem' }}
              onClick={() => toggleDetails(movie.imdbID)}
            >
              {expandedMovieId === movie.imdbID ? 'Hide' : 'View Details'}
            </Button>
          </div>
        ))}
      </div>
      {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
      {currentPage < totalPages && (
        <Button
          style={{ height: '2rem', width: '7rem', backgroundColor: 'black', fontSize: '.5rem', color: 'white', marginTop: '2rem' }}
          onClick={handleLoadMore}
          disabled={loading} 
        >
          {loading ? <CircularProgress size={20} color="inherit" /> : 'Load More'}
        </Button>
      )}
    </div>
  );
}

export default Moviebody;
