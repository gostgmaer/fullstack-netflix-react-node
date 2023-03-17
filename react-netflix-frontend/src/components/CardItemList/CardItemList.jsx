import {
    ArrowBack,
    ArrowBackIos,
    ArrowForward,
    ArrowForwardIos,
  } from "@mui/icons-material";
  import { Box, colors, Grid, IconButton, Paper, styled } from "@mui/material";
  import React, { useRef, useState } from "react";
import CartItem from "../CardItem/CartItem";
  
  import "./styles.scss";
  const CartItemList = ({ heading, data }) => {
    const listref = useRef(null);
    const [slideNumber, setSlideNumber] = useState(0);
    const [ismoved, setIsmoved] = useState(false);
  
    // const handleArrow = (direction) => {
    //   let distance = listref.current.getBoundingClientRect().x - 50;
    //   console.log(distance);
    //   setIsmoved(true);
    //   if (direction === "left" && slideNumber >= 0) {
    //     // setSlideNumber(slideNumber - 1);
    //     listref.current.style.transform = `translateX(${230 + distance}px)`;
    //   }
    //   if (direction === "right" && slideNumber <= 0) {
    //     //  setSlideNumber(slideNumber + 1);
    //     listref.current.style.transform = `translateX(${-230 + distance}px)`;
    //   }
    // };
  
    // const handleClick = (direction) => {
    //   setIsmoved(true);
    //   let distance = listref.current.getBoundingClientRect().x - 50;
    //   if (direction === "left" && slideNumber > 0) {
    //     setSlideNumber(slideNumber - 1);
    //     listref.current.style.transform = `translateX(${230 * 5 + distance}px)`;
    //   }
    //   if (direction === "right" && slideNumber < data?.results?.length / 5 - 1) {
    //     setSlideNumber(slideNumber + 1);
    //     listref.current.style.transform = `translateX(${-230 * 5 + distance}px)`;
    //   }
    // };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  
    return (
      <div className="cartItemList">
      
        {/* <div className="listWrapper">
          <Box
            ref={listref}
            className="items"
            sx={{ display: "flex", gap: "5px" }}
          >
            {data?.results?.slice(0, 20)?.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
          </Box>
  
         
        </div> */}
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={3}>
          <Item>2</Item>
        </Grid>
        <Grid xs={3}>
          <Item>2</Item>
        </Grid>
        <Grid xs={3}>
          <Item>2</Item>
        </Grid>
        <Grid xs={3}>
          <Item>2</Item>
        </Grid>
       
      </Grid>
    </Box>
      </div>
    );
  };
  
  export default CartItemList;
  