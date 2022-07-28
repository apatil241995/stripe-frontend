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
        <div class='text'>
          <h5>Laptops</h5>
        </div>
        <div class='text'>
          <h5>Desktop PCs</h5>
        </div>
        <div class='text'>
          <h5>Networking Devices</h5>
        </div>
        <div class='text'>
          <h5>Printers & Scanners</h5>
        </div>
        <div class='text'>
          <h5>PC Parts</h5>
        </div>
        <div class='text' >
          <h5>All Other Products</h5>
        </div>
        <div class='text'>
          <h5>Repairs</h5>
        </div>
        <DehazeIcon class="deicon" />
      </Container>

    </AppBar>
  );
};
export default ResponsiveAppBar;
