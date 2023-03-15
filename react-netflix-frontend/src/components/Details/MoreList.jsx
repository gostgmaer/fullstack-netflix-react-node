import { ArrowDropDownCircle } from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import React from "react";
import MovieItem from "./MovieItem";

const MoreList = () => {
  return (
    <div className="MoreList">
      <div className="title">
        <h3>More like this</h3>
      </div>
      <div className="elements">
        <MovieItem />
        
      </div>
      <div className="loadmoreless">
        <Divider></Divider>
        <IconButton><ArrowDropDownCircle/></IconButton>
      </div>
    </div>
  );
};

export default MoreList;
