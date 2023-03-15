import "./styles.scss";

import { useState } from "react";
import React from "react";
import {
  Add,
  ArrowDropDown,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "../../../../context/AppGlobalContent";
import ReactPortal from "../../../../global/Modal/ReactPortal";
import Moviedetails from "../../../Details/Moviedetails";
import ReactPlayer from "react-player";

export default function MovieListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { modal, showHideModal } = useGlobalAppContext()

  const navigate = useNavigate();

  const handleWatch = () => {
  //  setIsHovered(!isHovered)
   // navigate("/watch");
    // console.log(navigate);
  };

const handleModalOpen = (second) => { 
  showHideModal()
  setIsHovered(false)
 }

  const handleLike = (e) => {
    console.log(e);
  };
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
     onMouseEnter={() => setIsHovered(true)}
      onClick={handleWatch}
   onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          {/* <ReactPlayer
            className="react-player"
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            loop
            volume={1}
            progressInterval={500}
            muted={false}
            playing={true}
          /> */}
          <div className="itemInfo">
            <div className="infoWrapper">
              <div className="icons">
                <Box className="leftIcon">
                  <IconButton onClick={handleWatch}>
                    <PlayArrow></PlayArrow>
                  </IconButton>
                  <IconButton>
                    <Add></Add>
                  </IconButton>
                  <IconButton onClick={handleLike}>
                    <ThumbUp></ThumbUp>
                  </IconButton>
                </Box>
                <Tooltip title="Add" placement="top-start" arrow>
                <IconButton onClick={showHideModal} sx={{ border: "1px solid grey" }}>
                  <ArrowDropDown />
                  {modal&& <ReactPortal ClassName={'movieDetails'} ModalContent={Moviedetails} color='#fff'  />}
                </IconButton>
                </Tooltip>
               
                
              
              </div>

              <div className="quality">
                <span className="match">94% match</span>{" "}
                <span className="age">U/A {"13+"}</span>{" "}
                <span>{"2h 12m "}</span> <span className="quality">HD</span>
              </div>
              <div className="reasons">
                <span>gore</span>.<span>violence</span>.<span>gaming</span>
              </div>
            </div>
          </div>
        </>
      )}


    
    </div>
  );
}
