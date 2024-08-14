import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.director}</p>
      <p>{movie.year}</p>
      <p>{movie.genre}</p>
    </div>
  );
};

export default Movie;
