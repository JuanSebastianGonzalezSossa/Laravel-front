import { Delete, Edit } from '@mui/icons-material'
import { Button, Grid, IconButton, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react'
import { useServices } from '../../hooks/UseServices';
import { onUpdateNow } from '../../store';

export const ArticulosList = ({ Articulos }) => {


    return (
        <Grid container
            spacing={0}
            direction="row"
            alignItems="flex-start"
            marginTop='20px'
            justifyContent="space-evenly">
            {Articulos.map((prod, i) => (
                <Grid className="container page-wrapper animate__animated animate__fadeIn animate__faster" key={i} item xs={3} sx={{ backgroundColor: 'primary.main', padding: 2, margin: 3 }}>
                    <Grid className="page-inner">
                        <Grid className="row">
                            <Grid className="el-wrapper">
                                <Grid className="box-up">
                                    <img className="img" src={prod.img_url} alt=""></img>
                                    <Grid className="img-info">
                                        <Grid className="a-size"><span className="size"><Typography variant='h5'>Categoria</Typography><br></br> {prod.categoria_tipo}</span></Grid>
                                    </Grid>
                                </Grid>
                                <Grid className="box-down">
                                    <Grid className="h-bg">
                                        <Grid className="h-bg-inner"></Grid>
                                    </Grid>

                                    <Grid className="cart" >
                                        <span className="price"> {prod.titulo} </span>
                                        <span className="add-to-cart"> {prod.texto_corto}
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ))
            }
        </Grid>
    )
}
