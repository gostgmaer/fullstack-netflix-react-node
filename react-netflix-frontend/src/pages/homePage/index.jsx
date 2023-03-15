import React from "react";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import ReactPortal from "../../global/Modal/ReactPortal";
import Topbar from "../../global/Topbar";
import Login from "../login";
import "./home.scss";
import { Box } from "@mui/material";
import Featured from "../../components/featured";
import MovieList from "../../components/movieList/MovieList";
import MovieListItem from "../../components/movieList/ListItem/MovieListItem";
import {  newObjkeyArray } from "../../assets/mock/movie";

const Homepage = () => {
  console.log(newObjkeyArray);
  const { showHideModal } = useGlobalAppContext();
  return (
    <div className="Homepage">
      <Topbar />
      <Featured type={undefined}></Featured>
      <MovieList heading={"Continue to Watch"} />
      <MovieList heading={"Trending Now"} />
      <MovieList heading={"TV Sci-Fi & Fantasy"} />
      <MovieList heading={"Top Picks for kishor sarkar"} />
      <MovieList heading={"International Movies"} />

      <MovieList heading={"Continue Watching for kishor.sarkar.in"} />
      <MovieList heading={"TBlockbuster Movies"} />
      <MovieList heading={"International TV Shows"} />
      <MovieList heading={"Exciting Movies"} />
      <MovieList heading={"Popular on Netflix"} />
    </div>
  );
};

export default Homepage;
