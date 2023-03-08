import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import '../style/stylesModal.css'
import { Cancel, Save } from '@mui/icons-material';
import { useUiStore } from '../../hooks/useUiStore';
import { useFormik } from 'formik'
import { useServices } from '../../hooks/UseServices';

Modal.setAppElement('#root');

export const ModalCrearCategoria = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore();

    const { savingCategorias } = useServices();

    const onSubmit = (values, actions) => {
        savingCategorias(values)
        actions.resetForm();
        closeDateModal();
    }

    const { values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting, resetForm } = useFormik({
        initialValues: {
            tipo: '',
        },
        //validationSchema: ClienteValidacions,
        onSubmit
    });


    const onCloseModal = () => {
        resetForm()
        closeDateModal();
    }


    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal}
            className="modalCategoria"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <Typography variant='h5' noWrap component='div' textAlign="center" fontSize='28px' fontWeight='bold' > Crear Categoria </Typography>
            <hr />
            <form onSubmit={handleSubmit} autoComplete='off' className='animate__animated animate__fadeIn animate__faster'>
                <Grid container direction='column' justifyContent='center'>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '5px' }}>
                            <TextField
                                id='tipo'
                                name='tipo'
                                label="tipo *"
                                type="text"
                                placeholder='tipo categoria'
                                fullWidth
                                value={values.tipo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.tipo && touched.tipo ? true : false}
                                helperText={errors.tipo && touched.tipo ? errors.tipo : ""}
                            />
                        </Grid>
                    </Grid>
                   

                    <Grid >
                        <Grid container direction='row' justifyContent='center' >
                            <IconButton
                                size='large'
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'error.main',
                                    ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
                                    borderRadius: '15px',
                                    margin: '10px',
                                    fontSize: '18px',
                                }}
                                onClick={onCloseModal}
                            >
                                Cancelar &nbsp;
                                <Cancel />
                            </IconButton>
                            <IconButton
                                size='large'
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'primary.main',
                                    ':hover': { backgroundColor: 'primary.main', opacity: 0.8 },
                                    borderRadius: '15px',
                                    margin: '10px',
                                    fontSize: '18px'
                                }}
                                type="submit"
                            // disabled={Object.keys(errors).length !== 0 || !touched.nombre || !touched.rol || !touched.ciudad || !touched.email || !touched.password ? true : false}
                            >
                                Guardar &nbsp;
                                <Save />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Modal>
    )
}
