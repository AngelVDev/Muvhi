import { Box, Button, Input } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovies, getMoviesForHome } from "../../redux/actions";
import MultiActionAreaCard from "../Cards/Card.jsx";
import "./Buscador.css";

const Buscador = () => {
  const [title, setTitle] = useState("");
  const movies = useSelector((state) => state.moviesLoaded);
  const dispatch = useDispatch();
  const date = new Date();
  const thisYear = date.getFullYear();
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies(title);
  };

  React.useEffect(() => {
    dispatch(getMoviesForHome(thisYear));
  }, [dispatch, thisYear]);

  return (
    <Box sx={{ display: "block" }}>
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
      <ul className='movies'>
        {movies &&
          movies.map((movie) => (
            <>
              <MultiActionAreaCard
                id={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                key={"div" + movie.imdbID}
                entity={movie}
              />
            </>
          ))}
      </ul>
    </Box>
  );
};

export default Buscador;
