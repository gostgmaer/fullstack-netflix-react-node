import React from "react";
import { Box, Typography } from "@mui/material";
import { useGlobalAppContext } from "../../../context/AppGlobalContent";

const Keywords = () => {
  const { searchMovieSerials, searchData, keywordData } = useGlobalAppContext();

  return (
    <div className="Keywords">
      <Typography variant="h5"> Explore Title Related to: </Typography>
      <Box className='itemsKey'>
        <ul>
          {keywordData?.results?.map((item) => (
            <li key={item.id}>{item.name} |</li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default Keywords;
