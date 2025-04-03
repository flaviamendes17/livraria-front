import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>📚 Meraki </h1>
                <p> Iluminando mentes inspirando futuros. </p>
            </div>


            <div className={styles.icon}>
                <a href="">🛒</a>
                <a href="">⭐</a>
                <a href="">👤</a>

            </div>
    </header>
    );
}   

