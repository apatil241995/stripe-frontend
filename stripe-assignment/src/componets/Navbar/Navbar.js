import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import AndroidIcon from '@mui/icons-material/Android';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Container from '@mui/material/Container';
import "./Navbar.css";


const ResponsiveAppBar = () => {

  return (
    <AppBar position="static" class="navbar">
      <Container maxWidth="xl" class='container'>
        <AndroidIcon class='icon' />
        <p class='text'>Laptops</p>
        <p class='text'>Desktop PCs</p>
        <p class='text'>Networking Devices</p>
        <p class='text'>Printers & Scanners</p>
        <p class='text'>PC Parts</p>
        <p class='text'>All Other Products</p>
        <p class='text'>Repairs</p>
        <DehazeIcon class="deicon" />
      </Container>

    </AppBar>
  );
};
export default ResponsiveAppBar;
