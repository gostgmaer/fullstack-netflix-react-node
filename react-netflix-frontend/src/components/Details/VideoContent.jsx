import {
  Add,
  Close,
  PlayArrow,
  ThumbUp,
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { configurationDB } from "../../assets/mock/movie";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import Details from "./Details";
import "./style.scss";
const VideoContent = () => {
  const { modal, showHideModal, infoMovie } = useGlobalAppContext();

  const [mute, setMute] = useState(false);

  const navigate = useNavigate();

  const handleWatch = () => {
    //  setIsHovered(!isHovered)
    navigate(`/watch/${infoMovie.id}`);
    // console.log(navigate);
  };

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="VideoContent">
      <div className="content">
        <img
          src={`${configurationDB.images.base_url}/${infoMovie.backdrop_path?configurationDB.images.backdrop_sizes[2]:configurationDB.images.poster_sizes[4]}${infoMovie?.backdrop_path?infoMovie.backdrop_path:infoMovie?.poster_path}`}
          alt={infoMovie?.title ? infoMovie.title : infoMovie.name}
        />
        <div className="controller">
          <div className="text">
            <span>{infoMovie?.title ? infoMovie.title : infoMovie.name}</span>
          </div>
          <div className="icons">
            <div className="leftIcon">
              {" "}
              <Button onClick={handleWatch} startIcon={<PlayArrow />}>Play</Button>{" "}
              <IconButton>
                <Add />
              </IconButton>
              <IconButton>
                <ThumbUp />
              </IconButton>
            </div>
            <div className="right">
              <IconButton onClick={() => setMute(!mute)}>
                {mute ? <VolumeOff /> : <VolumeUp />}
              </IconButton>
            </div>
          </div>
        </div>
        <div className="closeIcon">
          <IconButton onClick={showHideModal}>
            <Close />
          </IconButton>
        </div>
        <Details />
      </div>
    </div>
  );
};

export default VideoContent;
