import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/movies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {Array.isArray(movies) ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} description={movie.description} />
        ))
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default MovieList;
