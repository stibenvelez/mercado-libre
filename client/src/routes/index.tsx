import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../page/home";
import ProductPage from "../page/ProductPage";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/:id" element={<ProductPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
