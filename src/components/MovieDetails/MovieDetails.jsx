import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function MovieDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const selectedMovie = useSelector(store => store.selectedMovie);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id });
  }, [id, dispatch]);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div data-testid="movieDetails">
      <main>
      <h1>Movie Details</h1>
      <h2>{selectedMovie.title}</h2>
      <img src={selectedMovie.poster} alt={selectedMovie.title} />
      <p>{selectedMovie.description}</p>
      <h3>Genres:</h3>
      <ul>
        {selectedMovie.genres && selectedMovie.genres.map((genre, index) => (
          <li key={index}>{genre.name}</li>
        ))}
      </ul>
      <button data-testid="toList" onClick={() => history.push('/')}>
        Back to movie list
      </button>
      </main>
    </div>
  );
}

export default MovieDetails;