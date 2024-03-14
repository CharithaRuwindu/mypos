import * as React from 'react';
import './rightfooter.css'
import { Grid, Paper } from '@mui/material';
function footer() {

    return (
        <Grid container>
            <Grid item xs={12}>
                <div className='actions'>
                    <button className='actionbtn'>New Button</button>
                    <button className='actionbtn'>Discount</button>
                    <button className='actionbtn'>Tax</button>
                    <span>Item Count : 400</span>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className='buttons'>
                    <button className='actionbtn'>New Button</button>
                    <button className='actionbtn'>Shipping</button>
                    <button className='actionbtn'>Packaging</button>
                    <button className='actionbtn'>Total</button>
                </div>
            </Grid>
        </Grid>




    )

}
export default footer