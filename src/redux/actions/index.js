const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export function getMovies(title) {
  return function (dispatch) {
    return fetch(`${BASE_URL}?apikey=${API_KEY}&s=${title}`)
      .then((response) => response.json())
      .then((movies) => {
        dispatch({ type: "GET_MOVIES", payload: movies });
      });
  };
}

export function getMoviesForHome(year) {
  return async function (dispatch) {
    function response() {
      return fetch(`${BASE_URL}?apikey=${API_KEY}&s=Live&y=${year}`);
    }
    function otherCall() {
      return fetch(`${BASE_URL}?apikey=${API_KEY}&s=Live&y=${year - 1}`);
    }
    let movies;
    let moviesUnJsoned;
    response();
    if (response.length > 4) {
      moviesUnJsoned = await response();
      movies = await moviesUnJsoned.json();
    } else {
      moviesUnJsoned = await otherCall();
      movies = await moviesUnJsoned.json();
    }
    if (movies !== undefined) {
      return dispatch({ type: "GET_MOVIES", payload: movies });
    }
  };
}
export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`)
      .then((response) => response.json())
      .then((detail) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: detail });
      });
  };
}
export function addMovieFavourite(payload) {
  console.table(payload);
  return { type: "ADD_MOVIE_FAVOURITE", payload: payload };
}

export function removeMovieFavourite(payload) {
  return { type: "REMOVE_MOVIE_FAVOURITE", payload: payload };
}
