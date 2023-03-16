import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.scss";
import App from "./../../App";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import ReactPortal from "../../global/Modal/ReactPortal";

import Moviedetails from "../Details/Moviedetails";
import InvokeAPI, { cleanQueryparam } from "../../utils/axiosSetup";
import { useGlobalAuthContext } from "../../context/auth/Authcontext";
import { configurationDB } from "../../assets/mock/movie";
import Loading from "../loader/Loading";

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

export const fetchSingle = async (id, store, loading) => {
  const query = { language: "en-US", append_to_response: null };
  cleanQueryparam(query);
  const res = await InvokeAPI(`movie/${id}`, "get", {}, {}, query);
  store(res);
};

export const fetchDiscover = async (store, loading, setFeatureMovie) => {
  console.log(generateRandomInteger(2, 100));
  const query = {
    language: "en-US",
    append_to_response: null,
    page: store.total_pages
      ? generateRandomInteger(2, store.total_pages)
      : generateRandomInteger(2, 100),
  };
  cleanQueryparam(query);
  const res = await InvokeAPI(`discover/movie`, "get", {}, {}, query);
  // const randomElement =
  //   res?.results[Math.floor(Math.random() * res?.results?.length)];
  // console.log(randomElement);
  store(res);
  fetchSingle(
    (res?.results[Math.floor(Math.random() * res?.results?.length)]).id,
    setFeatureMovie
  );
};

const Featured = ({ type }) => {
  const { modal, showHideModal, loader, setLoader,getMovieInfo,infoMovie } = useGlobalAppContext();
  const [featureMovie, setFeatureMovie] = useState(null);
  const [feature, setFeature] = useState(null);

  const handleinfo = (second) => {};
  useEffect(() => {
    try {
      fetchDiscover(setFeature, setLoader, setFeatureMovie);
    } catch (error) {}
  }, []);

  const MovieInfoget = (id) => { 
    showHideModal()
    getMovieInfo(id)
   }

  return (
    <Box sx={{ position: "relative" }} className="Featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
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
        <Typography variant="h2">{featureMovie?.title}</Typography>

        <span className="desc">{featureMovie?.overview}</span>
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
            onClick={()=>MovieInfoget(featureMovie.id)}
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
          <Loading/>
          {modal && (
            <ReactPortal
              ClassName={"movieInfo"}
              ModalContent={Moviedetails}
              color={"#fff"}
            />
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Featured;
