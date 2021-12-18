import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../../images/1.png';

const Offer = () => {
    return (
        <Container sx={{ my: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ px: 0 }}>
                    <img src={img1} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center', pb: 4 }}>
                    <Box>
                        <Typography variant="h6" style={{ color: '#2e7d32' }}>
                            SPECIAL OFFER
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 2 }}>
                            SUCCULENT GARDEN
                        </Typography>
                        <Typography variant="h3" sx={{ my: 2 }}>
                            GIFT BOXES
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            From planter materials to style options, discover which planter is best for your space.
                        </Typography>
                        <Button variant="contained" color="success">Explore The Shop</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Offer;