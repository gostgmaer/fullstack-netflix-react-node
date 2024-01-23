import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import "./style.scss";
import App from "./../../App";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import ReactPortal from "../../global/Modal/ReactPortal";

import Moviedetails from "../Details/Moviedetails";
import InvokeAPI, { cleanQueryparam } from "../../utils/axiosSetup";
import { useGlobalAuthContext } from "../../context/auth/Authcontext";
import { configurationDB } from "../../assets/mock/movie";
import Loading from "../loader/Loading";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const {
    contentType,
    setContentType,
    modal,
    showHideModal,
    loader,
    setLoader,
    getMovieInfo,
    featureMovie,
    fetchDiscover,
    fetchSingle,
    infoMovie,type, setType
  } = useGlobalAppContext();

  const [feature, setFeature] = useState(null);
  const navigate = useNavigate();

  const handleWatch = () => {
    //  setIsHovered(!isHovered)
    navigate(`/watch/${featureMovie.id}`);
    // console.log(navigate);
  };

  useEffect(() => {
    fetchDiscover();
  }, [contentType]);

  const MovieInfoget = (id) => {
    showHideModal();
    getMovieInfo(id);
  };

  return (
    <Fragment>
      {loader ? (
        <Skeleton
          sx={{ height: "90vh" }}
          animation="wave"
          variant="rectangular"
        />
      ) : (
        <Box sx={{ position: "relative" }} className="Featured p-2" >
          {type && (
            <div className="category" style={{zIndex:101}}>
              <span>{type === "movie" ? "Movies" : "Tv Shows"}</span>
              <select name="genre" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
              </select>
            </div>
          )}
          <img
            className="heroimage"
            src={`${configurationDB.images.base_url}/${configurationDB.images.backdrop_sizes[3]}${featureMovie?.backdrop_path}`}
            alt=""
          />
          <Box className="info" sx={{ position: "absolute" }}>
            <Typography variant="h2">
              {featureMovie?.title ? featureMovie.title : featureMovie?.name}
            </Typography>

            {featureMovie?.overview && (
              <span className="desc">{`${featureMovie?.overview.substring(
                0,
                140
              )}...`}</span>
            )}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                "&MuiButton-contained": {
                  fontWeight: 500,
                  fontSize: "1rem",
                },
              }}
            >
              <Button
                onClick={handleWatch}
                sx={{
                  backgroundColor: " white",
                  color: "black",
                  fontWeight: 500,
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: " white",
                    color: "black",
                  },
                }}
                variant="contained"
                startIcon={<PlayArrow />}
              >
                Play
              </Button>
              <Button
                onClick={() => MovieInfoget(featureMovie.id)}
                sx={{
                  backgroundColor: "rgba(109, 109, 110, 0.7)",
                  color: "white",
                  fontWeight: 500,
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "rgba(109, 109, 110, 0.7)",
                    color: "white",
                  },
                }}
                variant="contained"
                startIcon={<InfoOutlined />}
              >
                More Info
              </Button>
            </Stack>
          </Box>
          {modal && (
            <ReactPortal
              ClassName={"movieInfo"}
              ModalContent={Moviedetails}
              color={"#fff"}
            />
          )}
        </Box>
      )}
    </Fragment>
  );
};

export default Featured;
