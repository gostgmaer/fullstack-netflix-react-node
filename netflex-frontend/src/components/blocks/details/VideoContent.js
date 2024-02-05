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


  const [mute, setMute] = useState(false);

  const handleWatch = () => {
    //  setIsHovered(!isHovered)
    // navigate(`/watch/${infoMovie.id}`);
    // console.log(navigate);
  };
  // const getAllRelatedKeyword = async (q) => {
  //   setPost(false);
  //   try {
  //     const res = await InvokeAPI(
  //       `movie/${infoMovie.id}/videos?`,
  //       "get",
  //       {},
  //       {},
  //       {}
  //     );
  //     setyYutube(`https://www.youtube.com/watch?v=${res.results[0].key}`);
  //     setPost(true);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   setPost(false);
  //   getAllRelatedKeyword();

  // }, [infoMovie.id]);


  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="VideoContent">
      <div className="content">
        {data ? (
          <ReactPlayer
            width={"100%"}
            className="react-player"
            height="100%"
            url={trailer}
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

        <div className="controller">
          <div className="text">
            <span>{data?.title ? data.title : data.name}</span>
          </div>
          <div className="icons">
            <div className="leftIcon">
             
              <Button onClick={handleWatch} startIcon={<MdPlayArrow />}>
                Play
              </Button>
              <IconButton>
                <Add />
              </IconButton>
              <IconButton>
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
