import React from "react";
import Image from "next/image";
import styles from "../styles/CategoriaCard.module.css";

const CategoriaCard = ({ categoria }) => {
    const { image, name } = categoria;

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src={image} alt={name} width={50} height={50} />
            </div>
            <p className={styles.name}>{name}</p>
        </div>
    );
};

export default CategoriaCard;
