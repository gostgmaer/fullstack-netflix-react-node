// import { Fragment, useState } from "react";
// import "./style.scss";
// import React from "react";
// import {
//   Add,
//   KeyboardArrowDown,
//   PlayArrow,
//   ThumbUp,
// } from "@mui/icons-material";
// import {
//   Box,
//   Button,
//   Grid,
//   IconButton,
//   Paper,
//   Skeleton,
//   styled,
//   Tooltip,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useGlobalAppContext } from "../../context/AppGlobalContent";
// import { configurationDB, genres } from "../../assets/mock/movie";
// import ReactPortal from "../../global/Modal/ReactPortal";
// import Moviedetails from "../Details/Moviedetails";

// export default function CartItem({ index, item }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const { modal, loader, setModal, showHideModal, getMovieInfo, infoMovie } =
//     useGlobalAppContext();

//   const navigate = useNavigate();

//   const handleWatch = () => {
//     //  setIsHovered(!isHovered)
//     navigate("/watch");
//     // console.log(navigate);
//   };

//   const handleLike = (e) => {
//     console.log(e);
//   };
//   const MovieInfoget = (id) => {
//     showHideModal();
//     getMovieInfo(id);
//   };
//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(0),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   }));

//   const trailer =
//     "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
//   return (
//     <Fragment>
//       <Grid    onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)} xs={3} key={index}>
//         {loader ? (
//           <Skeleton
//             sx={{ height: 220 }}
//             animation="wave"
//             variant="rectangular"
//           />
//         ) : (
//           <Item
//             className="CardItem"
//             style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
         
//           >
//             <img
//               src={`${configurationDB.images.base_url}/${
//                 item.backdrop_path
//                   ? configurationDB.images.backdrop_sizes[2]
//                   : configurationDB.images.poster_sizes[4]
//               }${item?.backdrop_path ? item.backdrop_path : item.poster_path}`}
//               alt=""
//             />
//             {isHovered && (
//               <>
//                 <video src={trailer} autoPlay={true} loop />

//                 <div className="itemInfo">
//                   <div className="infoWrapper">
//                     <div className="icons">
//                       <Box className="leftIcon">
//                         <IconButton onClick={handleWatch}>
//                           <PlayArrow></PlayArrow>
//                         </IconButton>
//                         <IconButton>
//                           <Add></Add>
//                         </IconButton>
//                         <IconButton onClick={handleLike}>
//                           <ThumbUp></ThumbUp>
//                         </IconButton>
//                       </Box>
//                       <Tooltip title="Add" placement="top-start" arrow>
//                         <IconButton
//                           onClick={() => MovieInfoget(item?.id)}
//                           sx={{ border: "1px solid grey" }}
//                         >
//                           <KeyboardArrowDown />
//                         </IconButton>
//                       </Tooltip>
//                     </div>

//                     <div className="quality">
//                       <span className="match">94% match</span>{" "}
//                       <span className="age">U/A {"13+"}</span>{" "}
//                       <span>{"2h 12m "}</span>{" "}
//                       <span className="quality">HD</span>
//                     </div>
//                     <div className="genres">
//                       <span>Genres : </span>
//                       <ul>
//                         {genres
//                           .filter((i) =>
//                             item?.genre_ids?.some((item) => item === i.id)
//                           )
//                           .map((j) => (
//                             <li key={j.id}>{j.name}, </li>
//                           ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </Item>
//         )}
//       </Grid>
//       {modal && (
//         <ReactPortal
//           ClassName={"movieDetails"}
//           ModalContent={Moviedetails}
//           color="#fff"
//         />
//       )}
//     </Fragment>
//   );
// }
