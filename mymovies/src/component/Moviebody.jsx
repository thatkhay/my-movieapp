import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Moviebody({ movies, setSearch, search, errorMessage }) {
  return (
    <div className='movieBody' sx={{ gap: 2, alignItems: 'center', padding: 2, marginTop: '2rem' }}>
      <TextField
        className='input'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        id="outlined-basic"
        label="Search movies"
        variant="outlined"
        sx={{ marginBottom: 4 }}
      />
      <div className='mainMovieDiv' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr' , gap: '1rem'}}>
        {movies.map((movie) => (
          <div
            className='movies'
            key={movie.imdbID}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: 2,
              padding: 2,
              backgroundColor: 'primary.main',
              borderRadius: 1,
              boxShadow: 2,
            }}
          >
            <img
              className='moviePoster'
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: '15rem', height: '20rem', marginBottom: 2 }}
            />
            <h3 style={{ color: 'secondary.main', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 1 }}>
              {movie.Title}
            </h3>
            <p style={{ fontSize: '0.8rem', marginBottom: 2 }}>{movie.Type}</p>
            <p style={{ fontSize: '0.8rem', marginBottom: 2 }}>{movie.imdbID}</p>
            <p style={{ fontSize: '0.8rem', marginBottom: 2 }}>Cast: {movie.Actors}</p>
            <p sx={{ color: 'secondary.main', fontSize: '1rem' }}>{movie.Year}</p>
            <Button style={{ height: '2rem', width: '7rem', backgroundColor: 'black', fontSize: '.5rem', color: 'white' }}>show more</Button>
          </div>
        ))}
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default Moviebody;
