import { Rating } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import YouTube from "react-youtube";
import { getMovieDetail } from "../../redux/actions/index";
import { searchYouTube } from "../../middleware";
import "./Movie.css";

const Movie = ({ movieDetail, getMovieDetail, match }) => {
  const [ytId, setYtId] = React.useState(null);
  React.useEffect(() => {
    let id = match.params.id;
    getMovieDetail(id);
  }, [getMovieDetail, match]);

  async function getterTrailerId(title) {
    if (title) {
      const trailer = await searchYouTube(title + " trailer");
      if (trailer.length) {
        setYtId(trailer[0].keyId);
      }
    }
  }

  if (movieDetail.imdbID === match.params.id) {
    return (
      <>
        <h1 className='title'>{movieDetail.Title}</h1>
        <div className='movie-card'>
          <div className='container'>
            <h2>Year: {movieDetail.Year}</h2>
            <h2>Written by: {movieDetail.Writer}</h2>
            <h2>Directed by: {movieDetail.Director}</h2>
            <h2>Rated: {movieDetail.Rated}</h2>
            {movieDetail.Release && <h2>Released: {movieDetail.Release}</h2>}
            <div className='secondContainer'>
              <img className='poster' src={movieDetail.Poster} alt='Nope.jpg' />
              <div className='onlyText'>
                <h2>Genre: {movieDetail.Genre}</h2>
                <h2>Actors: {movieDetail.Actors}</h2>
                <h2>Plot: {movieDetail.Plot}</h2>
              </div>
            </div>
            {movieDetail.Title && (
              <YouTube
                videoId={
                  ytId === null ? getterTrailerId(movieDetail.Title) : ytId
                }
                opts={{
                  width: "640",
                  height: "360",
                }}
              />
            )}
            <span className='whatsLeftAndBelow'>
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
            </span>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>LOADING</h1>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  movieDetail: state.movieDetail,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieDetail: (id) => dispatch(getMovieDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
