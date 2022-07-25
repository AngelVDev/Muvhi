const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === "GET_MOVIES") {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  }
  if (action.type === "GET_MOVIE_DETAIL") {
    return {
      ...state,
      movieDetail: action.payload,
    };
  }
  if (action.type === "ADD_MOVIE_FAVOURITE") {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.concat(action.payload),
    };
  }
  if (action.type === "REMOVE_MOVIE_FAVOURITE") {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.filter(
        (movie) => movie.imdbID !== action.payload
      ),
    };
  }
  return state;
}

export default rootReducer;
