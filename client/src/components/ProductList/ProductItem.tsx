import { FC } from "react";
import { Link } from "react-router-dom";
import { Item } from "../../models/items.model";
import styles from "./ProductItem.module.scss";
import { formatMoney } from "../../helpers/formatMoney";

interface ProductItem {
    item: Item;
}

const CONDITION_MAP: { [key: string]: string } = {
    new: "Nuevo",
    used: "Usado",
};

const ProductItem: FC<ProductItem> = ({ item }) => {
    return (
        <div className={styles.product}>
            <div className={styles.productContent}>
                <Link to={`/${item.id}`}>
                    <div className={styles.productImg}>
                        <img src={item.picture} />
                    </div>
                </Link>
                <div className={styles.contentIfo}>
                    <Link to={`/${item.id}`}>
                        <span className={styles.price}>
                            {formatMoney(item.price.amount)}
                        </span>
                    </Link>
                    <Link to={`/${item.id}`}>
                        <span className={styles.title}>{item.title}</span>
                    </Link>
                </div>
                <div className={styles.stateContent}>
                    <span className={styles.state}>
                        {CONDITION_MAP[item.condition]}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
