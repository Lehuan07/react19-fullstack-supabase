import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { UseEfectsPage } from "../pages/UseEfectsPage";
import { Page404 } from "../pages/404";

export const MyRouters = () => (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UseEfectsPage" element={<UseEfectsPage/>}></Route>
        <Route path="*" element={<Page404/>}></Route>
        </Routes>
    </BrowserRouter>
);