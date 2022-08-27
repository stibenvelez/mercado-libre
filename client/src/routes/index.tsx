import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../page/home";
import ProductPage from "../page/ProductPage";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<></>} />
                    <Route path="/items/" element={<HomePage />} />
                    <Route path="/items/:id" element={<ProductPage />} />
                    <Route path="*" element={<div>Pagina no encontrada</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
