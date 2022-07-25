import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavourite } from "../../actions";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Pedorras</h2>
        <ul>
          {this.props.moviesFav?.length > 0 ? (
            this.props.moviesFav?.map((movie) => (
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  <span>{movie.Title}</span>
                </Link>
                <button
                  onClick={() => this.props.removeMovieFavourite(movie.imdbID)}
                >
                  X
                </button>
              </li>
            ))
          ) : (
            <h3>No hay películas aún</h3>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesFav: state.moviesFavourites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavourite: (id) => dispatch(removeMovieFavourite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
