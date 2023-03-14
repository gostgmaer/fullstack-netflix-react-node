import {
  ArrowBack,
  ArrowBackIos,
  ArrowForward,
  ArrowForwardIos,
} from "@mui/icons-material";
import { Box, colors, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import Listitem from "./ListItem/Listitem";
import MovieListItem from "./ListItem/MovieListItem";
import "./styles.scss";
const MovieList = () => {
  const listref = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [ismoved, setIsmoved] = useState(false);

  const handleArrow = (direction) => {
    let distance = listref.current.getBoundingClientRect().x - 50;
    console.log(distance);
    setIsmoved(true);
    if (direction === "left" && slideNumber >= 0) {
      // setSlideNumber(slideNumber - 1);
      listref.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber <= 0) {
      //  setSlideNumber(slideNumber + 1);
      listref.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  const handleClick = (direction) => {
    setIsmoved(true);
    let distance = listref.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listref.current.style.transform = `translateX(${230*5 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 1) {
      setSlideNumber(slideNumber + 1);
      listref.current.style.transform = `translateX(${-230*5 + distance}px)`;
    }
  };

  return (
    <div className="movieList">
      <span className="listTitle">Continue to Watch</span>
      <div className="listWrapper">
        {ismoved && (
          <IconButton
            sx={{
              zIndex: "101",
              position: "absolute",
              color: "white",
              top: 0,
              bottom: 0,
              left: 0,
            }}
            onClick={() => handleClick("left")}
          >
            <ArrowBackIos />
          </IconButton>
        )}
        <Box
          ref={listref}
          className="items"
          sx={{ display: "flex", gap: "5px" }}
        >
         <MovieListItem  index={0} />
         <MovieListItem  index={1} />
         <MovieListItem  index={2} />
         <MovieListItem  index={3} />
         <MovieListItem  index={4} />
         <MovieListItem  index={5} />
         <MovieListItem  index={6} />
         <MovieListItem  index={7} />
         <MovieListItem  index={8} />
         <MovieListItem  index={9} />
        </Box>

        <IconButton
          sx={{
            zIndex: 101,
            position: "absolute",
            color: "white",
            top: 0,
            bottom: 0,
            right: 0,
          }}
          onClick={() => handleClick("right")}
        >
          <ArrowForwardIos />
        </IconButton>
      </div>
    </div>
  );
};

export default MovieList;
