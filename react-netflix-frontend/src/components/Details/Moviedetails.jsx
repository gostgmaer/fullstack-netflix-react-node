import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import Loading from "../loader/Loading";
import Aboutmovie from "./Aboutmovie";
import Details from "./Details";
import Episodes from "./Episodes";
import MoreList from "./MoreList";
import "./style.scss";
import VideoContent from "./VideoContent";

const Moviedetails = () => {
  const {similar, episode, infoMovie, setSeriesEpisods, getAllEpisode, seriesEpisods } = useGlobalAppContext();
  const id =  useParams().id
const [epi, setepi] = useState();



  return (
    <Fragment>
      <div className="Moviedetails">
        <div className="video">
          <VideoContent />
        </div>
        <div className="contentElements">
          {/* <Details/> */}
          {episode && < Episodes/>}
         {similar?.results?.length!==0 && <MoreList />}
          <Aboutmovie />
        </div>
      </div>
     
    </Fragment>
  );
};

export default Moviedetails;
