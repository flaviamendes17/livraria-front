import styles from "../styles/Banner.module.css";

export default function Banner() {
    return (
        <section>
            <h1 className={
                styles.title}>📚 Meraki </h1>
            <p className={
                styles.subtitle}> Iluminando mentes, inspirando futuros. </p>
            <button class name={
                styles.button}> Ver ofertas </button>
        </section>
    );
}