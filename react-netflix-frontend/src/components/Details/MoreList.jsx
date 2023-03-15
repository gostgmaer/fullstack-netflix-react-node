import {
  ArrowDropDown,
  ArrowDropDownCircle,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import { movie } from "../../assets/mock/movie";
import MovieItem from "./MovieItem";

const MoreList = () => {
  const [expandeValue, setExpandeValue] = useState(9);
  return (
    <div className="MoreList">
      <div className="title">
        <h3>More like this: </h3>
      </div>
      <div className="elements">
        {movie.results.slice(0, expandeValue).map((item) => (
          <MovieItem key={item.id} item={item} />
        ))}
      </div>
      <div className="loadmoreless">
        <Divider></Divider>
        <div className="arrowBtn">
          {" "}
          {expandeValue === 9 ? (
            <IconButton onClick={() => setExpandeValue(18)}>
              <KeyboardArrowDown />
            </IconButton>
          ) : (
            <IconButton onClick={() => setExpandeValue(9)}>
              <KeyboardArrowUp />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreList;
