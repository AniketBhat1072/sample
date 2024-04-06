import React from 'react';
import './SignIn.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Paper, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Navbar from '../../Common/Navbar/Navbar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    async function signIn(e){
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:3001/api/v1/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (response.ok){
                alert('Sucessfully Signed In')
                console.log(response)
                navigate('/products')
            }
            else{
                const mainResponse = await response.text()
                alert(mainResponse)

            }
        }
        catch(err){
            console.error(err)
        }
    }
    return (
        <><Navbar />
            <Grid container justifyContent="center" alignItems="center" className='background' >
                <Paper elevation={5} className='paperstyle'>
                    <Grid className='header'>
                        <Avatar className='avatar'>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Sign In</h2>
                        <Typography variant='caption'>Please fill this form to sign into your account !</Typography>
                    </Grid>

                    <form onSubmit={signIn}>
                        <TextField value={email} onChange={(e) => setEmail(e.target.value)} className='input' label="Email Adress" fullWidth required />
                        <TextField value={password} onChange={(e) => setPassword(e.target.value)} className='input' label="Password" type='password' fullWidth required />
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Remember Me" />
                        </FormGroup>
                        <Button variant='contained' type='submit' className='submit-btn' fullWidth>Sign In</Button>
                        <Typography className='forgotpass'>
                            <Link>Forgot Password?</Link>
                        </Typography>
                        <Typography>
                            Do You Have an account? <Link to="/signup">Sign Up</Link>
                        </Typography>
                    </form>
                </Paper>
            </Grid></>

    )
}

export default SignIn