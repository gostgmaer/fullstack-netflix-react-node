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
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MovieListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleWatch = () => {
    navigate("/watch");
    console.log(navigate);
  };
  const handleLike = (e) => {
  
    console.log(e);
  };
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)} onClick={handleWatch}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          {/* <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div> */}
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
                <IconButton sx={{ border: "1px solid grey" }}>
                  <ArrowDropDown />
                </IconButton>
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
