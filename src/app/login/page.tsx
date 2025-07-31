import * as React from 'react';
import { Box, TextField, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Loginform from '../_components/Loginform/Loginform';

export default function Page(){
    
    return (
    <div>
        <Typography sx={{textAlign:'center',component:'h1',fontSize:'2rem' ,marginBlock:'3rem'}}>Login Now:</Typography>
        <Loginform/>
    </div>
    )
}