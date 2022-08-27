import { useEffect, useState } from "react";
import ProductDetail from "../../components/ProductDetail";
import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import { ProductEmpty } from "../../models/items.model";
import Breadcrumb from "../../components/Breadcrumb";

const ProductPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(ProductEmpty);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/items/${id}`
                );
                const item = await response.json();
                setItem(item);
                setLoading(false);
            } catch (error) {}
        };
        fetchProduct();
    }, []);

    return (
        <div className={`${styles.container} container`}>
            <Breadcrumb />
            <ProductDetail item={item} loading={loading} />
        </div>
    );
};

export default ProductPage;
