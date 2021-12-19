import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './PlantDetails.css';

const PlantDetails = () => {
    const { plantId } = useParams();
    const { user } = useFirebase();
    const [plant, setPlant] = useState([]);
    const [order, setOrder] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    console.log(name, email);
    useEffect(() => {
        fetch(`https://serene-caverns-16512.herokuapp.com/plants/${plantId}`)
            .then(res => res.json())
            .then(data => {
                setPlant(data)
                setOrder(data)
            })
    }, [plantId]);
    const handleOrder = order => {
        const status = 'Pending';
        const plantId = order._id;
        const plantName = order.name;
        const plantImg = order.img;
        const plantPrice = order.price;
        const plantDescription = order.description;
        const data = { plantId, plantName, plantImg, plantPrice, plantDescription, name, email, address, status };
        fetch(`https://serene-caverns-16512.herokuapp.com/addOrder`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Order complete');
                }
            });
    };
    return (
        <Container className="details-container">
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{plant.name}</Typography>
                    <ReactStars
                        count={5}
                        value={plant.rating}
                        size={30}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <Typography variant="h5" style={{ color: '#2e7d32', fontWeight: 'bold' }}>$ {plant.price}</Typography>
                    <Typography sx={{ mb: 2 }}>{plant.description}</Typography>
                    <form>
                        <TextField
                            required
                            name="Full Name"
                            value={user.displayName}
                            defaultValue={user.displayName}
                            onBlur={(e) => setName(e.target.value)}
                            variant="outlined"
                            sx={{ width: 1, mb: 2 }}
                        /><br />
                        <TextField
                            required
                            name="Email"
                            value={user.email}
                            defaultValue={user.email}
                            onBlur={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            sx={{ width: 1, mb: 2 }}
                        /><br />
                        <TextField
                            required
                            label="Address"
                            onBlur={(e) => setAddress(e.target.value)}
                            variant="outlined"
                            sx={{ width: 1, mb: 2 }}
                        /><br />
                        <Button variant="contained" color="success" onClick={() => handleOrder(order)}>Order Now</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={plant.img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default PlantDetails;