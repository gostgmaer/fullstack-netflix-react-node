import React, { Fragment } from "react";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import Loading from "../loader/Loading";
import Aboutmovie from "./Aboutmovie";
import Details from "./Details";
import MoreList from "./MoreList";
import "./style.scss";
import VideoContent from "./VideoContent";

const Moviedetails = () => {
  const { loader } = useGlobalAppContext();

  return (
   <Fragment>
     <div className="Moviedetails">
      <div className="video">
        <VideoContent />
      </div>
      <div className="contentElements">
        {/* <Details/> */}
        <MoreList />
        <Aboutmovie />
      </div>
    </div>{loader && <Loading/>} 
   </Fragment>
  );
};

export default Moviedetails;
