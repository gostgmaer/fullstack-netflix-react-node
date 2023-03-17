
import { Fragment, useState } from "react";
import React from "react";
import {
  Add,
  KeyboardArrowDown,
  PlayArrow,
  ThumbUp,
} from "@mui/icons-material";
import { Box, Button, IconButton, Skeleton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import { configurationDB, genres } from "../../assets/mock/movie";
import ReactPortal from "../../global/Modal/ReactPortal";
import Moviedetails from "../Details/Moviedetails";


export default function CartItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const { modal, loader, setModal, showHideModal, getMovieInfo, infoMovie } =
    useGlobalAppContext();

  const navigate = useNavigate();

  const handleWatch = () => {
    //  setIsHovered(!isHovered)
    navigate("/watch");
    // console.log(navigate);
  };

  const handleLike = (e) => {
    console.log(e);
  };
  const MovieInfoget = (id) => {
    showHideModal();
    getMovieInfo(id);
  };

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <Fragment>
      {loader ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <div
          className="listItem"
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={`${configurationDB.images.base_url}/${configurationDB.images.backdrop_sizes[2]}${item.backdrop_path}`}
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
                      <IconButton
                        onClick={() => MovieInfoget(item.id)}
                        sx={{ border: "1px solid grey" }}
                      >
                        <KeyboardArrowDown />
                      </IconButton>
                    </Tooltip>
                  </div>

                  <div className="quality">
                    <span className="match">94% match</span>{" "}
                    <span className="age">U/A {"13+"}</span>{" "}
                    <span>{"2h 12m "}</span> <span className="quality">HD</span>
                  </div>
                  <div className="genres">
                    <span>Genres : </span>
                    <ul>
                      {genres
                        .filter((i) =>
                          item.genre_ids.some((item) => item === i.id)
                        )
                        .map((j) => (
                          <li key={j.id}>{j.name}, </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              {modal && (
                <ReactPortal
                  ClassName={"movieDetails"}
                  ModalContent={Moviedetails}
                  color="#fff"
                />
              )}
            </>
          )}
        </div>
      )}
    </Fragment>
  );
}
