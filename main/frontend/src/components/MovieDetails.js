import React, { useState, useEffect } from 'react';
import { fetchMovieById } from '../api';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const movie = await fetchMovieById(match.params.id);
      setMovie(movie);
    };
    getMovie();
  }, [match.params.id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>{movie.director}</p>
      <p>{movie.releaseYear}</p>
      <p>{movie.genre}</p>
    </div>
  );
};

export default MovieDetails;
