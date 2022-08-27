import React, { useContext, useEffect, useState } from "react";
import {
    useLocation,
    useSearchParams,
    useNavigate,
} from "react-router-dom";
import ItemsContext from "../../context/ItemsProvider";
import InputSearch from "../InputSearch";
import styles from "./navbar.module.scss";

const Navbar = () => {
    const navigate = useNavigate();
    let [searchParams, setSearchParams]: any = useSearchParams();

    const { handleGetItems, searchTerm, setSearchTerm } =
        useContext(ItemsContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams({
            [e.target.name]: e.target.value,
        });
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!searchTerm || searchTerm === "") {
            return false;
        }

        handleGetItems(searchTerm);
        navigate(`/items?search=${searchTerm}`);
    };

    useEffect(() => {
        if (searchParams.get("search")) {
            handleGetItems(searchParams.get("search"));
        }

        setSearchTerm(searchParams.get("search"));
    }, []);

    return (
        <div className={`${styles.navContainer} container`}>
            <a className={styles.logo} href="/">
                <img src="/img/logoMercadolibre.png" />
            </a>
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
