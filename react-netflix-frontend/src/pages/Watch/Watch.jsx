import { ArrowBack, Flag, PlayArrow } from "@mui/icons-material";
import React from "react";
import ReactPlayer from "react-player";
import "mui-player/dist/mui-player.min.css";
import MuiPlayer from "mui-player";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
const Watch = () => {
 
const navigate= useNavigate()

const backhandle =()=>{
    navigate('/home');
    console.log(navigate);
}

  return (
    <div className="Watch">
      <div className="top">
        <div className="topWrapper">
          <div className="back">
            <ArrowBack  onClick={backhandle} />
          </div>
          <div className="flag">
            <Flag></Flag>
          </div>
        </div>
      </div>
      <div className="video">
        <ReactPlayer
          width={"100%"}
          className="react-player"
          height="100vh"
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          controls
          loop
          volume={1}
          progressInterval={500}
          muted={false}
          playing={true}
        />
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Watch;
