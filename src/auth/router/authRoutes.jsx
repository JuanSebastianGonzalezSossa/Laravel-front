import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../Pages/loginPage';
import { RegisterPage } from '../Pages/registerPage';


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path='/*' element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
