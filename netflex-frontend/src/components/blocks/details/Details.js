
import { millisecondsToStr } from "@/helper/services";
import { MessageOutlined } from "@mui/icons-material";
import { Button, IconButton, Tooltip } from "@mui/material";
import moment from "moment";
import React from "react";

const Details = (props) => {

  console.log(props);

  return (
    <div className="flex px-10 gap-5 bg-black/95 mt-5 shadow-[5xl] py-12  justify-between items-start  bg-gradient-to-t from-transparent via-transparent to-black/10 ">
      <div className="left flex-1">
        <div className="matches flex gap-2 items-center justify-start font-semibold ">
          <span className=" text-green-700">{props.data.popularity.toFixed(0)}% Popular</span>
          <span className="text-gray-100">{moment(props.data?.release_date?props.data?.release_date:props.data?.first_air_date).format("YYYY")}</span>
        
          <span>{props.data?.runtime?millisecondsToStr(props.data?.runtime * 60 * 1000):`${props.data?.number_of_seasons} Session`}</span>
          <span className="quality px-1 py-[2px] border border-white">HD</span>
          <Tooltip
            sx={{
              color: "white",
              "&.MuiTooltip-tooltip": { backgroundColor: "red" },
            }}
            title="Add"
            placement="top-start"
          >
            <IconButton>
          
              <MessageOutlined />
            </IconButton>
          </Tooltip>
        </div>
        <div className="matches flex gap-2 items-center justify-start font-semibold my-1">
         
         <span className="age px-1 py-[2px] border border-white">U/A {props.data.adult ?'16+':'13'}</span>
          
        
        </div>
        <div className="description">
          {`${props.data?.overview.substring(0, 220)}...`}
        </div>
      </div>
      <div className="right flex-1 [&_.title]:text-md [&_.title]:text-gray-500">
        <div className="flex gap-2">
          <span className="title">Cast: </span>
          <ul className="flex justify-start items-center gap-1 flex-wrap">
          {props.credits?.cast
                ?.sort((a, b) => b.popularity - a.popularity)
                ?.slice(0, 5)
                ?.map((item) => (
                  <li key={item.id}>{item.name}, </li>
                ))}
          </ul>
        </div>
        <div className="flex gap-2">
          <span className="title">Genres: </span>
          <ul className="flex justify-start items-center gap-1 flex-wrap">
            {props.data?.genres.map((item) => (
              <li key={item.id}>{item.name}, </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2">
          <span className="title">This Movie Is: </span>
         <span>{props.data.tagline}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
