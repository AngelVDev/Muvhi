import {
  Avatar,
  // Icon,
  // IconButton,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavourite } from "../../actions";
// import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>This are your favourites</h2>
        <ul>
          {this.props.moviesFav?.length > 0 ? (
            this.props.moviesFav?.map((movie) => (
              <>
                <ListItemAvatar>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <Avatar
                      alt={`Avatar n°${movie.imdbID + 1}`}
                      src={movie.Poster}
                      sx={{ width: 87, height: 87 }}
                    />
                  </Link>
                </ListItemAvatar>
                <ListItemText id={movie.imdbID} primary={`${movie.Title}`} />
                <button
                  onClick={() => this.props.removeMovieFavourite(movie.imdbID)}
                >
                  {/* <Icon>{FavoriteBorderSharpIcon}</Icon> */}
                </button>
              </>
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
