import { Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
    return (
        <Container sx={{my: 4}}>
            <Typography variant="h4">Contact Us</Typography>
            <form>
                <TextField id="outlined-basic" label="Full Name" variant="outlined" sx={{width: '50%', my: 2}} /><br />
                <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width: '50%', mb: 2}} /><br />
                <TextField id="outlined-basic" label="Message" variant="outlined" sx={{width: '50%', mb: 2}} /><br />
                <Button variant="contained" color="secondary" sx={{py:1, px: 3}}>Send</Button>
            </form>
        </Container>
    );
};

export default Contact;