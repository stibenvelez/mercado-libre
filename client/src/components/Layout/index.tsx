import { Outlet } from "react-router-dom";
import Header from "../Header";
import styles from "./layout.module.scss";

const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className="">
                <Outlet />
            </main>
            <footer></footer>
        </div>
    );
};

export default Layout;
