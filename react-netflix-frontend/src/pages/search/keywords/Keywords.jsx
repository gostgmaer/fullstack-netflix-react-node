// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { useGlobalAppContext } from "../../../context/AppGlobalContent";

// const Keywords = () => {
//   const {  contentType,
//     setContentType,
//     type,
//     setType,
//     searchMovieSerials,
//     searchData,
//     keywordData,
//     value,
//     setValue, } = useGlobalAppContext();



//   return (
//     <div className="Keywords">
//       <Typography variant="h5"> Explore Title Related to: </Typography>
//       <Box className='itemsKey'>
//         <ul>
//           {keywordData?.results?.map((item) => (
//             <li onClick={()=>setValue(item.name)} key={item.id}>{item.name} |</li>
//           ))}
//         </ul>
//       </Box>
//     </div>
//   );
// };

// export default Keywords;
