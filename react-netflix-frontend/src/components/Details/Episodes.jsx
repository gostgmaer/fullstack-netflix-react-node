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

import { useGlobalAppContext } from "../../context/AppGlobalContent";

const Episodes = () => {
  const { episode, infoMovie, setSeriesEpisods, getAllEpisode, seriesEpisods } =
    useGlobalAppContext();
 const [episodeData, setEpisodeData] = useState('1');
 const [iscall, setIscall] = useState(false);

 const handleChangeSession = (e) => {
  setEpisodeData(e.target.value)
  setIscall(true)
 }
 
    useEffect(() => {
  if (iscall) {
    getAllEpisode(infoMovie?.id,episodeData)
  }
   }, [Number(episodeData)]);

 

  console.log(episode);
  return (
    <div className="Episodes">
      <div className="top">
        <h3>Episodes</h3>{" "}
        <FormControl fullWidth>
          <NativeSelect
            defaultValue={1}
            onChange={handleChangeSession}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            {[...Array(infoMovie?.number_of_seasons).keys()].map((item) => {
              console.log(item);
              return (
                <option key={item} value={item+1}>{`Session ${item+1}`}</option>
              );
            })}
          </NativeSelect>
        </FormControl>
      </div>
    </div>
  );
};

export default Episodes;
