import { ArrowBack, Flag, PlayArrow } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "mui-player/dist/mui-player.min.css";
import MuiPlayer from "mui-player";
import "./styles.scss";
import { useNavigate,useParams } from "react-router-dom";
import InvokeAPI, { cleanQueryparam } from "../../utils/axiosSetup";
const Watch = () => {
  const [video, setvideo] = useState(null);
  const [key, setKey] = useState('');
  const [youtube, setyYutube] = useState('');
 
const navigate= useNavigate()
const id = useParams().id

const getAllRelatedKeyword = async () => {
  try {
    const res = await InvokeAPI(`movie/${id}/videos?language=en-US`, "get", {}, {},{});
    setvideo(res);
    setyYutube(`https://www.youtube.com/watch?v=${res.results[0].key}`)
  } catch (error) {
    
  }

};
useEffect(() => {
  getAllRelatedKeyword()
}, []);

const backhandle =()=>{
    navigate('/');
  
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
          url={youtube}
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
