import { useGlobalAppContext } from "@/context/context";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";
import { keys } from "lodash";
import React, { useEffect, useState } from "react";



const Episodes = () => {
  const {
    episode,
    infoMovie,
    setEpisode,
   
  } = useGlobalAppContext();
  const [episodeData, setEpisodeData] = useState("1");
  const [iscall, setIscall] = useState(false);

  const handleChangeSession = (e) => {
    setEpisodeData(e.target.value);
    setIscall(true);
  };

  // const getAllEpisode = async () => {
  //   try {
  //     const query = { language: "en-US" };
  //     cleanQueryparam(query);
  //     const res = await InvokeAPI(
  //       `tv/${infoMovie?.id}/season/${episodeData}`,
  //       "get",
  //       {},
  //       {},
  //       query
  //     );
  //     setEpisode(res);
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (iscall) {
  //     getAllEpisode();
  //   }
  // }, [Number(episodeData)]);

  // console.log(episode);
  return (
    <div className="Episodes">
      <div className="top">
        <h3>Episodes</h3>{" "}
        <FormControl fullWidth>
          <NativeSelect
          
            value={Number(episodeData)}
            onChange={handleChangeSession}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            {/* {[...Array(infoMovie?.number_of_seasons).keys()].map((item) => {
             
              return (
                <option key={item} value={item + 1}>{`Session ${
                  item + 1
                }`}</option>
              );
            })} */}
          </NativeSelect>
        </FormControl>
      </div>
    </div>
  );
};

export default Episodes;
