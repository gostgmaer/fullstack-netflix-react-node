import {
  ArrowBack,
  ArrowDropDown,
  ArrowDropUp,
  Logout,
  Notifications,
  Person,
  PersonAdd,
  Search,
  Settings,
} from "@mui/icons-material";
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  ListItemIcon,
  Menu,
  MenuItem,
  OutlinedInput,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { language } from "../../assets/mock/staticData";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import { useGlobalAuthContext } from "../../context/auth/Authcontext";
import "./topbar.scss";
const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isscrolled, setIsscrolled] = useState(false);
  const [scrollStyle, setScrollStyle] = useState(false);
  const { user, setUser, LoginEvent, logOutEvent } = useGlobalAuthContext();
  const { contentType, setContentType } = useGlobalAppContext();
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  window.onscroll = () => {
    setIsscrolled(window.pageYOffset >= 50 ? true : false);
    return () => (window.onscroll = null);
  };

  const handleLogoutButton = (second) => {
    logOutEvent();
    handleClose();
  };

  const handleNavigationBtn = (params) => {
    setContentType(params);
  };

  return (
    <div
      className="topbar"
      style={isscrolled ? { backgroundColor: "#0f0f0f" } : {}}
    >
      <div className="topbarContainer">
        <div className="left">
          <img src="./assets/images/Netflix_Logo_PMS.png" alt="" />
          <Box className="headerItems" sx={{'& span':{
            cursor:"pointer"
          }}}>
            <Button>Homepage</Button>
            <span onClick={() => setContentType("tv")}>TV Shows</span>
            <span onClick={() => setContentType("movie")}>Movies</span>
            <span>New & Popular</span>
            <span>My List</span>
          </Box>
          {/* <BottomNavigation
            // sx={{ width: 500 }}
            sx={{bgcolor:'transparent',height:'inherit','& .MuiBottomNavigationAction-label':{color:"white",opacity:0.5}}}
            className="headerItems"
            showLabels
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction showLabel label="Homepage" value="home" />
            <BottomNavigationAction showLabel label="TV Shows" value="tv" />
            <BottomNavigationAction showLabel label="movie" value="Movies" />
            <BottomNavigationAction showLabel label="New & Popular" value="newPopular" />
            <BottomNavigationAction showLabel label="My List" value="mylist" />
          </BottomNavigation> */}
        </div>
        <div className="right">
          {/* <select defaultValue={"en"} name="language" id="language">
            <option value="0">select language</option>
            {language.map((val) => (
              <option key={val.code} value={val.code}>
                {val.name}
              </option>
            ))}
          </select>
          <Button variant="contained" color="error">
            Sign in
          </Button> */}

          {showSearch ? (
            <FormControl
              sx={{
                m: 0,
                display: "flex",
                color: "#fff",
                bgcolor: "#0f0f0f",
                alignItems: "center",
                flexDirection: "row",
                border: "1.5px solid white",
              }}
            >
              <Search onClick={() => setShowSearch(!showSearch)} />
              <input
                style={{
                  outline: "0",
                  border: "none",
                  color: "#fff",
                  backgroundColor: "#0f0f0f",
                }}
                type="text"
              />
            </FormControl>
          ) : (
            <IconButton
              sx={{ color: "#fff" }}
              onClick={() => setShowSearch(!showSearch)}
            >
              {" "}
              <Search />
            </IconButton>
          )}
          <span>children</span>
          <Notifications />
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography>
                <Person />
              </Typography>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 0, color: "white" }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                {anchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
              </IconButton>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogoutButton}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
