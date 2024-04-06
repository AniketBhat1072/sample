import React from 'react';
import './Navbar.css';
import { AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import { AccountCircle, ShoppingCart } from '@mui/icons-material';
import {Link, useHistory} from 'react-router-dom';
import Images from '/Users/bhats/Desktop/upGradEshop/eshop/src/Assets/Types-of-eCommerce-Websites.jpg'
import { useNavigate } from 'react-router-dom';

function Navbar(){
    return (
        <div>
            <div>
            <AppBar className='appbar'>
                <Toolbar className='toolbar'>
                    <div className='branding'>
                        <ShoppingCart className='shoppingcart'></ShoppingCart>
                        <Typography className='name' sx={{fontFamily: 'monospace', fontWeight:900}}>Capstone</Typography>
                    </div>
                    <div className='signin-signup'>
                    <Link to='/signin'><Button className='btn' variant='contained' sx={{marginLeft:2}} >Sign In</Button></Link>
                    <Link to='/signup'><Button className='btn' variant='contained'sx={{marginLeft:2}} >Sign Up</Button></Link>
                    </div>
                </Toolbar>
            </AppBar>
            </div>
             
            
        </div>
        
    )
}

export default Navbar