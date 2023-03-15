import React from "react";
import { singleMovie } from "../../assets/mock/movie";
import { string } from "yup";

const Aboutmovie = () => {
  return (
    <div className="Aboutmovie">
      <div className="title">
        <h3>About {singleMovie.title}</h3>
      </div>
      <div className="contentDetails">
        {" "}
        <div className="director">
          <span>Director:</span>
        </div>
        <div className="cast">
          <span>Cast : </span>
          <ul>
            {singleMovie.genres.map((item) => (
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
