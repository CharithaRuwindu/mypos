import React from 'react';
import Navbar from './compenets/navbar.jsx'
import { Grid, Paper } from '@mui/material';
import Itemlist from './compenets/itemlist.jsx'
import Footer from './compenets/footer.jsx'
import Rightfooter from './compenets/rightfooter.jsx'
function App() {

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ height: '10vh' }}>
            <Navbar />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper sx={{ height: '70vh' }}>Main Content Section 1</Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper sx={{ height: '70vh' }}>
            <Itemlist />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper sx={{ height: '12vh' }}>
            <Footer />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper sx={{ height: '12vh' }}>
          <Rightfooter />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default App
