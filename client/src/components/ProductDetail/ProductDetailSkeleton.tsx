import React from 'react'
import styles from "./ProductDetail.module.scss";
const ProductDetailSkeleton = () => {
    return (
        <div className={styles.productDetail}>
            <div className={styles.contentGrid}>
                <div className={styles.imageContainer}>
                    <div
                        style={{ background: "#dddddd" }}
                        className={styles.imgProduct}
                    ></div>
                    <div className={styles.descriptionContainer}>
                        <h3
                            style={{
                                background: "#d3d3d3",
                                height: "10px",
                                borderRadius: "10px",
                                width: "50%",
                            }}
                        ></h3>
                        <p
                            style={{
                                background: "#d3d3d3",
                                height: "10px",
                                borderRadius: "10px",
                                width: "100%",
                                marginTop: "10px",
                            }}
                            className={styles.description}
                        ></p>
                        <p
                            style={{
                                background: "#d3d3d3",
                                height: "10px",
                                borderRadius: "10px",
                                width: "80%",
                                marginTop: "10px",
                            }}
                            className={styles.description}
                        ></p>
                        <p
                            style={{
                                background: "#d3d3d3",
                                height: "10px",
                                borderRadius: "10px",
                                width: "50%",
                                marginTop: "10px",
                            }}
                            className={styles.description}
                        ></p>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div>
                        <div className={styles.contentData}>
                            <div
                                style={{
                                    background: "#d3d3d3",
                                    height: "10px",
                                    borderRadius: "10px",
                                    width: "50%",
                                    marginTop: "10px",
                                }}
                            ></div>
                            <div
                                style={{
                                    background: "#d3d3d3",
                                    height: "10px",
                                    borderRadius: "10px",
                                    width: "100%",
                                    marginTop: "10px",
                                }}
                            ></div>
                            <div
                                style={{
                                    background: "#d3d3d3",
                                    height: "15px",
                                    borderRadius: "10px",
                                    width: "50%",
                                    marginTop: "30px",
                                }}
                                className={styles.price}
                            ></div>
                        </div>
                        <div>
                            <button
                                style={{
                                    background: "#5c9dff",
                                    padding: "1.25rem 2rem",
                                }}
                                className={styles.btnBuy}
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSkeleton;