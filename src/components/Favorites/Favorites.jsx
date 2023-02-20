import {
  Avatar,
  Button,
  Card,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavourite } from "../../redux/actions";
import "./novaf.css";

const ConnectedList = () => {
  const moviesFav = useSelector((state) => state.moviesFavourites);
  const dispatch = useDispatch();
  return (
    <Box alignItems='center'>
      <Typography
        variant='h4'
        fontWeight='500'
        textAlign='center'
        sx={{
          padding: "0.4rem 0 0.4rem 0",
          borderRadius: "15px",
          width: "100%",
          backgroundColor: "#00000045",
          transition: "all 200ms",
          letterSpacing: "5px",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0px 0px 4px 2px #ffc65358;",
            color: "#fffef8",
            backgroundColor: "#383838",
            textShadow: "0px 0px 10px #FFDC00",
          },
        }}
      >
        Your favs
      </Typography>
      <ul style={{ marginBottom: "30vh", marginLeft: "-2rem" }}>
        {moviesFav?.length > 0 ? (
          moviesFav.map((movie) => (
            <Card
              sx={{
                width: "250px",
                height: "200px",
                transition: "all 200ms",
                position: "relative",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "1.4rem",
                backgroundColor: "#383838",
                "&:hover": {
                  transform: "scale(1.08) rotate(1deg)",
                  boxShadow: "0px 0px 4px 2px #ffc653;",
                },
              }}
            >
              <ListItemAvatar sx={{ marginTop: "1rem" }}>
                <Link to={`/movie/${movie.imdbID}`}>
                  <Avatar
                    alt={`Avatar n°${movie.imdbID}`}
                    src={movie.Poster}
                    sx={{ width: 87, height: 87 }}
                  />
                </Link>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "#fffef8" }}
                id={movie.imdbID}
                primary={`${movie.Title}`}
              />
              <Button
                sx={{ background: "#ffd8d8" }}
                onClick={() => dispatch(removeMovieFavourite(movie.imdbID))}
              >
                Remove
              </Button>
            </Card>
          ))
        ) : (
          <div id='nofavs'>
            <h2>No favs</h2>
          </div>
        )}
      </ul>
    </Box>
  );
};

export default ConnectedList;
