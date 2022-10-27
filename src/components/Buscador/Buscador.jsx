import { IconButton } from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovieFavourite, getMovies } from "../../actions";
import MultiActionAreaCard from "../Cards/Card.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              type="text"
              id="title"
              autoComplete="off"
              placeholder="Search here"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">Search</button>
        </form>
        <ul>
          {" "}
          {this.props.movies &&
            this.props.movies.map((movie) => (
              <>
                <MultiActionAreaCard
                  id={movie.imdbID}
                  poster={movie.Poster}
                  title={movie.Title}
                  text={movie.Plot}
                  key={"div" + movie.imdbID}
                />
                <IconButton
                  onClick={() => this.props.addMovieFavourite(movie)}
                  aria-label="add to favorites"
                >
                  <FavoriteIcon />
                </IconButton>
              </>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: (title) => dispatch(getMovies(title)),
    addMovieFavourite: (movie) => dispatch(addMovieFavourite(movie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
