import { Button, Container, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const MyOrders = () => {
    const { user } = useFirebase();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://serene-caverns-16512.herokuapp.com/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://serene-caverns-16512.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload();
                        const remaining = myOrders.filter(order => order._id !== id);
                        setMyOrders(remaining);
                    }
                })
        }
    }

    return (
        <Container>
            <Typography variant="h4" sx={{mb: 2}}>My Orders</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Image</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((order) => (
                            <StyledTableRow key={order._id}>
                                <StyledTableCell component="th" scope="row">
                                    {order.plantName}
                                </StyledTableCell>
                                <StyledTableCell align="right"><img style={{width: '50px'}} src={order.plantImg} alt="" /></StyledTableCell>
                                <StyledTableCell align="right">$ {order.plantPrice}</StyledTableCell>
                                <StyledTableCell align="right">{order.status}</StyledTableCell>
                                <StyledTableCell align="right"><Button onClick={()=>handleDelete(order._id)} variant="contained" color="secondary">Delete</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrders;