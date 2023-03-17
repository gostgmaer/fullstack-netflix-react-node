import React, { useEffect, useState } from "react";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import ReactPortal from "../../global/Modal/ReactPortal";
import Topbar from "../../global/Topbar";
import Login from "../login";
import "./home.scss";
import { Box } from "@mui/material";
import Featured from "../../components/featured";
import MovieList from "../../components/movieList/MovieList";
import MovieListItem from "../../components/movieList/ListItem/MovieListItem";

const Homepage = () => {
  const {
    getTrendingMovie,
    trending,
    getPlayingNow,
    playingNow,
    getLatestMovie,
    latestMovie,
    getupcomingMovie,
    GetgaterogywiseMovie,
    upcommingMovie,
    getPopularMovie,
    popular,
    getTopRatedMovie,
    topRatedMovie,
    contentType,
    setContentType,
  } = useGlobalAppContext();
  const [action, setAction] = useState(null);
  const [advanture, setAdvanture] = useState(null);
  const [horror, setHorror] = useState(null);
  const [animation, setAnimation] = useState(null);
  const [documentory, setDocumentory] = useState(null);
  const [romance, setRomance] = useState(null);
  const [music, setMusic] = useState(null);

  const calAdvanture = async () => {
    const res = await GetgaterogywiseMovie(12);
    setAdvanture(res);
  };
  const callActionCate = async () => {
    const res = await GetgaterogywiseMovie(28);
    setAction(res);
  };
  const callHorror = async () => {
    const res = await GetgaterogywiseMovie(27);
    setHorror(res);
  };
  const callAnimation = async () => {
    const res = await GetgaterogywiseMovie(16);
    setAnimation(res);
  };
  const callRomance = async () => {
    const res = await GetgaterogywiseMovie(10749);
    setRomance(res);
  };
  const callDocumentory = async () => {
    const res = await GetgaterogywiseMovie(99);
    setDocumentory(res);
  };
  const callMusic = async () => {
    const res = await GetgaterogywiseMovie(10402);
    setMusic(res);
  };


  
  useEffect(() => {
    getTrendingMovie();
    getPlayingNow()
    getLatestMovie();
    getTopRatedMovie();
    getupcomingMovie();
    getPopularMovie();
    callActionCate();
    calAdvanture();
    callAnimation();
    callDocumentory();
    callHorror();
    callMusic();
    callRomance();
  }, [contentType]);

  const { showHideModal } = useGlobalAppContext();
  return (
    <div className="Homepage">
      <Topbar />
      <Featured type={undefined}></Featured>
      {playingNow && (
        <MovieList heading={"Continue to Watch"} data={playingNow} />
      )}
      <MovieList heading={"Trending Now"} data={trending} />
      {latestMovie?.results && (
        <MovieList heading={"Latest on Netflix"} data={latestMovie} />
      )}
      <MovieList heading={"Popular on Netflix"} data={popular} />
      <MovieList heading={"Upcomming Movies"} data={upcommingMovie} />
      <MovieList heading={"Top Rated"} data={topRatedMovie} />
      {action?.results.length !== 0 && (
        <MovieList heading={"Action"} data={action} />
      )}
      {advanture?.results.length !== 0 && (
        <MovieList heading={"Advanture"} data={advanture} />
      )}
      {horror?.results.length !== 0 && (
        <MovieList heading={"Horror"} data={horror} />
      )}
      <MovieList heading={"Romantic"} data={romance} />{" "}
      <MovieList heading={"Documentory"} data={documentory} />{" "}
      <MovieList heading={"Animation"} data={animation} />
      <MovieList heading={"Music"} data={music} />
    </div>
  );
};

export default Homepage;
