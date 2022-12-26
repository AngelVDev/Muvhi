import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavourite } from "../../actions";
import "./Favorites.css";

const ConnectedList = ({ moviesFav, removeMovieFavourite }) => {
  return (
    <div>
      <h2>This are your favourites</h2>
      <ul>
        {moviesFav?.length > 0 ? (
          moviesFav.map((movie) => (
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
              <button onClick={() => removeMovieFavourite(movie.imdbID)} />
            </>
          ))
        ) : (
          <h3>No hay películas aún</h3>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  moviesFav: state.moviesFavourites,
});

const mapDispatchToProps = (dispatch) => ({
  removeMovieFavourite: (id) => dispatch(removeMovieFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
