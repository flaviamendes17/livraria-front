import React from "react";
import CategoriaCard from "./CategoriaCard";
import styles from "../styles/CategoriaList.module.css";

const CategoriaList = ({ categorias }) => {
    return (
        <section>
            <div className={styles.header}>
                <h2 className={styles.title}>Categorias Populares</h2>
                <a href="#" className={styles.seeMore}>Ver mais</a>
            </div>
            <div className={styles["categoria-list"]}>
                {categorias.map((cat, index) => (
                    <CategoriaCard key={index} categoria={cat} />
                ))}
            </div>
        </section>
    );
};

export default CategoriaList;