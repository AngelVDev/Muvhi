import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addMovieFavourite } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function MultiActionAreaCard({ id, entity, title, poster }) {
  console.log("ramen");
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        maxWidth: 250,
        backgroundColor: "#3131319b",
        color: "whitesmoke",
        marginBottom: "1.5rem",
      }}
    >
      <CardActionArea>
        <Link style={{ textDecoration: "none" }} to={`/movie/${id}`}>
          <CardMedia
            component='img'
            height='450'
            image={poster}
            alt={`poster+${id}`}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton
        onClick={() => dispatch(addMovieFavourite(entity))}
        aria-label='add to favorites'
      >
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
}
