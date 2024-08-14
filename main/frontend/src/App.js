import React from 'react';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';

const App = () => {
  return (
    <div>
      <h1>Movie Site</h1>
      <AddMovieForm />
      <MovieList />
    </div>
  );
};

export default App;
