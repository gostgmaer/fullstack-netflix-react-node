import {
  ArrowBack,
  ArrowBackIos,
  ArrowForward,
  ArrowForwardIos,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import Listitem from "./ListItem/Listitem";
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
      listref.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listref.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="movieList">
      <span className="listTitle">Continue to Watch</span>
      <div className="listWrapper">
      {ismoved && (
            <IconButton sx={{zIndex:'101'}} onClick={() => handleClick("left")}>
              <ArrowBackIos />
            </IconButton>
          )}
        <Box
          ref={listref}
          className="items"
          sx={{ display: "flex", gap: "5px" }}
        >
         
          <Listitem />

          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />

          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />

          
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: ismoved ? "space-between" : "flex-end",
            alignItems: "center",
            color: "white",
            "& .MuiIconButton-root": {
              // color:'white !important',
              borderRadius: "0",
              backgroundColor: "#00000024",
              height: "100%",
              "& .MuiSvgIcon-root": {
                width: "30px",
                height: "30px",
              },
              "&:hover": {
                color: "white !important",
                "& .MuiSvgIcon-root": {
                  display: "block",
                },
              },
            },
          }}
          className="arrowkey"
        >
         
         
        </Box> */}
        <IconButton sx={{zIndex:9999}} onClick={() => handleClick("right")}>
            <ArrowForwardIos />
          </IconButton>
      </div>
    </div>
  );
};

export default MovieList;
