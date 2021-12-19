import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://serene-caverns-16512.herokuapp.com/users/admin', {
            method: 'PUT',
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Typography variant="h4" sx={{mb: 2}}>Make an Admin</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    sx={{
                        width: { sm: '100%', md: '50%' },
                        mb: 2
                    }}
                    variant="outlined"
                    onBlur={handleOnBlur}
                /><br />
                <Button variant="contained" type="submit" color="secondary">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;