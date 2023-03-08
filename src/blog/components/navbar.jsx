import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LogoutOutlined } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { useAuthStore } from '../../hooks/useAuthStore';
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';

export const NavBar = () => {

  const { startLogout, user } = useAuthStore();

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container direction='row' justifyContent='space-between' alignItems='center' >
            <IconButton
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link component={RouterLink} style={{ fontSize: 18, textDecoration: 'none', padding: '20px' }} variant='h6' color='inherit' to="/">
                Blog
              </Link>
            </Typography>

            <Grid flexDirection='row' justifyContent='space-between'>
              {user.rol === 'administrador' ?


                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link component={RouterLink} style={{ fontSize: 18, textDecoration: 'none', marginRight: '50px' }} variant='h6' color='inherit' to="/articles">
                    Articulos
                  </Link>
                  <Link component={RouterLink} style={{ fontSize: 18, textDecoration: 'none', marginRight: '50px' }} variant='h6' color='inherit' to="/categorias">
                    Categorias
                  </Link>
                  <Link component={RouterLink} style={{ fontSize: 18, textDecoration: 'none', marginRight: '50px' }} variant='h6' color='inherit' to="/usuarios">
                    Usuarios
                  </Link>
                </Typography>

                : false}

            </Grid>

            <Button color='warning' onClick={startLogout}> Logout &nbsp; <LogoutOutlined /> </Button>

          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}