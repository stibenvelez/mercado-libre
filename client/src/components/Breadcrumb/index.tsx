import React, { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Items } from "../../models/items.model";
import styles from "./Breadcrumb.module.scss";
interface Breadcrumb {
    items?: Items;
    loading?:boolean
}
const Breadcrumb: FC<Breadcrumb> = ({ items, loading }) => {

    return (
        <ul className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            {(!loading && items?.categories) ||
                [].map((item: string, index: number) => (
                    <li key={index}>{<p>{item}</p>}</li>
                ))}
        </ul>
    );
};

export default Breadcrumb;
