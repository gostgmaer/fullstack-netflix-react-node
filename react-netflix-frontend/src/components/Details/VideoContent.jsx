import {
  Add,
  Close,
  PlayArrow,
  ThumbUp,
  VolumeMute,
  VolumeUp,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import "./style.scss";
const VideoContent = () => {

    const { modal, showHideModal } = useGlobalAppContext();
    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="VideoContent">
      <div className="content">
     <img src="./assets/images/modalImg.webp" alt="" />
        <div className="controller">
          <div className="text">
            <span>The</span> <span>Walking Dead</span>
          </div>
          <div className="icons">
            <div className="leftIcon">
              {" "}
              <Button startIcon={<PlayArrow />}>Play</Button>{" "}
              <IconButton>
                <Add />
              </IconButton>
              <IconButton>
                <ThumbUp />
              </IconButton>
            </div>
            <div className="right">
              <IconButton>
                <VolumeMute />
              </IconButton>
              <IconButton>
                <VolumeUp />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="closeIcon">
          <IconButton onClick={showHideModal}>
            <Close />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
