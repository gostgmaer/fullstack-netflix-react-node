import {
  ArrowBack,
  ArrowBackIos,
  ArrowForward,
  ArrowForwardIos,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import Listitem from "./ListItem/Listitem";
import "./styles.scss";
const MovieList = () => {
  return (
    <div className="movieList">
      <span className="listTitle">Continue to Watch</span>
      <div className="listWrapper">
        <Box className="items" sx={{ display: "flex", gap: "5px" }}>
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem /> <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem /> <Listitem />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            "& .MuiIconButton-root": {
              // color:'white !important',
              borderRadius: "0",
              backgroundColor: "#00000024",
              height: "100%",
              "& .MuiSvgIcon-root": {
                width: "30px",
                height: "30px",
                display: "none",
               
              },
              "&:hover": {
                color: "white !important",
                "& .MuiSvgIcon-root": {
               
                display: "block",
               
              },
              },
            },
          }}
          className="arrowkey"
        >
          <IconButton>
            <ArrowBackIos />
          </IconButton>
          <IconButton>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default MovieList;
