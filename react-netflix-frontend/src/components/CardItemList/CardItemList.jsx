import {
  ArrowBack,
  ArrowBackIos,
  ArrowForward,
  ArrowForwardIos,
} from "@mui/icons-material";
import { Box, colors, Grid, IconButton, Paper, styled } from "@mui/material";
import React, { useRef, useState } from "react";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import CartItem from "../CardItem/CartItem";

import "./styles.scss";
const CartItemList = () => {
  const { searchMovieSerials, searchData, keywordData } = useGlobalAppContext();

  const listref = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [ismoved, setIsmoved] = useState(false);



  return (
   
    <Grid container sx={{justifyContent:"space-between",gap:1}} >
      {searchData?.results?.slice(0, 20)?.map((item, index) => (
        <CartItem key={item.id} item={item} index={index} />
      ))}
    </Grid>
  );
};

export default CartItemList;
