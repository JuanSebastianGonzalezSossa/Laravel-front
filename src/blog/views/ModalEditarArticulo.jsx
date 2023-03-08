import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import '../style/stylesModal.css'
import { Cancel, Save } from '@mui/icons-material';
import { useUiStore } from '../../hooks/useUiStore';
import { useFormik } from 'formik'
import { useServices } from '../../hooks/UseServices';

Modal.setAppElement('#root');

export const ModalEditarArticulo = () => {

    const { isSuccessOpen, CloseSuccess, isNow } = useUiStore();

    const { savingArticulo } = useServices();

    const fileInputRef = useRef();

    const [file, setFile] = useState([]);

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        setFile(target.files);
        console.log(target.files)
    }

    const onSubmit = (values, actions) => {
        savingArticulo(values, file)
        console.log(file)
        actions.resetForm();
        CloseSuccess();
    }

    const onCloseModal = () => {
        resetForm()
        CloseSuccess();
    }



    const { values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting, resetForm, setValues } = useFormik({
        initialValues: isNow,
        enableReinitialize: true,
        //validationSchema: ProductosValidacion,
        onSubmit
    });

    return (
        <Modal
            isOpen={isSuccessOpen}
            onRequestClose={onCloseModal}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <Typography variant='h5' noWrap component='div' textAlign="center" fontSize='28px' fontWeight='bold' > Editar Articulo </Typography>
            <hr />
            <form onSubmit={handleSubmit} autoComplete='off' className='animate__animated animate__fadeIn animate__faster'>
                <Grid container direction='column' justifyContent='center'>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '5px' }}>
                            <TextField
                                id='titulo'
                                name='titulo'
                                label="titulo *"
                                type="text"
                                placeholder='titulo del cliente'
                                fullWidth
                                value={values.titulo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.titulo && touched.titulo ? true : false}
                                helperText={errors.titulo && touched.titulo ? errors.titulo : ""}
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '5px' }}>
                            <TextField
                                id='categoria_id'
                                nombre='categoria_id'
                                label="categoria id *"
                                type="number"
                                placeholder='id categoria del articulo'
                                fullWidth
                                value={values.categoria_id}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.categoria_id && touched.categoria_id ? true : false}
                                helperText={errors.categoria_id && touched.categoria_id ? errors.categoria_id : ""}
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '5px' }}>
                            <TextField
                                id='slug'
                                nombre='slug'
                                label="slug *"
                                type="text"
                                placeholder='Slug'
                                fullWidth
                                value={values.slug}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.slug && touched.slug ? true : false}
                                helperText={errors.slug && touched.slug ? errors.slug : ""}
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '5px' }}>
                            <TextField
                                id='imagenURL'
                                nombre='imagenURL'
                                type="file"
                                fullWidth
                                ref={fileInputRef}
                                onChange={onFileInputChange}
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '5px' }}>
                            <TextField
                                id='texto_corto'
                                name='texto_corto'
                                label="Especificacions *"
                                type="text"
                                placeholder='Especificaciones del articulo'
                                fullWidth
                                value={values.texto_corto}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.texto_corto && touched.texto_corto ? true : false}
                                helperText={errors.texto_corto && touched.texto_corto ? errors.texto_corto : ""}
                            />
                        </Grid>
                    </Grid>
                    <Grid >
                        <Grid style={{ width: '100%', padding: '5px' }}>
                            <TextField
                                id='texto_largo'
                                name='texto_largo'
                                label="Descripcion *"
                                type="text"
                                placeholder='Descripcion'
                                fullWidth
                                value={values.texto_largo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.texto_largo && touched.texto_largo ? true : false}
                                helperText={errors.texto_largo && touched.texto_largo ? errors.texto_largo : ""}
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
