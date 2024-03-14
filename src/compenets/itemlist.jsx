import React from 'react';
import './itemlist.css'
import fruititems from '../items.json';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function itemlist() {

  return (
    <>
      <div>
        {fruititems.fruits.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <div className="project_image_container">
                <Splide ptions={{ rewind: true, autoplay: true }} aria-label="React Splide Example" className="splide" >
                 {item.images.map((image, imageIndex) => (
                    <SplideSlide key={imageIndex}>
                      <img src={image} alt={`${item.name} image ${imageIndex + 1}`} className='splideimg'/>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            <CardActionArea>
            
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Color: {item.color}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>    
  )
}

export default itemlist
