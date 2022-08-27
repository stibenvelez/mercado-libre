import styles from "./ProductItem.module.scss";

const ProductListSkeleton = () => {
    return (
        <div
            style={{
                   backgroundColor: `rgb(249 250 251)`
            }}
            className={`${styles.productListContainer} shadow`}
        >
            <div className={styles.product}>
                <div className={styles.productContent}>
                    <div
                        className={styles.productImg}
                        style={{ background: "#e0e0e0" }}
                    ></div>
                    <div className={styles.contentIfo}>
                        <div
                            style={{
                                background: "#e0e0e0",
                                height: "10px",
                                borderRadius: "10px",
                                width: "50%",
                            }}
                            className={styles.price}
                        ></div>
                        <div
                            style={{
                                background: "#e0e0e0",
                                height: "10px",
                                borderRadius: "10px",
                            }}
                        ></div>
                    </div>
                    <div className={styles.stateContent}></div>
                </div>
            </div>
            <div className={styles.product}>
                <div className={styles.productContent}>
                    <div
                        className={styles.productImg}
                        style={{ background: "#e0e0e0" }}
                    ></div>
                    <div className={styles.contentIfo}>
                        <div
                            style={{
                                background: "#e0e0e0",
                                height: "10px",
                                borderRadius: "10px",
                                width: "50%",
                            }}
                            className={styles.price}
                        ></div>
                        <div
                            style={{
                                background: "#e0e0e0",
                                height: "10px",
                                borderRadius: "10px",
                            }}
                        ></div>
                    </div>
                    <div className={styles.stateContent}></div>
                </div>
            </div>
            <div className={styles.product}>
                <div className={styles.productContent}>
                    <div
                        className={styles.productImg}
                        style={{ background: "#e0e0e0" }}
                    ></div>
                    <div className={styles.contentIfo}>
                        <div
                            style={{
                                background: "#e0e0e0",
                                height: "10px",
                                borderRadius: "10px",
                                width: "50%",
                            }}
                            className={styles.price}
                        ></div>
                        <div
                            style={{
                                background: "#e0e0e0",
                                height: "10px",
                                borderRadius: "10px",
                            }}
                        ></div>
                    </div>
                    <div className={styles.stateContent}></div>
                </div>
            </div>
            <div className={styles.product}>
                <div className={styles.productContent}>
                    <div
                        className={styles.productImg}
                        style={{ background: "#e0e0e0" }}
                    ></div>
                    <div className={styles.contentIfo}>
                        <div
                            style={{
                                background: "#e0e0e0",
                                height: "10px",
                                borderRadius: "10px",
                                width: "50%",
                            }}
                            className={styles.price}
                        ></div>
                        <div
                            style={{
                                background: "#e0e0e0",
                                height: "10px",
                                borderRadius: "10px",
                            }}
                        ></div>
                    </div>
                    <div className={styles.stateContent}></div>
                </div>
            </div>
        </div>
    );
}

export default ProductListSkeleton