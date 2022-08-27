import { FC } from "react";
import { formatMoney } from "../../helpers/formatMoney";
import { Item } from "../../models/items.model";
import styles from "./ProductDetail.module.scss";
import ProductDetailSkeleton from "./ProductDetailSkeleton";

interface ProductDetail {
    item: {
        item: Item;
    };
    loading: boolean;
}

const ProductDetail: FC<ProductDetail> = ({ item: { item }, loading }) => {
    const { condition, title, price, picture } = item;

    if (loading) {
        return <ProductDetailSkeleton/>;
    }
    return (
        <div>
            <div className={styles.productDetail}>
                <div className={styles.contentGrid}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imgProduct}>
                            <img src={picture} />
                        </div>
                        <div className={styles.descriptionContainer}>
                            <h3 className={styles.descriptionTitle}>
                                Descripción del producto
                            </h3>
                            <p className={styles.description}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div>
                            <div className={styles.contentData}>
                                <span>{condition} - 204 Vendidos</span>
                                <h2>{title}</h2>
                                <div className={styles.price}>
                                    <h3>{formatMoney(price.amount)}</h3>
                                    <span>{price.decimals}</span>
                                </div>
                            </div>
                            <div>
                                <button className={styles.btnBuy}>
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
