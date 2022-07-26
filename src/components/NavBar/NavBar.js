import * as React from 'react';
import CartWidget from './CartWidget';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem }from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import { app } from '../../firebase/config'
import { getAuth, signOut } from 'firebase/auth'


const auth = getAuth(app)

const pages = [['Remeras','category/remeras'],['Buzos', 'category/buzos'],['Sobre nosotros', '/about'], ['FAQs','/faq']];
const settings = ['Cuenta', 'Pedidos'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const {user} = React.useContext(UserContext)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{backgroundColor:'black'}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 10 }} >
                    <Link to={'/'}>
                        <img
                            src='/assets/img/logo2.gif' 
                            alt='Logo'
                            style={{height:'60px'}} 
                            />
                    </Link>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                        <MenuIcon sx={{color:'#555555'}} />
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
                    {pages.map((page)=>{
                        return (
                            <Link to={page[1]} key={page[0]} >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" sx={{color: 'purple', fontWeight: 700 }}>{page[0]}</Typography>
                                </MenuItem>
                            </Link>
                        )
                    })}

                    </Menu>
                </Box>
                <Box
                    sx={{
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    <Link to={'/'}>
                        <img src='/assets/img/logo.png' alt='Logo' />
                    </Link>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Link to={page[1]} key={page[0]}>
                        <Button
                        key={page[0]}
                        onClick={handleCloseNavMenu}
                        sx={{ m: 2, color: 'purple', display: 'block', fontWeight: 700, fontSize: '12px'}}
                        >
                            {page[0]}
                        </Button>
                    </Link>
                ))}
                </Box>

                <CartWidget/>

                {
                    user ? (
                        <Box sx={{ flexGrow: 0}}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar src='/assets/img/user.png' alt="Remy Sharp" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <Link to={`/${setting.toLowerCase()}`} key={setting}>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center" sx={{color: 'gray', fontWeight: 700 }}>{setting}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                            <Link to='/'>
                                <Button 
                                    onClick={()=>signOut(auth)} 
                                    color='secondary' 
                                    variant='outlined' 
                                    size='small'
                                    sx={{marginLeft:'10px'}}
                                >
                                    Logout
                                </Button>
                            </Link>
                        </Box>
                    ) : (
                        <>
                            <Link to='/login'>
                                <Button
                                    color='secondary' 
                                    variant='outlined' 
                                    size='small'
                                    sx={{marginLeft:'10px'}}
                                >
                                    Login
                                </Button>
                            </Link>
                        </>
                    )
                }
            </Toolbar>
        </Container>
        </AppBar>
    );
};

export default NavBar
