import { MessageOutlined } from "@mui/icons-material";
import { Button, IconButton, Tooltip } from "@mui/material";
import moment from "moment";
import React from "react";
import { movie, singleMovie } from "../../assets/mock/movie";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import { millisecondsToStr } from "../../utils/custom/CustomFunctions";

const Details = () => {

  const {getMovieInfo,infoMovie}=useGlobalAppContext()


  console.log(infoMovie);
  return (
    <div className="Details">
      <div className="left">
        <div className="matches">
          <strong>87% Match</strong>
          <span>{moment(infoMovie?.release_date).format('YYYY')}</span>
          <span className="age">U/A 16+</span>
          <span>{millisecondsToStr(infoMovie?.runtime*60*1000)}</span>
          <span className="quality">HD</span>
          <Tooltip
            sx={{
              color: "white",
              "&.MuiTooltip-tooltip": { backgroundColor: "red" },
            }}
            title="Add"
            placement="top-start"
          >
            <IconButton>
              {" "}
              <MessageOutlined />
            </IconButton>
          </Tooltip>
        </div>
        <div className="description">
         {`${infoMovie?.overview.substring(0,220)}...`}
        </div>
      </div>
      <div className="right">
        <div className="cast">
          <span>Cast : </span>
          <ul>
            <li>cast</li>
          </ul>
        </div>
        <div className="genres">
          <span>Genres : </span>
          <ul>
            {infoMovie?.genres.map((item) => (
              <li key={item.id}>{item.name}, </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
