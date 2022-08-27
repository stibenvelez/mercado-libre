import { FC } from "react";
import { Item } from "../../models/items.model";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.scss";
import ProductListSkeleton from "./ProductListSkeleton";

interface ProductList {
    items: {
        items: Item[];
    };
    loading: boolean;
}

const ProductList: FC<ProductList> = ({ items: { items }, loading }) => {
    if (loading) {
        return <ProductListSkeleton />;
    }
    if (items?.length === 0) {
        return <div className="alert shadow">No se encontraron resultados</div>;
    }
    return (
        <div className={`${styles.productListContainer} shadow`}>
            {items &&
                items.map((item: Item, index: number) => (
                    <ProductItem key={index} item={item} />
                ))}
        </div>
    );
};

export default ProductList;
