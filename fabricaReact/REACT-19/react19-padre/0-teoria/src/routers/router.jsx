import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { UseEfectsPage } from "../pages/UseEfectsPage";
import {ImagenesPage} from "../pages/ImagenesPage"
import { Page404 } from "../pages/404";
import { RutasAnidadasPage } from "../pages/RutasAnidadasPage";
import { PerfilPage } from "../pages/PerfilPage";
import { ConfiguracionPage } from "../pages/ConfiguracionPage";

export const MyRouters = () => (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UseEfectsPage" element={<UseEfectsPage/>}></Route>
        <Route path="/imagenes" element={<ImagenesPage/>}/>
        <Route path="*" element={<Page404/>}></Route>
        <Route path="/rutasanidadas" element={<RutasAnidadasPage/>} />
        <Route path="perfil" element={<PerfilPage/>} />
        <Route path="Configuracion" element={<ConfiguracionPage/>}>
        </Route>
        </Routes>
    </BrowserRouter>
);