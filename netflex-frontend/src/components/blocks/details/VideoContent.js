import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

// import { useGlobalAppContext } from "@/context/context";
import { configurationDB } from "@/assets/data";
import { MdPlayArrow } from "react-icons/md";
import { Button, IconButton } from "@mui/material";
import {
  Add,
  Close,
  ThumbUp,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { usePathname } from "next/navigation";
import Details from "./Details";

const VideoContent = (props) => {
  const pathname = usePathname();
  const [youtube, setyYutube] = useState("");
  // const [post, setPost] = useState(false);

  const data =props.data
console.log(props);

  const [mute, setMute] = useState(false);

  const handleWatch = () => {
    //  setIsHovered(!isHovered)
    // navigate(`/watch/${infoMovie.id}`);
    // console.log(navigate);
  };


  
  return (
    <div className="VideoContent">
      <div className="h-[575px] relative bg-gradient-to-t from-black/20 via-transparent to-black">
        {data ? (
          <ReactPlayer
            width={"100%"}
            className="  [&_video]:object-cover [&_.ytp-show-cards-title]:hidden bg-black"
            height="100%"
            url={`https://www.youtube.com/watch?v=${props.videos.results[0].key}`}
            controls
            loop
            volume={1}
            progressInterval={500}
            muted={false}
            playing={true}
          />
        ) : (
         
          <img
            src={`${configurationDB.images.base_url}/${
              data.backdrop_path
                ? configurationDB.images.backdrop_sizes[2]
                : configurationDB.images.poster_sizes[4]
            }${
              data?.backdrop_path
                ? data.backdrop_path
                : data?.poster_path
            }`}
            alt={data?.title ? data.title : data.name}
          />
        )}
        <div></div>

        <div className="controller absolute top-[50%] px-10  text-white w-full mx-auto bg-gradient-to-t from-black/50 via-transparent to-black/10">
          <div className=" text-2xl">
            <span>{data?.title ? data.title : data.name}</span>
          </div>
          <div className="icons flex mt-5 justify-between w-full [&_.MuiIconButton-root]:!text-gray-400 [&_.MuiIconButton-root]:!bg-black/65 hover:[&_.MuiIconButton-root]:!border-gray-200 hover:[&_.MuiIconButton-root]:!text-gray-50 [&_.MuiIconButton-root]:!border">
            <div className="flex gap-3 items-start ">
             
              <Button onClick={handleWatch} className="px-4 py-1 !bg-gray-200 !text-gray-950" startIcon={<MdPlayArrow />}>
                Play
              </Button>
              <IconButton className="   ">
                <Add />
              </IconButton>
              <IconButton className=" ">
                <ThumbUp />
              </IconButton>
            </div>
            <div className="right">
              <IconButton onClick={() => setMute(!mute)}>
                {mute ? <VolumeOff /> : <VolumeUp />}
              </IconButton>
            </div>
          </div>
        </div>
        <div className="closeIcon">
          <IconButton onClick={props.handleClose} >
            <Close />
          </IconButton>
        </div>
        <Details data={props.data} />
      </div>
    </div>
  );
};

export default VideoContent;
