import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddPlants = () => {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [success, setSuccess] = useState(false);

    const handlePlant = e => {
        const newToy = { name, img, description, price, rating };
        
        fetch('https://serene-caverns-16512.herokuapp.com/addPlants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <Container>
            <form onSubmit={handlePlant}>
                <TextField
                    sx={{ width: {xs: '100%', md: '50%'}, mb: 2 }}
                    id="standard-basic1"
                    label="Plant Name"
                    name="name"
                    onBlur={(e)=>setName(e.target.value)}
                    variant="standard"
                /><br />
                <TextField
                    sx={{ width: {xs: '100%', md: '50%'}, mb: 2 }}
                    id="standard-basic2"
                    label="Plant Image"
                    name="image"
                    onBlur={(e)=>setImg(e.target.value)}
                    variant="standard"
                /><br />
                <TextField
                    sx={{ width: {xs: '100%', md: '50%'}, mb: 2 }}
                    id="standard-basic3"
                    label="Plant Price"
                    name="price"
                    onBlur={(e)=>setPrice(e.target.value)}
                    variant="standard"
                /><br />
                <TextField
                    sx={{ width: {xs: '100%', md: '50%'}, mb: 2 }}
                    id="standard-basic4"
                    label="Plant Description"
                    name="description"
                    onBlur={(e)=>setDescription(e.target.value)}
                    variant="standard"
                /><br />
                <TextField
                    sx={{ width: {xs: '100%', md: '50%'}, mb: 2 }}
                    id="standard-basic5"
                    label="Plant Rating"
                    name="rating"
                    onBlur={(e)=>setRating(e.target.value)}
                    variant="standard"
                /><br />
                <Button variant='contained' type="submit" color="secondary">Add Plant</Button>
            </form>
            {success && <Alert variant="success" className="mt-3 col-12 col-md-6">Add a new toy successfully!</Alert>}
        </Container>
    );
};

export default AddPlants;