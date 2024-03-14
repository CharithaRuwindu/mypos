import * as React from 'react';
import './footer.css'
import { Grid, Paper } from '@mui/material';
function rightfooter() {

    return (
        <Grid container>
            <Grid item xs={12}>
                <div className='actions'>
                    <button className='actionrightbtn' id='cash'>Cash</button>
                    <button className='actionrightbtn'>Pay</button>
                    <button className='actionrightbtn'>Card</button>
                    <button className='actionrightbtn'>Credit</button>
                </div>

            </Grid>
            <Grid item xs={12}>
                <div className='buttons'>
                    <button className='btn'>Button</button>
                    <button className='btn'>Button</button>
                    <button className='btn'>Button</button>
                    <button className='btn'>Button</button>
                </div>
            </Grid>
        </Grid>




    )

}
export default rightfooter