import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Reviews = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const handleAddReview = e => {
        const newReview = { name, review, rating };
        fetch('https://serene-caverns-16512.herokuapp.com/addReviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added a review');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <>
        <Typography variant="h4">Review</Typography>
        <form onSubmit={handleAddReview}>
            <TextField
                sx={{ width: {xs: '100%', md: '50%'}, mb: 2 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={(e)=>setName(e.target.value)}
                variant="standard"
            /><br />
            <TextField
                sx={{ width: {xs: '100%', md: '50%'}, mb: 2 }}
                id="standard-basic1"
                label="Rating"
                name="rating"
                type="number"
                onBlur={(e)=>setRating(e.target.value)}
                variant="standard"
            /><br />
            <TextField
                sx={{ width: {xs: '100%', md: '50%'}, mb: 2 }}
                id="standard-basic2"
                label="Your Review"
                name="review"
                onBlur={(e)=>setReview(e.target.value)}
                variant="standard"
            /><br />
            <Button sx={{ width: {xs: '100%', md: '50%'} }} type="submit" variant="contained" color="success">Register</Button>
        </form>
        </>
    );
};

export default Reviews;