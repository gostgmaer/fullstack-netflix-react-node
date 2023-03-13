import React from "react";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import ReactPortal from "../../global/Modal/ReactPortal";
import Topbar from "../../global/Topbar";
import Login from "../login";
import "./home.scss";
import { Box } from "@mui/material";
import Featured from "../../components/featured";
import MovieList from "../../components/movieList/MovieList";

const Homepage = () => {
  const { showHideModal } = useGlobalAppContext();
  return (
    <div className="Homepage">
      <Topbar />
      <Featured type={undefined}></Featured>
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
    </div>
  );
};

export default Homepage;
