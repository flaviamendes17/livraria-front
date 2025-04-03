import React from "react";
import styles from "../styles/Newletter.module.css";

const Newletter = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Assine nossa Newsletter</h2>
            <form className={styles.form}>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Inscrever-se
                </button>
            </form>
        </section>
    );
};

export default Newletter;