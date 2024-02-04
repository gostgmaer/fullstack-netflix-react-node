"use client"
import { Fragment, useState } from "react";
import VideoContent from "./VideoContent";
import Aboutmovie from "./Aboutmovie";
import MoreList from "./MoreList";
import Episodes from "./Episodes";
const Moviedetails = () => {
const [epi, setepi] = useState();



  return (
    <Fragment>
      <div className="Moviedetails">
        <div className="video">
          <VideoContent />
        </div>
        <div className="contentElements">
          {/* <Details/> */}
          < Episodes/>
          <MoreList />
          <Aboutmovie />
        </div>
      </div>
     
    </Fragment>
  );
};

export default Moviedetails;
