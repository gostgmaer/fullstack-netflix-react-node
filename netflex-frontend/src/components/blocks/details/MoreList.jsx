import Moviecard from "@/components/global/blocks/cards/movieCard";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import React, { useState } from "react";

const MoreList = (props) => {
  console.log(props);
  const [expandeValue, setExpandeValue] = useState(9);
const similar ={}
  const getUniqueBy = (arr, prop) => {
    const set = new Set();
    return arr?.filter((o) => !set.has(o[prop]) && set.add(o[prop]));
  };

  const setExpandeValueNine = (params) => {
    setExpandeValue(9)
  }
  const setExpandeValueMore = (params) => {
    setExpandeValue(18)
  }
 
  return (
    <div className="MoreList">
      <div className="title">
        <h3>More like this: </h3>
      </div>
      <div className="grid grid-cols-3 gap-2">


        {getUniqueBy(props?.data.results, "id")?.filter(item=>item.backdrop_path || item.poster_path)?.slice(0, expandeValue).map((item) => (
          <Moviecard key={item.id} data={item} />
        ))}
      </div>
      <div className="loadmoreless">
        <Divider></Divider>
        <div className="arrowBtn">
          {" "}
          {expandeValue === 9 ? (
            <IconButton onClick={setExpandeValueMore}>
              <KeyboardArrowDown />
            </IconButton>
          ) : (
            <IconButton onClick={setExpandeValueNine}>
              <KeyboardArrowUp />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreList;
