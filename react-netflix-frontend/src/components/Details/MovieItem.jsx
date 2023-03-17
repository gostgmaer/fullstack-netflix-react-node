import { Add, PlayArrow } from "@mui/icons-material";
import { IconButton, Skeleton } from "@mui/material";
import moment from "moment/moment";
import React, { Fragment } from "react";
import { configurationDB } from "../../assets/mock/movie";
import { useGlobalAppContext } from "../../context/AppGlobalContent";

const MovieItem = ({ item }) => {
  const { modal,loader, showHideModal,getMovieInfo,infoMovie } = useGlobalAppContext();
  return (
  <Fragment>
    {loader? <Skeleton variant="rectangular" width={'32.5%'} height={'280px'} />:  <div className="MovieItem">
      <div className="imageContainer">
        <img
          src={`${configurationDB.images.base_url}/${
            configurationDB.images.backdrop_sizes[3]
          }${item.backdrop_path ? item.backdrop_path : item.poster_path}`}
          alt=""
        />
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
              <span> {moment(item.release_date).format("YYYY")}</span>
            </div>
          </div>
          <div className="right">
            <IconButton>
              <Add />
            </IconButton>
          </div>
        </div>
        <div className="desc">{`${item.overview.substring(0, 160)} ...`}</div>
      </div>
    </div>}
  </Fragment>
  );
};

export default MovieItem;
