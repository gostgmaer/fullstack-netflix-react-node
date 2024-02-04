import { ArrowForwardIos } from "@mui/icons-material";
import {
  Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

import "./style.scss";
const Signup = () => {


  const fields = ["FirstName", "LastName", "PostCode", "Gender"];
  const [searcBy, setSearchBy] = useState("FirstName");
  const [searchText, setSearchText] = useState("");
  return (
    <div className="Signup">
      <div className="bgimg">
        <img
          src="./assets/images/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <div className="top">
          <img src="./assets/images/Netflix_Logo_PMS.png" alt="" />
          <button className="btn login-btn">Login</button>
        </div>
        <div className="container">
          <h2>Unlimited movies, TV shows and more.</h2>
          <h5>Watch anywhere. Cancel anytime.</h5>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form >
          <input type="text" placeholder="Email address" />
          <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
