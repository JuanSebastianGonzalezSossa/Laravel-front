import React, { useEffect } from 'react'
import { Grid, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';
import Swal from 'sweetalert2';

const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
}

export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);

    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword })
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticacion', errorMessage, 'error')
        }
    }, [errorMessage])


    return (
        <AuthLayout title="Iniciar sesión">
            <form onSubmit={loginSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container justifyContent={'center'}>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="text"
                            placeholder='correo@google.com'
                            fullWidth
                            name="loginEmail"
                            value={loginEmail}
                            onChange={onLoginInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                            name="loginPassword"
                            value={loginPassword}
                            onChange={onLoginInputChange}
                        />
                    </Grid>


                    <Grid
                        container
                        sx={{ mt: 1 }}>
                        <Grid
                            item
                            xs={12}
                        >
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={12}>
                            <Button
                                type="submit"
                                variant='contained'
                                fullWidth>
                                Ingresar
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography variant='h6' sx={{ mb: 1, fontFamily: 'Vegur, Verdana, sans-serif', fontSize: 15 }}> O quieres <Link component={RouterLink} style={{ fontSize: 15, color: 'blue' }} variant='h6' color='inherit' to="/auth/register">
                        registrarte
                    </Link> ? </Typography>
                </Grid>

            </form>

        </AuthLayout>
    )
}
