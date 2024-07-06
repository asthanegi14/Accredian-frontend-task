import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LogoImg from '../../assets/logo.png';
import { CgProfile } from "react-icons/cg";

const pages = ['Refer & Earn', 'Resources', 'About Us'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserFromLocalStorage = () => {
            const userData = localStorage.getItem('user');
            if (userData || userData !== "undefined") {
                setUser(JSON.parse(userData));
            }
        };

        fetchUserFromLocalStorage();
    }, []);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogoutRedirect = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('email');
        setUser(null);
        navigate('/login');
    };

    return (
        <div>
            <h2 className="bg-blue-100 text-center p-4 text-sm flex gap-2 flex-row justify-center items-center font-semibold">
                Navigate your ideal career path with tailored expert advice
                <button className="border-2 text-blue-700">Contact Expert</button>
            </h2>

            <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                            <img src={LogoImg} alt="logo" style={{ marginRight: '16px', height: 40 }} />
                            <Button sx={{ color: 'white', backgroundColor: 'blue', '&:hover': { backgroundColor: 'lightblue' } }}>Courses</Button>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                            <Button
                                sx={{ my: 2, ml: 2, color: 'white', display: 'block', backgroundColor: 'gray', '&:hover': { backgroundColor: 'lightgray' } }}
                                onClick={handleLogoutRedirect}
                            >
                                {user ? `Log Out` : "Login"}
                            </Button>
                            <Button className='my-2 ml-2 hover:bg-white'><CgProfile className='w-6 h-6' /></Button>
                        </Box>

                        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', flexGrow: 1 }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                                <MenuItem onClick={handleLogoutRedirect}>
                                    <Typography textAlign="center">
                                        {user ? `Log Out` : "Login"}
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><CgProfile /></Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Navbar;
