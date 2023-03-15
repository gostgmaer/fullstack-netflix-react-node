import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { useGlobalAuthContext } from "../../context/auth/Authcontext";
import {
  regCapitalchar,
  regEmail,
  regNumber,
  regSmallChar,
  regspecialChar,
} from "../../utils/Regex/ValidationRegex";
import "./style.scss";
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const {  user, setUser,LoginEvent } = useGlobalAuthContext();
  let navigate = useNavigate();
  const [showpassword, setShowpassword] = useState(false);
  const initialValues = {
    password: "",
    email: "",
  };
  const userSchema = object().shape({
    password: string()
      .required("Password is required")
      .matches(regSmallChar, "Password must have a small letter")
      .matches(regCapitalchar, "Password must have a capital letter")
      .matches(regNumber, "Password must have a number")
      .matches(regspecialChar, "Password must have a special character")
      .min(8, ({ min }) => `Password must be at least ${min} characters`),
    email: string()
      .matches(regEmail, "Email Address is not Valid")
      .email()
      .required("Email is required"),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
    
    LoginEvent();
    navigate("/");
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
             {/* <input  onBlur={handleBlur}
                onChange={handleChange}
                value={values.password} type="email" placeholder="Email or phone number"  error={!!touched.email && !!errors.email}
                // @ts-ignore
                helperText={touched.email && errors.email} />
              <input type="password" placeholder="Password" /> */}
              {/* <span>
                New to Netflix? <Link to={"/"}>Sign up now.</Link>
              </span>
              <small>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <b>Learn more</b>.
              </small> */}
              <TextField
              
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={!!touched.email && !!errors.email}
                // @ts-ignore
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                type={"password"}
                placeholder={"Password"}
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                // @ts-ignore
                helperText={touched.password && errors.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {/* <form onSubmit={handleSubmit}>
              <h1>Sign In</h1>
              <input type="email" placeholder="Email or phone number" />
              <input type="password" placeholder="Password" />
              <button className="loginButton">Sign In</button>
              <span>
                New to Netflix? <Link to={"/"}>Sign up now.</Link>
              </span>
              <small>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <b>Learn more</b>.
              </small>
            </form> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, p: "8px 0", mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
           
          )}
        </Formik>
       <Box sx={{width:'300px',display:'flex',flexDirection:'column',gap:1}} >
       <span>
                New to Netflix? <Link style={{marginLeft:'10px' ,color:'#fff',fontWeight:'bold' }} to={"/"}>Sign up now.</Link>
              </span>
              <small>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <b>Learn more</b>.
              </small>
       </Box>
      </div>
    </div>
  );
};

export default Login;
