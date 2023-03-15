import { PlayArrow } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const MovieItem = () => {
  return (
    <div className="MovieItem">
      <div className="imageContainer">
        <img src="./assets/images/modalImg.webp" alt="" />
        <div className="text"></div>
        <IconButton className="playicon">
          <PlayArrow />
        </IconButton>
      </div>
      <div className="content">
        <div className="top">
          <div className="left">
            <strong color="green">75% Match</strong>{" "}
            <div>
              <span>A</span>
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
        <div className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          magni obcaecati sapiente similique excepturi iusto, velit fugit
          possimus dolore totam eaque, ratione vel. Sint, architecto quo? Quos,
          non sequi. Odio?
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
