import { Route, Routes } from "react-router-dom"
import { Articles } from "../pages/articles"
import { Categorias } from "../pages/categorias"
import { Usuarios } from "../pages/usuarios"
import { useAuthStore } from "../../hooks/useAuthStore"
import { Home } from "../pages/home"


export const BlogRoutes = () => {

  const { user } = useAuthStore();

  return (
    <Routes>
        <Route path="/" element={ <Home /> } />
        {user.rol == 'administrador' ? <Route path="/articles" element={ <Articles /> } /> : null}
        {user.rol == 'administrador' ? <Route path="/categorias" element={ <Categorias /> } /> : null}
        {user.rol == 'administrador' ? <Route path="/usuarios" element={ <Usuarios /> } /> : null}
        <Route exact path="/*" element={<Home />} />
    </Routes>
  )
}
