import React from "react";
import { singleMovie } from "../../assets/mock/movie";
import { string } from "yup";
import { useGlobalAppContext } from "../../context/AppGlobalContent";

const Aboutmovie = () => {
  const {getMovieInfo,infoMovie,similar,credits}=useGlobalAppContext()
  return (
    <div className="Aboutmovie">
      <div className="title">
        <h3>About {infoMovie?.title}</h3>
      </div>
      <div className="contentDetails">
        {" "}
        <div className="director">
          <span>Director:</span>
        </div>
        <div className="cast">
          <span>Cast: </span>
          <ul>
          {(credits?.cast?.sort((a, b) => b.popularity - a.popularity))?.slice(0,10)?.map((item) => (
              <li key={item.id}>{item.name}, </li>
            ))}
          </ul>
        </div>
        <div className="writter">
          <span>Writer : </span>
          <ul>
            {singleMovie.genres.map((item) => (
              <li key={item.id}>{item.name}, </li>
            ))}
          </ul>
        </div>
        <div className="genres">
          <span>Genres : </span>
          <ul>
            {singleMovie.genres.map((item) => (
              <li key={item.id}>{item.name}, </li>
            ))}
          </ul>
        </div>
        <div className="exciting">
          <span>Genres : </span>
          <ul>
            {singleMovie.genres.map((item) => (
              <li key={item.id}>{item.name}, </li>
            ))}
          </ul>
        </div>
        <div className="maturityrting"></div>
      </div>
    </div>
  );
};

export default Aboutmovie;
