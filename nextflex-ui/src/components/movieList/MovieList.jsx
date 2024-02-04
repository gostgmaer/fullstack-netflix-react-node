import {
  ArrowBack,
  ArrowBackIos,
  ArrowForward,
  ArrowForwardIos,
} from "@mui/icons-material";
import { Box, colors, IconButton, Skeleton } from "@mui/material";
import { filter } from "lodash";
import React, { Fragment, useRef, useState } from "react";
import { useGlobalAppContext } from "../../context/AppGlobalContent";

import Listitem from "./ListItem/Listitem";
import MovieListItem from "./ListItem/MovieListItem";
import "./styles.scss";
const MovieList = ({ heading, data }) => {
  const listref = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [ismoved, setIsmoved] = useState(false);
  const { loader } = useGlobalAppContext();
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

  // data?.results.filter((item) => item.backdrop_path || item.poster_path);

  const handleClick = (direction) => {
    setIsmoved(true);
    let distance = listref.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listref.current.style.transform = `translateX(${230 * 5 + distance}px)`;
    }
    if (direction === "right" && slideNumber < data?.results?.length / 5 - 1) {
      setSlideNumber(slideNumber + 1);
      listref.current.style.transform = `translateX(${-230 * 5 + distance}px)`;
    }
  };

  return (
    <div className="movieList ">
      <span className="listTitle">{heading}</span>
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
          {data?.results
            ?.filter((item) => item.backdrop_path || item.poster_path)
            .slice(0, 20)
            ?.map((item, index) => (
              <MovieListItem key={index} item={item} index={index} />
            ))}
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
