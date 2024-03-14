import * as React from 'react';
import profilepic from '../assets/profile.png'
import './navbar.css'
import { Grid, Paper } from '@mui/material';
function navbar() {
    
    return (


        <div className='content'>
            <Grid container>
                <Grid item xs={12} sm={4}>
                <div className='date_container'>
                <i class="fa fa-sun-o" aria-hidden="true"></i>
                <p>14/3/2024 | Thursday</p>
                </div>
                </Grid>
                <Grid xs={12} sm={4}>
                    <p className='posname'>STOREMATE</p>
                </Grid>
                <Grid xs={12} sm={4}>
                    <div className='profile_container'>
                    <p className='myname'>Charitha</p>
                    <img src={profilepic} alt="profile" className='profilepic' />
                    </div>
                </Grid>
            </Grid>


        </div>


    )

}
export default navbar