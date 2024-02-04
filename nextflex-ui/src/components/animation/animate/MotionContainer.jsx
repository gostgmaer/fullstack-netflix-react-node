import { motion } from "framer-motion";

import { varWrapBoth } from "./variants/Wrap";
import React from "react";
import { Box } from "@mui/material";



export default function MotionContainer({
  open,
  children,
  ...other
}) {
  return (
    <Box className="newClassd"
      initial={false}
      variants={varWrapBoth}
      component={motion.div}
      animate={open ? "animate" : "exit"}
      {...other}
    >
      {children}
    </Box>
  );
}
