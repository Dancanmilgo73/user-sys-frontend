import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ".././styles/login.css"
import {  Link} from "react-router-dom";
export default function Login() {
    const [values, setValues] = useState({username: '', email: '', password: ''});
    const handleChange = (evt) => {
        const value = evt.target.value;
        setValues({
          ...values,
          [evt.target.name]: value
        });
      }

      const handleSubmit = (e) => {
        e.preventDefault();
      }
    return (
        <Box
        sx={{
        //   width: 300,
        //   maxWidth: '100%',
        }}
        className='login_con'
      >
          <form onSubmit={handleSubmit}>
        <div><TextField name="username" fullWidth label="Username" type="text" id="fullWidth" onChange={handleChange}/></div>
        <div><TextField name="email" type="email" fullWidth label="Email" id="fullWidth" onChange={handleChange} /></div>
        <div><TextField name="password" type="password" fullWidth label="Password" id="fullWidth" onChange={handleChange} /></div>
        <div><Button fullWidth variant="contained" size="large" type="submit">
          LOGIN
        </Button></div>
        </form>
        <div><Link to='/register' style={{textDecoration: 'none'}}>Or Register</Link></div>
      </Box>
    )
}
