import "./styles.scss";

import { Fragment, useEffect, useState } from "react";
import React from "react";
import {
  Add,
  KeyboardArrowDown,
  PlayArrow,
  ThumbUp,
} from "@mui/icons-material";
import { Box, Button, IconButton, Skeleton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "../../../../context/AppGlobalContent";
import ReactPortal from "../../../../global/Modal/ReactPortal";
import Moviedetails from "../../../Details/Moviedetails";
import { configurationDB, genres } from "../../../../assets/mock/movie";
import { millisecondsToStr } from "../../../../utils/custom/CustomFunctions";
import InvokeAPI from "../../../../utils/axiosSetup";
import ReactPlayer from "react-player";

export default function MovieListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const { modal, loader, setModal, showHideModal, getMovieInfo } =
    useGlobalAppContext();
    const [video, setvideo] = useState(null);
    const [key, setKey] = useState('');
    const [youtube, setyYutube] = useState('');

  const navigate = useNavigate();

  const getAllRelatedKeyword = async (q) => {
    try {
   
      const res = await InvokeAPI(
        `movie/${item.id}/videos?language=en-US`,
        "get",
        {},
        {},
        {}
      );
      setvideo(res);
    setyYutube(`https://www.youtube.com/watch?v=${res.results[0].key}`)
    } catch (error) {}
  };

  const handleWatch = () => {
    //  setIsHovered(!isHovered)
    navigate(`/watch/${item.id}`);
    // console.log(navigate);
  };

  const handleLike = (e) => {
    console.log(e);
  };
  const MovieInfoget = (id) => {
    showHideModal();
    getMovieInfo(id);
  };
  useEffect(() => {
    if (isHovered === true) {
      getAllRelatedKeyword();
    
    }
  }, [isHovered]);

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
            src={`${configurationDB.images.base_url}/${
              item.backdrop_path
                ? configurationDB.images.backdrop_sizes[2]
                : configurationDB.images.poster_sizes[4]
            }${item?.backdrop_path ? item.backdrop_path : item?.poster_path}`}
            alt=""
          />
          {isHovered && (
            <>
            <ReactPlayer
          width={"100%"}
          className="react-player"
          height="140px"
          url={youtube}
          controls
          loop
          volume={1}
          progressInterval={500}
          muted={false}
          playing={true}
        />
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
                   
                    <span className="quality">HD</span>
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
