import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';



function Header() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: 'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <h2 className='title'> My Movie App </h2>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header