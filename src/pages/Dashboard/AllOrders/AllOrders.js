import { Button, Container, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import useFirebase from '../../../hooks/useFirebase';

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

const AllOrders = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://serene-caverns-16512.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
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
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }
    
    const handleUpdate = id => {
        const proceed = window.confirm('Are you sure you want to update?');
        if (proceed) {
            fetch(`https://serene-caverns-16512.herokuapp.com/order/${id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert('updated successfully');
                        window.location.reload();
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
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
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <StyledTableRow key={order._id}>
                                <StyledTableCell component="th" scope="row">
                                    {order.plantName}
                                </StyledTableCell>
                                <StyledTableCell align="right"><img style={{width: '50px'}} src={order.plantImg} alt="" /></StyledTableCell>
                                <StyledTableCell align="right">$ {order.plantPrice}</StyledTableCell>
                                <StyledTableCell align="right">{order.email}</StyledTableCell>
                                <StyledTableCell align="right"><Button onClick={()=>handleUpdate(order._id)} variant="contained" color="secondary">{order.status}</Button></StyledTableCell>
                                <StyledTableCell align="right"><Button onClick={()=>handleDelete(order._id)} variant="contained" color="secondary">Delete</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AllOrders;