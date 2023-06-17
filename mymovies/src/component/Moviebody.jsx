import React from 'react';
import TextField from '@mui/material/TextField';

function Moviebody({ movies }) {
  return (
    <div className='movieBody'>
      <TextField id="outlined-basic" label="Search movies" variant="outlined" />
      {movies.map((movie) => (
        <div className='movieDiv' key={movie.imdbID}>
          <img className='moviePoster' src={movie.Poster} alt={movie.Title} />
          <div className='titleAndYear'>
          <h3 className='movieTitle' >{movie.Title}</h3>
          <p className='movieYear' >{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Moviebody;
