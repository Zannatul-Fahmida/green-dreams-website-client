import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Plant from '../Home/Plant/Plant';

const AllPlants = () => {
    const [plants, setPlants] = useState([]);
    useEffect(() => {
        fetch('https://serene-caverns-16512.herokuapp.com/plants')
            .then(res => res.json())
            .then(data => setPlants(data))
    }, []);
    return (
        <Container>
            <Typography variant="h4" sx={{ my: 4 }}>All Plants</Typography>
            <Grid container spacing={2}>
                {
                    plants.map(plant => <Plant
                        key={plant._id}
                        plant={plant}
                    ></Plant>
                    )
                }
            </Grid>
        </Container>
    );
};

export default AllPlants;