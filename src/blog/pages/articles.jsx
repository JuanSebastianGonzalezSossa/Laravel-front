import { IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useServices } from '../../hooks/UseServices';
import { useUiStore } from '../../hooks/useUiStore';
import { NavBar } from '../components/navbar';
import { NothingSelectedView } from '../components/NothingSelectedView';
import { TableComponent } from '../components/TableComponent';
import { columnas } from '../data/columnsArticulos'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { ModalCrearArticulo } from '../views/ModalCrearArticulo';
import { ModalEditarArticulo } from '../views/ModalEditarArticulo';

export const Articles = () => {

  const { getArticulos } = useServices();

  const { openDateModal } = useUiStore();

  const { articulos } = useSelector(state => state.articulo);


  useEffect(() => {
    getArticulos();
  }, [])

  return (
    <>
      <NavBar />
      {Object.keys(articulos).length === 0 ? <NothingSelectedView />
        : <TableComponent columnas={columnas} filas={articulos} api='articulos' />}

      <IconButton
        size='large'
        sx={{
          color: 'third.main',
          backgroundColor: 'fifth.main',
          ':hover': { backgroundColor: 'fifth.main', opacity: 0.8 },
          position: 'fixed',
          right: 50,
          bottom: 30
        }}
        onClick={openDateModal}
      >
        <AddOutlinedIcon sx={{ fontSize: 30 }} />
      </IconButton>

      <ModalCrearArticulo />
      <ModalEditarArticulo/>
    </>
  )
}
