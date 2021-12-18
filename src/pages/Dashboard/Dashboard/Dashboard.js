import { Outlet } from '@mui/icons-material';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 200;

const Dashboard = (props) => {
    const { window } = props;
    const { admin } = useFirebase();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link style={{ textDecoration: 'none' }} to="/home">
                    <ListItem button>
                        <ListItemText primary='Home' />
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/dashboard">
                    <ListItem button>
                        <ListItemText primary='Dashboard' />
                    </ListItem>
                </Link>
                {admin && <>
                    <Link style={{ textDecoration: 'none' }} to="/dashboard/makeAdmin">
                        <ListItem button>
                            <ListItemText primary='Make Admin' />
                        </ListItem>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/dashboard/addPlants">
                        <ListItem button>
                            <ListItemText primary='Add Plants' />
                        </ListItem>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/dashboard/allOrders">
                        <ListItem button>
                            <ListItemText primary='All Orders' />
                        </ListItem>
                    </Link>
                </>}
                {!admin && <>
                    <Link style={{ textDecoration: 'none' }} to="/dashboard/reviews">
                        <ListItem button>
                            <ListItemText primary='Reviews' />
                        </ListItem>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/dashboard/myOrders">
                        <ListItem button>
                            <ListItemText primary='My Orders' />
                        </ListItem>
                    </Link>
                </>}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Typography variant="h4">Welcome To Dashboard</Typography>
            </Box>
        </Box>
    );
};

export default Dashboard;