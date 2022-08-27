import ProductList from "../../components/ProductList/ProductList";
import styles from "./Home.module.scss";
import { useContext } from "react";
import ItemsContext from "../../context/ItemsProvider";
import Breadcrumb from "../../components/Breadcrumb";

const HomePage = () => {
    const {
        items,
        loading,
    } = useContext(ItemsContext);

    return (
        <div className={`${styles.homeContainer} container`}>
            <Breadcrumb items={items} loading={loading} />
            <ProductList items={items} loading={loading} />
        </div>
    );
};

export default HomePage;
