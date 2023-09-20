import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { useGlobalAuthContext } from "../../context/auth/Authcontext";
import InvokeAPI from "../../utils/axiosSetup";
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
  const { user, setUser, LoginEvent } = useGlobalAuthContext();
  let navigate = useNavigate();
  const [showpassword, setShowpassword] = useState(false);
  const initialValues = {
    password: "",
    email: "",
  };
  const userSchema = object().shape({
    password: string()
      .required("Your password must contain between 4 and 60 characters.")
      .matches(regSmallChar, "Password must have a small letter")
      .matches(regCapitalchar, "Password must have a capital letter")
      .matches(regNumber, "Password must have a number")
      .matches(regspecialChar, "Password must have a special character")
      .min(4, ({ min }) => `Password must be at least ${min} characters`),
    email: string()
      .matches(regEmail, "Email Address is not Valid")
      .email()
      .required("Please enter a valid email address or phone number."),
  });

  const handleFormSubmit = async (values) => {
    console.log(values);

    // console.log(login);
    LoginEvent(values.email, values.password);
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
      <div className="container">{loginForm()}</div>
    </div>
  );

  function loginForm() {
    return (
      <div className="form-login-page">
      <Typography component={'h1'} fontSize={'32px'} fontWeight={'600'}>
        Login
      </Typography>
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
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Email or phone number"
                name="email"
                autoComplete="email"
                autoFocus
                label="Email or phone number"
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
                label="Password"
                error={!!touched.password && !!errors.password}
                // @ts-ignore
                helperText={touched.password && errors.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, p: "10px 0", mb: 2 }}
              >
                Sign In
              </Button>
              <Box display={'flex'} justifyContent={'space-between'} mt={'-10px'} alignItems={'center'}>
                <FormControlLabel
                  sx={{ fontSize: "13px",
                        "&>.MuiFormControlLabel-label": { fontSize: "13px" }, }}
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      sx={{
                        fontSize: "13px"
                      }}
                    />
                  }
                  label="Remember me"
                />
                <Typography fontSize={"13px"}> Need help? </Typography>
              </Box>
            </Box>
          )}
        </Formik>
        <Box
          sx={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <span>
            New to Netflix?{" "}
            <Link
              style={{ marginLeft: "10px", color: "#fff", fontWeight: "bold" }}
              to={"/"}
            >
              Sign up now.
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b style={{cursor:'pointer'}}>Learn more</b>.
          </small>
        </Box>
      </div>
    );
  }
};

export default Login;
