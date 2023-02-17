import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavourite } from "../../redux/actions";
import "./Favorites.css";

const ConnectedList = () => {
  const moviesFav = useSelector((state) => state.moviesFavourites);
  const dispatch = useDispatch();
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
                    alt={`Avatar n°${movie.imdbID}`}
                    src={movie.Poster}
                    sx={{ width: 87, height: 87 }}
                  />
                </Link>
              </ListItemAvatar>
              <ListItemText id={movie.imdbID} primary={`${movie.Title}`} />
              <button
                onClick={() => dispatch(removeMovieFavourite(movie.imdbID))}
              />
            </>
          ))
        ) : (
          <h3>No favourites yet</h3>
        )}
      </ul>
    </div>
  );
};

export default ConnectedList;
