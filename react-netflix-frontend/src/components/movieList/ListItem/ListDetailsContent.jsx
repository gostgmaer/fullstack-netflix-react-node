import { Add, ArrowDropDown, PlayArrow, ThumbUp, VolumeUpOutlined } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React, { Fragment } from 'react'

const ListDetailsContent = ({openModal}) => {
  return (
    <Fragment>
    <Box className="content">
      <div className="contentWrapper">
        <img src="./assets/images/boxshot.png" alt="" />
        {openModal && (
          <div className="imageOverlay">
            {/* <img width={80} height={30} src="" alt="" className="logo" /> */}
            <span>Logo</span>
            <div className="sounds">
              <IconButton>
                {" "}
                <VolumeUpOutlined></VolumeUpOutlined>
              </IconButton>
            </div>
          </div>
        )}
      </div>
    </Box>
    <div className="itemInfo">
      <div className="infoWrapper">
        <div className="icons">
          <Box className="leftIcon">
            <IconButton>
              <PlayArrow></PlayArrow>
            </IconButton>
            <IconButton>
              <Add></Add>
            </IconButton>
            <IconButton>
              <ThumbUp></ThumbUp>
            </IconButton>
          </Box>
          <IconButton sx={{ border: "1px solid grey" }}>
            <ArrowDropDown />
          </IconButton>
        </div>

        <div className="quality">
          <span className="match">94% match</span>{" "}
          <span className="age">U/A {"13+"}</span> <span>{"2h 12m "}</span>{" "}
          <span className="quality">HD</span>
        </div>
        <div className="reasons">
          <span>gore</span>
          <span>violence</span>
          <span>gaming</span>
        </div>
      </div>
    </div>
  </Fragment>
  )
}

export default ListDetailsContent