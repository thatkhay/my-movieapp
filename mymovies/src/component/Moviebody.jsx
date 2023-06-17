import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Moviebody({ movies }) {
  return (
   
      <div className='movieBody' sx={{ gap: 2, alignItems: 'center', padding: 2, marginTop: '2rem' }}>
        <TextField className='input' id="outlined-basic" label="Search movies" variant="outlined" sx={{ marginBottom: 4 }} />
        <div className='mainMovieDiv' style={{ display: 'grid', gridTemplateColumns:'1fr 1fr 1fr',}}>
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
              style={{ width: '24rem', height: '30rem', marginBottom: 2 }}
            />
            <h3 sx={{ color: 'secondary.main', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 1 }}>
              {movie.Title}
            </h3>
            <p sx={{ color: 'secondary.main', fontSize: '1rem' }}>{movie.Year}</p>
            <Button style={{height: '2rem', width: '7rem', backgroundColor: 'black', fontSize: '.5rem', color: 'white' }}>show more</Button> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Moviebody;
