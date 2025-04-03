import styles from "../styles/Banner.module.css";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <h1 className={styles.title}>
                Descubra mundos extraordinários através das páginas de um livro! </h1>
                <p className={styles.descricao}>
                    Promoção de lançamento com até 50% de desconto em todos os livros! </p>

                    <button className={styles.button}>Ver ofertas</button>
            </section>
    );
};