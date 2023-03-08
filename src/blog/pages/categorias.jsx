import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useServices } from '../../hooks/UseServices';
import { CheckingAuth } from '../../ui/components/CheckingAuth';
import { NavBar } from '../components/navbar'
import { NothingSelectedView } from '../components/NothingSelectedView';
import { TableComponent } from '../components/TableComponent';
import { columnas } from '../data/columnsCategorias'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useUiStore } from '../../hooks/useUiStore';
import { ModalCrearCategoria } from '../views/ModalCrearCategoria';

export const Categorias = () => {

  const { openDateModal } = useUiStore();

  const { getCategorias } = useServices();

  const { Categorias } = useSelector(state => state.categoria);

  // Llamar a la función para cargar las categorías al montar el componente
  useEffect(() => {
    getCategorias();
  }, []);


  return (
    <>
      <NavBar />
      {Object.keys(Categorias).length === 0 ? <CheckingAuth />
        : <TableComponent columnas={columnas} filas={Categorias} api='categoria' />}

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

<ModalCrearCategoria/>
    </>
  )
}
