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
import { useLocation, useNavigate, useResolvedPath } from "react-router-dom";
import { language } from "../../assets/mock/staticData";
import { useGlobalAppContext } from "../../context/AppGlobalContent";
import { useGlobalAuthContext } from "../../context/auth/Authcontext";
import "./topbar.scss";
const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isscrolled, setIsscrolled] = useState(false);
  const [scrollStyle, setScrollStyle] = useState(false);
  const [ismovie, setIsmovie] = useState(false);
  const { user, setUser, LoginEvent, logOutEvent } = useGlobalAuthContext();
  const {
    contentType,
    setContentType,
    type,
    setType,
    searchMovieSerials,
    searchData,
    keywordData,
    value,
    setValue,
  } = useGlobalAppContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const location = useLocation();


  const navigate = useNavigate();
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

  const handleNavigationBtn = (params, ttype) => {
    setContentType(params);
    setType(ttype);
  };

  const handleSearch = (e) => {
    setValue(e.target.value);
    navigate("/search");
  
  };

  const homeClick = () => {
    setContentType("movie");
    setType(null);
    navigate("/");
  };

  useEffect(() => {
    if (value) {
      searchMovieSerials(value);
    }
    if (location.pathname.includes('watch')) {
      setIsmovie(true)
    }else{
      setIsmovie(false)
    }
  }, [value,location.pathname]);

  return (
    <div
      className="topbar"
      style={isscrolled ? { backgroundColor: "#0f0f0f" } : {}}
    >
      <div className="topbarContainer">
        <div className="left">
          <img src="./assets/images/Netflix_Logo_PMS.png" alt="" />
          <Box
            className="headerItems"
            sx={{
              "& span": {
                cursor: "pointer",visibility:ismovie?'hidden':'unset'
              },
            }}
          >
            <span onClick={homeClick}>Homepage</span>
            <span onClick={() => handleNavigationBtn("tv", "TV shows")}>
              TV Shows
            </span>
            <span onClick={() => handleNavigationBtn("movie", "movie")}>
              Movies
            </span>
            <span>New & Popular</span>
            <span>My List</span>
          </Box>
        </div>
        <div className="right">
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
                onChange={handleSearch}
                value={value}
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
