import React, { useState } from 'react';
import './itemlist.css';
import fruititems from '../items.json';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function itemlist() {
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 8;
 const totalPages = Math.ceil(fruititems.fruits.length / itemsPerPage);

 const handlePageChange = (event, value) => {
    setCurrentPage(value);
 };

 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = fruititems.fruits.slice(indexOfFirstItem, indexOfLastItem);

 return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {currentItems.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 145 }}>
            <div className="project_image_container">
              <Splide options={{ rewind: true, autoplay: true }} aria-label="React Splide Example" className="splide">
                {item.images.map((image, imageIndex) => (
                 <SplideSlide key={imageIndex}>
                    <img src={image} alt={`${item.name} image ${imageIndex + 1}`} className='splideimg' />
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
      <div className='pagination_container'>
      <Stack spacing={2}>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
      </Stack>
      </div>
    </>
 );
}

export default itemlist;
