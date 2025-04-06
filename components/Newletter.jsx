import React from "react";
import styles from "../styles/Newletter.module.css";

const Newletter = () => {
    return (
        <section className={styles.newletter}>
            <h2 className={styles.title}>Fique por dentro das novidades!</h2>
            <p className={styles.subtitle}>Assine nossa newletter e receba atualizações sobre novos lançamentos, promoções exclusivas e dicas de leitura.</p>
            <form className={styles.form}>
                <input type="email" placeholder="Seu melhor e-mail" className={styles.input} required />
                <button type="submit" className={styles.button}>Assinar</button>
            </form>
        </section>
    );
};

export default Newletter;