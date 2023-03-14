import React, { Fragment, useState } from "react";
import "./styles.scss";
import { Avatar, Box, IconButton } from "@mui/material";
import {
  Add,
  ArrowDropDown,
  HdrPlus,
  PlayArrow,
  ThumbUp,
  VolumeUpOutlined,
} from "@mui/icons-material";
import ReactPortal from "../../../global/Modal/ReactPortal";
import ItemCard from "../../itemCard/Itemcard";
import { useGlobalAppContext } from "../../../context/AppGlobalContent";
import ListDetailsContent from "./ListDetailsContent";
const Listitem = () => {
  const [openModal, setOpenModal] = useState(false);
  const { modal, showHideModal } = useGlobalAppContext();
  const handleMouseHover = (second) => {
    console.log(second);
    setOpenModal(!openModal);
  };

  const SingleImage = () => {
    return (
      <Box className="content">
        <div className="contentWrapper">
          <img src="./assets/images/boxshot.png" alt="" />
        </div>
      </Box>
    );
    }
    return (
      <div style={openModal ? { transform: 'translateY(-16%) translateX(0px)', width: '320px',
      height: '280px',
     
      top: '0',
      bottom: '0',
    }:{}}
        onClick={handleMouseHover}
       
        className="Listitem"
      >
       <div  className="contentBlock">
       {openModal ? <ListDetailsContent openModal={openModal}></ListDetailsContent> : <SingleImage/>}
       </div>
      </div>
    );
  
};

export default Listitem;
