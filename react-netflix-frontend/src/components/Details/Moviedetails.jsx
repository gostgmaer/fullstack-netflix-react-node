import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import Loading from "../loader/Loading";
import Aboutmovie from "./Aboutmovie";
import Details from "./Details";
import MoreList from "./MoreList";
import "./style.scss";
import VideoContent from "./VideoContent";

const Moviedetails = () => {
  const {similar } = useGlobalAppContext();
  const id =  useParams().id

  return (
    <Fragment>
      <div className="Moviedetails">
        <div className="video">
          <VideoContent />
        </div>
        <div className="contentElements">
          {/* <Details/> */}
         {similar?.results?.length!==0 && <MoreList />}
          <Aboutmovie />
        </div>
      </div>
     
    </Fragment>
  );
};

export default Moviedetails;
