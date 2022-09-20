const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

export function getMovies(title) {
  return function (dispatch) {
    return fetch(`${BASE_URL}?apikey=${API_KEY}&s=${title}`)
      .then((response) => response.json())
      .then((movies) => {
        console.log(API_KEY);
        dispatch({ type: "GET_MOVIES", payload: movies });
        console.log(movies);
      });
  };
}
export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`)
      .then((response) => response.json())
      .then((detail) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: detail });
      });
  };
}
export function addMovieFavourite(payload) {
  return { type: "ADD_MOVIE_FAVOURITE", payload: payload };
}

export function removeMovieFavourite(payload) {
  return { type: "REMOVE_MOVIE_FAVOURITE", payload: payload };
}
