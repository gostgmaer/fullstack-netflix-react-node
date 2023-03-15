import { MessageOutlined } from "@mui/icons-material";
import { Button, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { movie, singleMovie } from "../../assets/mock/movie";

const Details = () => {
  return (
    <div className="Details">
      <div className="left">
        <div className="matches">
          <strong>87% Match</strong>
          <span>1995</span>
          <span className="age">U/A 16+</span>
          <span>1h 49m</span>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, id.
          Dicta reiciendis ex quisquam similique eum omnis suscipit aut
          cupiditate voluptate consequatur deserunt, placeat magni blanditiis
          iste sint laboriosam officia.
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
            {singleMovie.genres.map((item) => (
              <li key={item.id}>{item.name}, </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
