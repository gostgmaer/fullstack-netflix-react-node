
import { millisecondsToStr } from "@/helper/services";
import { MessageOutlined } from "@mui/icons-material";
import { Button, IconButton, Tooltip } from "@mui/material";
import moment from "moment";
import React from "react";

const Details = (props) => {


  return (
    <div className="Details">
      <div className="left">
        <div className="matches">
          <strong>87% Match</strong>
          <span>{moment(props.data?.release_date?props.data?.release_date:props.data?.first_air_date).format("YYYY")}</span>
          <span className="age">U/A 16+</span>
          <span>{props.data?.runtime?millisecondsToStr(props.data?.runtime * 60 * 1000):`${props.data?.number_of_seasons} Session`}</span>
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
          {`${props.data?.overview.substring(0, 220)}...`}
        </div>
      </div>
      <div className="right">
        <div className="cast">
          <span>Cast: </span>
          <ul>
            <ul>
              {props.data?.cast
                ?.sort((a, b) => b.popularity - a.popularity)
                ?.slice(0, 3)
                ?.map((item) => (
                  <li key={item.id}>{item.name}, </li>
                ))}
            </ul>
          </ul>
        </div>
        <div className="genres">
          <span>Genres: </span>
          <ul>
            {props.data?.genres.map((item) => (
              <li key={item.id}>{item.name}, </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
