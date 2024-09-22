import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../service/auth';


function Text() {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    dispatch(login(email, password, navigate));
  };
  
  return (
    <div>
     <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'inherit' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{
            color:'white'
          }}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{
                sx: {
                  position: 'absolute', // Position the label absolutely
                  top: -8, // Adjust the vertical position above the input
                  left: 14, // Adjust the horizontal position inside the input
                  backgroundColor: 'inherit', // Background color to match the input
                  padding: '0 4px', // Add padding to prevent overlap
                  color: 'white', // Default label color
                  transform: 'translateY(-50%)', // Center the label vertically relative to its new position
                  pointerEvents: 'none', // Prevent pointer events on the label
                  '&.Mui-focused': {
                    color: '#FF6525', // Label color when focused
                  },
                },
              }}
              sx={{
                position: 'relative', // Ensure the TextField is positioned relatively
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'inherit', // Set default background color to black
                  color: 'white', // Set text color to white
                  '& fieldset': {
                    borderColor: 'white', // Default border color
                    borderWidth: '1px', // Set border width
                    borderRadius: '4px', // Optional: Add border radius
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF6525', // Border color when focused
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white', // Text color inside the input
                  paddingTop: '16px', // Add padding to the top to ensure the text doesn't overlap with the label
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{
                sx: {
                  position: 'absolute', // Position the label absolutely
                  top: -8, // Adjust the vertical position above the input
                  left: 14, // Adjust the horizontal position inside the input
                  backgroundColor: 'inherit', // Background color to match the input
                  padding: '0 4px', // Add padding to prevent overlap
                  color: 'white', // Default label color
                  transform: 'translateY(-50%)', // Center the label vertically relative to its new position
                  pointerEvents: 'none', // Prevent pointer events on the label
                  '&.Mui-focused': {
                    color: '#FF6525', // Label color when focused
                  },
                },
              }}
              sx={{
                position: 'relative', // Ensure the TextField is positioned relatively
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'inherit', // Set default background color to black
                  color: 'white', // Set text color to white
                  '& fieldset': {
                    borderColor: 'white', // Default border color
                    borderWidth: '1px', // Set border width
                    borderRadius: '4px', // Optional: Add border radius
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF6525', // Border color when focused
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white', // Text color inside the input
                  paddingTop: '16px', // Add padding to the top to ensure the text doesn't overlap with the label
                },
              }}
            />
       
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,bgcolor:'linear-gradient( #1b1b1b, #4b0649)'}}
            >
              Sign In
            </Button>

          </Box>
        </Box>

      </Container>
    </div>
  )
}

export default Text
