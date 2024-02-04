import {
  ArrowDropDown,
  ArrowDropDownCircle,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import { movie } from "../../assets/mock/movie";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import MovieItem from "./MovieItem";

const MoreList = () => {
  const [expandeValue, setExpandeValue] = useState(9);
  const { getMovieInfo, infoMovie, similar } = useGlobalAppContext();

  const getUniqueBy = (arr, prop) => {
    const set = new Set();
    return arr?.filter((o) => !set.has(o[prop]) && set.add(o[prop]));
  };

  const setExpandeValueNine = (params) => {
    setExpandeValue(9)
  }
  const setExpandeValueMore = (params) => {
    setExpandeValue(18)
  }
 
  return (
    <div className="MoreList">
      <div className="title">
        <h3>More like this: </h3>
      </div>
      <div className="elements">
        {getUniqueBy(similar?.results, "id")?.filter(item=>item.backdrop_path || item.poster_path)?.slice(0, expandeValue).map((item) => (
          <MovieItem key={item.id} item={item} />
        ))}
      </div>
      <div className="loadmoreless">
        <Divider></Divider>
        <div className="arrowBtn">
          {" "}
          {expandeValue === 9 ? (
            <IconButton onClick={setExpandeValueMore}>
              <KeyboardArrowDown />
            </IconButton>
          ) : (
            <IconButton onClick={setExpandeValueNine}>
              <KeyboardArrowUp />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreList;
