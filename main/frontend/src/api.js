const API_URL = 'http://localhost:5000/api/movies';

export const fetchMovies = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const fetchMovieById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};

export const addMovie = async (movie) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });
  const data = await response.json();
  return data;
};
