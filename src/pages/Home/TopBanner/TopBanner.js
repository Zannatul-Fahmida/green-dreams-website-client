import React from 'react';
import Slider from "react-slick";
import { Box, Button, Container } from '@mui/material';
import img1 from '../../../images/banner1.png';
import img2 from '../../../images/banner2.png';
import img3 from '../../../images/banner3.png';

const TopBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Box style={{backgroundColor: '#faf4f2'}}>
            <Container sx={{ padding: '20px 0' }}>
                <Slider {...settings}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ margin: '0', fontSize: '20px' }}>Build A Beautiful Garden</p>
                                <p style={{ margin: '10px 0', fontSize: '46px', fontWeight: 'bold' }}>All Types Plants</p>
                                <p style={{ marginTop: '0', fontSize: '32px' }}>Available Here</p>
                                <Button variant="contained" color="success">Buy Now</Button>
                            </div>
                            <div>
                                <img style={{ height: '250px', width: '200px' }} src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ margin: '0', fontSize: '20px' }}>Build A Beautiful Garden</p>
                                <p style={{ margin: '10px 0', fontSize: '46px', fontWeight: 'bold' }}>All Types Plants</p>
                                <p style={{ marginTop: '0', fontSize: '32px' }}>Available Here</p>
                                <Button variant="contained" color="success">Buy Now</Button>
                            </div>
                            <div>
                                <img style={{ height: '250px', width: '200px' }} src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ margin: '0', fontSize: '20px' }}>Build A Beautiful Garden</p>
                                <p style={{ margin: '10px 0', fontSize: '46px', fontWeight: 'bold' }}>All Types Plants</p>
                                <p style={{ marginTop: '0', fontSize: '32px' }}>Available Here</p>
                                <Button variant="contained" color="success">Buy Now</Button>
                            </div>
                            <div>
                                <img style={{ width: '250px' }} src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </Box>
    );
};

export default TopBanner;