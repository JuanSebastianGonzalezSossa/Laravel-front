import React from 'react'
import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout'
import { useAuthStore } from '../../hooks/useAuthStore';
import { useFormik } from 'formik'
import { Link as RouterLink } from 'react-router-dom';
import { RegisterValidacions } from '../../blog/schemas/RegisterValidacion';


export const RegisterPage = () => {

  const { startRegister } = useAuthStore();

  const onSubmit = (values, actions) => {
      startRegister(values)
      actions.resetForm();
  }

  const { values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting, resetForm } = useFormik({
      initialValues: {
          name: '',
          email: '',
          password: '',
          phone_number: '',
          rol: '',
      },
      validationSchema: RegisterValidacions,
      onSubmit
  });

  return (
    <AuthLayout title="Registrarse">
            <form onSubmit={handleSubmit} className='animate__animated animate__fadeIn animate__faster'>
            <Grid container direction='column' justifyContent='center'>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '5px' }}>
                            <TextField
                                id='name'
                                name='name'
                                label="Nombre *"
                                type="text"
                                placeholder='Susana Restrepo'
                                fullWidth
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.name && touched.name ? true : false}
                                helperText={errors.name && touched.name ? errors.name : ""}
                            />
                        </Grid>
                    </Grid>
                    <Grid style={{ width: '90%', padding: '5px' }}>
                            <FormControl required sx={{ m: 1, minWidth: '100%' }}>
                                <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                                <Select
                                    sx={{ minWidth: '90%'}}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name='rol'
                                    value={values.rol}
                                    label="Rol *"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.rol && touched.rol ? true : false}
                                    helperText={errors.rol && touched.rol ? errors.rol : ""}
                                >
                                    <MenuItem value="administrador">administrador</MenuItem>
                                    <MenuItem value="usuario">usuario</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '5px' }}>
                            <TextField
                                id='phone_number'
                                name='phone_number'
                                label="Celular *"
                                type="number"
                                placeholder='3001234567'
                                fullWidth
                                value={values.phone_number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.phone_number && touched.phone_number ? true : false}
                                helperText={errors.phone_number && touched.phone_number ? errors.phone_number : ""}
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '5px' }}>
                            <TextField
                                id='email'
                                name='email'
                                label="Email *"
                                type="text"
                                placeholder='Correo@GrupoMaruplas.com'
                                fullWidth
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.email && touched.email ? true : false}
                                helperText={errors.email && touched.email ? errors.email : ""}
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '5px' }}>
                            <TextField
                                id='password'
                                name='password'
                                label="Password *"
                                type="password"
                                fullWidth
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.password && touched.password ? true : false}
                                helperText={errors.password && touched.password ? errors.password : ""}
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Grid container direction='row' justifyContent='center' >
                            <IconButton
                                size='large'
                                sx={{
                                    color: 'white',
                                    width: '100%', padding: '5px', 
                                    backgroundColor: 'primary.main',
                                    ':hover': { backgroundColor: 'primary.main', opacity: 0.8 },
                                    borderRadius: '15px',
                                    margin: '10px',
                                    fontSize: '18px',
                                    ':disabled': {}
                                }}
                                type="submit"
                                
                                disabled={Object.keys(errors).length !== 0 ? true : false}
                            >{console.log(errors)}
                                Guardar
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Typography variant='h6' sx={{ mb: 1, fontFamily: 'Vegur, Verdana, sans-serif', fontSize: 15 }}> O quieres <Link component={RouterLink} style={{ fontSize: 15, color: 'blue' }} variant='h6' color='inherit' to="/auth/login">
                        iniciar sesion
                    </Link> ? </Typography>
                </Grid>
            </form>

        </AuthLayout>
  )
}
