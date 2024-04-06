import React from 'react';
import './SignUp.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Avatar, Box, Button, Container, Paper, Typography } from '@mui/material';
import Navbar from '../../Common/Navbar/Navbar';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';




function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    async function signUp(e){
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:3001/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    contactNumber
                })
            });
            if (response.ok){
                alert('Sucessfully Signed Up')
            }
            else{
                const mainResponse = await response.text()
                console.log(mainResponse)
            }
        }
        catch(err){
            console.error(err)
        }
    }
    return (
        <><Navbar></Navbar>


            <Grid container className='background' justifyContent="center" alignItems="center"  spacing={0}>
                <Paper elevation={10} className='paperstyle'>
                    <Grid className='header'>
                        <Avatar className='avatar'>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2>Sign Up</h2>
                        <Typography variant='caption'>Please fill this form to create an account !</Typography>
                    </Grid>

                    <form onSubmit={signUp}>
                        <TextField value={firstName} onChange={(e) => setFirstName(e.target.value)} className='input' label="First Name" fullWidth required />
                        <TextField value={lastName} onChange={(e) => setLastName(e.target.value)} className='input' label="Last Name" fullWidth required />
                        <TextField value={email} onChange={(e) => setEmail(e.target.value)} className='input' label="Email Adress" fullWidth required />
                        <TextField value={password} onChange={(e) => setPassword(e.target.value)} className='input' label="Password" fullWidth required type='password' />
                        <TextField value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} className='input' label="Contact Number" fullWidth required />
                        <FormGroup>
                            <FormControlLabel required control={<Checkbox />} label="i accept the T&C" />
                        </FormGroup>
                        <Box textAlign='center'><Button variant='contained' type='submit' className='submit-btn'>Sign Up</Button></Box>
                    </form>
                </Paper>
            </Grid>

        </>
        

    )
}

export default SignUp