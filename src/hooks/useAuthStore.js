import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { serviceBlog } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import { onUser, onAddNewUser } from "../store";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth)
    const { users } = useSelector(state => state.user)
    
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await serviceBlog.post('/auth/login', { email, password });
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('token-init-date', new Date().getTime());
            const { user } = data;
            dispatch(onLogin({ name: user.name, email: user.email, rol: user.rol}));
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const startRegister = async (values) => {

        try {
            const { data } = await serviceBlog.post('/auth/register', values );

            dispatch(onAddNewUser({...data.user, user }));
            if(data.ok){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El usuario se registro con exito!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }
    }

    const startDeletingAsesor = async (values, api) => {
        try {
            const { data } = await serviceMaruplas.delete(`/${api}/${values._id}`);
            console.log(data)
            dispatch(onUser(data.usuarios));
            if (data.ok) {
                Swal.fire(
                    'Eliminado!',
                    'El usuario se elimino con exito.',
                    'success'
                )
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }

    }

    const savingUsuarios = async (values) => {
        console.log(values)
        try {
            if (values._id) {
                // Actualizando
                const { data } = await serviceMaruplas.put(`/auth/${values._id}`, values);
                console.log(data)
                dispatch(onUser(data.usuarios));
                if (data.ok) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El usuario se actualizo con exito!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                return;
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }
    }


    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        console.log(token)

        if (!token) return dispatch(onLogout());

        try {
            console.log("Entro")
            const { data } = await serviceBlog.get('auth/refres');
            console.log(data)
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('token-init-date', new Date().getTime());
            const { user } = data;
            dispatch(onLogin({ name: user.name, email: user.email, rol: user.rol}));
        } catch (error) {
            console.log(error);
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        checkAuthToken();
    }

    //Propiedades
    return {
        status,
        user,
        errorMessage,

        //metodos
        startLogin,
        checkAuthToken,
        startLogout,
        startRegister,
        startDeletingAsesor,
        savingUsuarios,
    }

}