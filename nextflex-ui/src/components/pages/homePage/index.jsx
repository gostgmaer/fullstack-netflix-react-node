"use client"
import React from "react";
import "./home.scss";
import { useGlobalAppContext } from "@/context/AppGlobalContent";
import Featured from "@/components/featured";
import MovieList from "@/components/movieList/MovieList";



const Homepage = () => {

  const data = [
    { title: 'Title 1', description: 'Description 1' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 3', description: 'Description 3' },
    // Add more items as needed
  ];


  const {

    trending,

    playingNow,

    latestMovie,

    upcommingMovie,

    popular,

    topRatedMovie,

    action,

    advanture,

    horror,

    animation,

    documentory,

    romance,

    music,

  } = useGlobalAppContext();

  const { showHideModal } = useGlobalAppContext();
  return (
    <div className="Homepage p-2">
      <Featured></Featured>
      {/* {playingNow && (
        <MovieList heading={"Continue to Watch"} data={playingNow?.results.filter(item=>item.backdrop_path || item.poster_path)} />
      )} */}
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



