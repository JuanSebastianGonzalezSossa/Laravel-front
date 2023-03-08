import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/router/authRoutes';
import { useAuthStore } from '../hooks/useAuthStore';
import { BlogRoutes } from '../blog/router/blogRoutes';
import { CheckingAuth } from '../ui';


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    

    if (status === 'checking') {
        return (
            <CheckingAuth/>
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="/auth/*" element={<AuthRoutes />} />
                            <Route path='/*' element={<Navigate to='/auth/login' />} />
                        </>
                    )
                    : (
                        <>
                            <Route path="/*" element={<BlogRoutes />} />
                            <Route path="/*" element={ <Navigate to="/" /> } />
                        </>
                    )
            }

        </Routes>
    )
}
