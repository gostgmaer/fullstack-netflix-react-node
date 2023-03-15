import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import "./style.scss";
import App from "./../../App";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import ReactPortal from "../../global/Modal/ReactPortal";

import Moviedetails from "../Details/Moviedetails";
const Featured = ({type}) => {
  const { modal, showHideModal } = useGlobalAppContext()

const handleinfo = (second) => { 
  
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
        src="./assets/images/startreknew.webp"
        alt=""
      />
      <Box className="info" sx={{ position: "absolute" }}>
        <img className="movieLogo" src="./assets/images/startrek.webp" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
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
          <Button onClick={showHideModal}
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
          {modal && <ReactPortal ClassName={'movieInfo'} ModalContent={Moviedetails} color={'#fff'} />}
        </Stack>
      </Box>
    </Box>
  );
};

export default Featured;
