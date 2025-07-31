"use client";
import * as React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { Email } from "@mui/icons-material";
import axios from "axios";
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUserToken } from "@/lib/redux/authSlice";
import  Cookies  from "js-cookie";


export default function Loginform() {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch()

  const router = useRouter()

  function handelSubmit(values: FormValuesType) {
    console.log(values);
    axios
      .post<LoginResponseType >("https://linked-posts.routemisr.com/users/signin", values)
      .then((res) => {
        console.log("token", res.data.token);
        toast.success(res.data.message);
        Cookies.set('userToken',res.data.token)
        dispatch(setUserToken(res.data.token))
        router.push('/profile')
        
      })
      .catch((err) => {console.log('err',err)});
  }

  const formObj = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handelSubmit,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box
      onSubmit={formObj.handleSubmit}
      component="form"
      sx={{ width: "50%", mx: "auto" }}
      display={"flex"}
      flexDirection={"column"}
      gap={"2rem"}
      alignItems={"center"}
    >
      <TextField
        id="email"
        value={formObj.values.email}
        error={!!formObj.errors.email}
        onChange={formObj.handleChange}
        label="Email"
        fullWidth
        variant="standard"
      />
      <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          error={!!formObj.errors.password}
          value={formObj.values.password}
          onChange={formObj.handleChange}
          id="password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
}
