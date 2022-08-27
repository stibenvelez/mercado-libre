import React, { useContext, useEffect, useState } from "react";
import {
    Link,
    useLocation,
    useSearchParams,
    useNavigate,
} from "react-router-dom";
import ItemsContext from "../../context/ItemsProvider";
import InputSearch from "../InputSearch";
import styles from "./navbar.module.scss";

const Navbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    let [searchParams, setSearchParams]: any = useSearchParams();

    const { handleGetItems } = useContext(ItemsContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams({
            [e.target.name]: e.target.value,
        });
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (pathname !== "/") {
            navigate("/");
        }

        handleGetItems(searchTerm);
    };

    useEffect(() => {
        if (searchParams.get("search")) {
            console.log("hay valores", searchParams.get("search"));
            handleGetItems(searchParams.get("search"));
        }
        setSearchTerm(searchParams.get("search"));
    }, []);

    return (
        <div className={`${styles.navContainer} container`}>
            <Link className={styles.logo} to="/">
                <img src="/img/logoMercadolibre.png" />
            </Link>
            <nav className={`${styles.nav} container`}>
                <form onSubmit={handleSubmit}>
                    <InputSearch
                        name="search"
                        defaultValue={searchTerm}
                        onChange={handleChange}
                    />
                </form>
            </nav>
        </div>
    );
};

export default Navbar;
