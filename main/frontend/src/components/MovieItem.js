import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie._id}`}>View Details</Link>
    </div>
  );
};

export default MovieItem;
