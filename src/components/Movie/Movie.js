import { Rating } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

const Movie = ({ movieDetail, getMovieDetail, match }) => {
  React.useEffect(() => {
    let id = match.params.id;
    getMovieDetail(id);
  }, [getMovieDetail, match]);

  return (
    <div className='movie-card'>
      <h1 className='title'>{movieDetail.Title}</h1>
      <h2>Year: {movieDetail.Year}</h2>
      <h2>Written by: {movieDetail.Writer}</h2>
      <h2>Directed by: {movieDetail.Director}</h2>
      <h2>Rated: {movieDetail.Rated}</h2>
      <h2>Released: {movieDetail.Release}</h2>
      <h2>Genre: {movieDetail.Genre}</h2>
      <img src={movieDetail.Poster} alt='Nope.jpg' />
      <h2>Actors: {movieDetail.Actors}</h2>
      <h2>Plot: {movieDetail.Plot}</h2>
      <>
        <h2>Rating:</h2>
        <Rating
          name='customized-10'
          precision={0.1}
          defaultValue={0}
          max={10}
          value={movieDetail.imdbRating * 1}
          readOnly
        />
        <h2>Language: {movieDetail.Language}</h2>
      </>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieDetail: state.movieDetail,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieDetail: (id) => dispatch(getMovieDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
