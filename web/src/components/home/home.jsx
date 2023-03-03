import { Container, Grid } from '@mui/material';
import React from 'react';
import Feed from '../feed/feed';
import Navbar from '../navbar/navbar';
import Rightbar from '../rightbar/rightbar';
import Sidebar from '../sidebar/sidebar';

const Home = () => {
  return (
    <Container maxWidth="xl">
        <Navbar></Navbar>
        <Grid container>
            <Sidebar />
            <Feed />
            <Rightbar />
        </Grid>
    </Container>
  );
}

export default Home;