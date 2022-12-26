import { Box, Button, Input } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addMovieFavourite, getMovies } from "../../actions";
import MultiActionAreaCard from "../Cards/Card.jsx";
import "./Buscador.css";

const Buscador = ({ movies, getMovies }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies(title);
  };

  return (
    <Box>
      <form className='form-container' onSubmit={handleSubmit}>
        <Input
          type='text'
          id='title'
          autoComplete='off'
          placeholder='Search here'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Button
          sx={{ backgroundColor: "darkgoldenrod", color: "white" }}
          type='submit'
        >
          Search
        </Button>
      </form>
      <ul>
        {movies &&
          movies.map((movie) => (
            <>
              <MultiActionAreaCard
                id={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                text={movie.Plot}
                key={"div" + movie.imdbID}
              />
            </>
          ))}
      </ul>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  movies: state.moviesLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (title) => dispatch(getMovies(title)),
  addMovieFavourite: (movie) => dispatch(addMovieFavourite(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
