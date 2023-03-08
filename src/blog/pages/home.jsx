import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import '../style/StylesArticulos.css'
import { useAuthStore } from '../../hooks/useAuthStore';
import { useServices } from '../../hooks/UseServices';
import { NavBar } from '../components/navbar'
import { ArticulosList } from '../components/ArticulosList';
import { CheckingAuth } from '../../ui/components/CheckingAuth';

export const Home = () => {

  const { articulos } = useSelector(state => state.articulo);

  const { getArticulos } = useServices();

  
  useEffect(() => {
    getArticulos();
  }, [])

  return (
    <>
      <NavBar />

      <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                item
                xs={12}
                sx={{ height: '100%', width: '100%', backgroundColor: 'primary.main', marginRight: 0, marginLeft: 0, marginTop: 0, padding: 5 }}>
                <Typography variant='h2' color='primary.blanco' sx={{ marginInline: 8, marginTop: 10 }}> Blog Sobre Jardineria </Typography>
            </Grid>

      {Object.keys(articulos).length === 0 ? <CheckingAuth />
                : <ArticulosList Articulos={articulos} />}

      

    </>
  )
}
