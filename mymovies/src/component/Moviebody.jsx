import React from 'react';
import TextField from '@mui/material/TextField';

function Moviebody({ movies }) {
  return (
    <div className='mainMovieDiv'>
    <div className='movieBody' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, marginTop: '2rem' }}>
      <TextField className='input' id="outlined-basic" label="Search movies" variant="outlined" sx={{marginBottom: 4 }} />
      {movies.map((movie) => (
        <div className='movies'
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
          <img className='moviePoster'
            src={movie.Poster}
            alt={movie.Title}
            sx={{ width: '200px', height: 'auto', marginBottom: 2 }}
          />
          <h3 sx={{ color: 'secondary.main', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 1 }}>
            {movie.Title}
          </h3>
          <p sx={{ color: 'secondary.main', fontSize: '1rem' }}>{movie.Year}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Moviebody;
