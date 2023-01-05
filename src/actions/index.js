const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export function getMovies(title) {
  return function (dispatch) {
    return fetch(`${BASE_URL}?apikey=${API_KEY}&s=${title}`)
      .then((response) => response.json())
      .then((movies) => {
        dispatch({ type: 'GET_MOVIES', payload: movies });
      });
  };
}

export function getMoviesForHome(year) {
  return async function (dispatch) {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=This&y=${year}`
    );

    const newResponse = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=This&y=${year - 1}`
    );
    const movies =
      response.length > 4 ? await response.json() : await newResponse.json();
    dispatch({ type: 'GET_MOVIES', payload: movies });
  };
}
export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`)
      .then((response) => response.json())
      .then((detail) => {
        dispatch({ type: 'GET_MOVIE_DETAIL', payload: detail });
      });
  };
}
export function addMovieFavourite(payload) {
  return { type: 'ADD_MOVIE_FAVOURITE', payload: payload };
}

export function removeMovieFavourite(payload) {
  return { type: 'REMOVE_MOVIE_FAVOURITE', payload: payload };
}
