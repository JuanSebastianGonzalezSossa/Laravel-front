import { serviceBlog } from "../api";
import { useDispatch, useSelector } from "react-redux"
import { onAddNewArticulos, onArticulos, onUpdateArticulo, onDeleteArticulo, onCategorias, onAddNewCategorias, onUpdateCategoria, onDeleteCategoria } from "../store";
import Swal from "sweetalert2";
import { fileUpload } from "../blog/helpers/FileUpload";

export const useServices = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);

    const getArticulos = async () => {
        try {
            const { data } = await serviceBlog.get('/articles');
            dispatch(onArticulos(data));
        } catch (error) {

            console.log(error)
        }
    }

    const getCategorias = async () => {
        try {
            const { data } = await serviceBlog.get('/categories');
            dispatch(onCategorias(data));
        } catch (error) {
            console.log(error)
        }
    }

    const savingArticulo = async (values, file = []) => {
        console.log(values);
        try {
            const imagen = await fileUpload(file[0], 'maruplas');
            
            if (values.id) {
                // Actualizando
                const { data } = await serviceBlog.put(`/articles/${values.id}`, { titulo: values.titulo, img_url: `${imagen}`, slug: values.slug, categoria_id: values.categoria_id, texto_corto: values.texto_corto, texto_largo: values.texto_largo });
                console.log(data)
                dispatch(onUpdateArticulo(data, user));
                if (data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El articulo fue actualizado con exito!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                return;
            }
            //Creando

            const { data } = await serviceBlog.post('/articles', { titulo: values.titulo, img_url: `${imagen}`, slug: values.slug, categoria_id: values.categoria_id, texto_corto: values.texto_corto, texto_largo: values.texto_largo });
            dispatch(onAddNewArticulos({ titulo: values.titulo, img_url: `${imagen}`, slug: values.slug, categoria_id: values.categoria_id, texto_corto: values.texto_corto, texto_largo: values.texto_largo , user }));
           console.log(data)
            if (data) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar');
        }
    }

    const savingCategorias = async (values) => {
        console.log(values)
        try {
            if (values.id) {
                // Actualizando
                const { data } = await serviceBlog.put(`/categories/${values.id}`, values);
                dispatch(onUpdateCategoria({data, user}));
                if (data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El cliente fue actualizado con exito!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                return;
            }
            // Creando
            const { data } = await serviceBlog.post('/categories', values);
            dispatch(onAddNewCategorias({values, user}));
            if (data) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El cliente fue creado con exito!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }


    }

    const DeletingArticulos = async (values) => {
        try {
            const { data } = await serviceBlog.delete(`/articles/${values.id}`);
            console.log(data)
            dispatch(onDeleteArticulo(values));
            if (data) {
                Swal.fire(
                    'Elimniado!',
                    'El producto fue eliminado con exito.',
                    'success'
                )
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }

    }

    return {
        //metodos
        getArticulos,
        savingArticulo,
        DeletingArticulos,
        getCategorias,
        savingCategorias
    }
}