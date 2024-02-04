// import {
//   ArrowBack,
//   ArrowBackIos,
//   ArrowForward,
//   ArrowForwardIos,
// } from "@mui/icons-material";
// import {
//   Box,
//   colors,
//   Grid,
//   IconButton,
//   Paper,
//   Skeleton,
//   styled,
// } from "@mui/material";
// import React, { Fragment, useRef, useState } from "react";
// import { useGlobalAppContext } from "../../context/AppGlobalContent";
// import CartItem from "../CardItem/CartItem";

// import "./styles.scss";
// const CartItemList = () => {
//   const { searchMovieSerials, searchData, keywordData } = useGlobalAppContext();

//   const listref = useRef(null);
//   const [slideNumber, setSlideNumber] = useState(0);
//   const [ismoved, setIsmoved] = useState(false);

//   return (
//     // <Grid container spacing={0.5} sx={{justifyContent:"space-between",gap:1}} >
//     //   {searchData?.results?.slice(0, 20)?.map((item, index) => (
//     //     <CartItem key={item.id} item={item} index={index} />
//     //   ))}
//     // </Grid>
//     <Grid
//       // container
//       // spacing={{ xs: 1, md: 3 }}
//       width="100% !important"
//       margin={"0 !important"}
//       justifyContent="space-between"
//       // columns={{ xs: 4, sm: 8, md: 12 }}
//       container
//       spacing={2}
//       columns={15.5}
//       gap="5px"
//     >
//       <Fragment>
//         {searchData?.results
//           ? searchData?.results
//               ?.filter((item) => item.backdrop_path || item.poster_path)
//               ?.map((data, index) => (
              
//                   <CartItem item={data} index={index} />
           
//               ))
//           : Array.from(Array(10).keys()).map((item) => (
//             <Grid xs={3}    key={item} >
//             <Skeleton
              
//                 variant="rectangular"
//                 width={210}
//                 height={118}
//               />
//             </Grid>
//             ))}
//       </Fragment>
//     </Grid>
//   );
// };

// export default CartItemList;
