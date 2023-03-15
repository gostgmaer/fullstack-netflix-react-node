import { Add, PlayArrow } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import moment from "moment/moment";
import React from "react";
import { configurationDB } from "../../assets/mock/movie";

const MovieItem = ({item}) => {
  return (
    <div className="MovieItem">
      <div className="imageContainer">
        <img src={`${configurationDB.images.base_url}/${configurationDB.images.poster_sizes[3]}${item.poster_path}`} alt="" />
        <div className="text"></div>
        <div className="bottonPlay">
        <IconButton className="playicon">
          <PlayArrow />
        </IconButton>
        </div>
       
       
      </div>
      <div className="content">
        <div className="top">
          <div className="left">
            <strong className="green">75% Match</strong>{" "}
            <div>
              <span className="age">U/A 13+</span>
             <span> {moment(item.release_date).format('YYYY')}</span>
            </div>
          </div>
          <div className="right">
            <IconButton><Add/></IconButton>
          </div>
        </div>
        <div className="desc">
         {`${item.overview.substring(0,160)} ...`}
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
