import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getMovieDetail(id);
  }
  render() {
    return (
      <div className="movie-card">
        <h1 className="title">{this.props.movieDetail.Title}</h1>
        <h2>Year: {this.props.movieDetail.Year}</h2>
        <h2>Written by: {this.props.movieDetail.Writer}</h2>
        <h2>Directed by: {this.props.movieDetail.Director}</h2>
        <h2>Rated: {this.props.movieDetail.Rated}</h2>
        <h2>Released: {this.props.movieDetail.Release}</h2>
        <h2>Genre: {this.props.movieDetail.Genre}</h2>
        <img src={this.props.movieDetail.Poster} alt="Nope.jpg" />
        <h2>Plot: {this.props.movieDetail.Plot}</h2>
        <h2>Actors: {this.props.movieDetail.Actors}</h2>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movieDetail: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
