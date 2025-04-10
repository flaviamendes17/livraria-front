import React from "react";
import styles from "../styles/Destaques.module.css";


const Destaques = ({ imagem, titulo, autor, avaliacao, categorias, preco }) => {
    return (
        <div className={styles.card}>
            <img src={imagem} alt={titulo} className={styles.imagem} />
            <h3>{titulo}</h3>
            <p>por {autor}</p>
            <div className={styles.avaliacao}>
                {"⭐".repeat(Math.floor(avaliacao))} <span>({avaliacao})</span>
            </div>
            <div className={styles.categorias}>
                {categorias.map((cat, index) => (
                    <span key={index} className={styles.tag}>{cat.name}</span>
                ))}
            </div>
            <p className={styles.preco}>R$ {preco}</p>
        </div>
    );
}

export default Destaques;