import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const Plant = ({ plant }) => {
    const { _id, name, img, price, rating } = plant;
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ py: 4 }}>
                <img
                    style={{ height: '100px', width: '100px' }}
                    src={img} alt="" />
                <Typography variant="h5">{name}</Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ReactStars
                        count={5}
                        value={rating}
                        size={30}
                        edit={false}
                        activeColor="#ffd700"
                    />
                </div>
                <Typography style={{ color: '#2e7d32', fontWeight: 'bold', margin: '7px' }}>$ {price}</Typography>
                <Link to={`/details/${_id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary">Details</Button>
                </Link>
            </Paper>
        </Grid>
    );
};

export default Plant;