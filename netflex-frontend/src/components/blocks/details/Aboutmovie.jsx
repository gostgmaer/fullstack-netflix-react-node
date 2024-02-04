import { useGlobalAppContext } from "@/context/context";
import React from "react";

import { string } from "yup";

const Aboutmovie = () => {
  const { getMovieInfo, infoMovie, similar, credits } = useGlobalAppContext();
  return (
    <div className="Aboutmovie">
      <div className="title">
        <h3>About {infoMovie?.title}</h3>
      </div>
      <div className="contentDetails p-5">
        {" "}
        <div className="director">
          <span className=" h1">Director:</span>
          <ul>
            {credits?.crew?.filter(item => item.job === 'Director')?.map((item) => (
              <li key={item.id}>{item.name} </li>
            ))}
          </ul>
        </div>
        <div className="cast">
          <span>Cast: </span>
          <ul>
            {credits?.cast
              ?.sort((a, b) => b.popularity - a.popularity)
              ?.slice(0, 10)
              ?.map((item) => (
                <li key={item.id}>{item.name}, </li>
              ))}
          </ul>
        </div>
        <div className="writter">
          <span>Editor : </span>
          <ul>
            {credits?.crew?.filter(item => item.job === 'Editor')?.map((item) => (
              <li key={item.id}>{item.name} </li>
            ))}
          </ul>
        </div>
        <div className="genres">
          <span>Genres : </span>
          <ul>
            {/* {singleMovie.genres.map((item) => (
              <li key={item.id}>{item.name}, </li>
            ))} */}
          </ul>
        </div>
        <div className="exciting">
          <span>Genres : </span>
          <ul>
            {/* {singleMovie.genres.map((item) => (
              <li key={item.id}>{item.name}, </li>
            ))} */}
          </ul>
        </div>
        <div className="maturityrting"></div>
      </div>
    </div>
  );
};

export default Aboutmovie;
