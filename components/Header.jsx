import styles from "../styles/Header.module.css";
import Search from "./Search.jsx";
import NavBar from "./NavBar.jsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>📚 Meraki </h1>
                <p> Iluminando mentes inspirando futuros. </p>
            </div>

            <NavBar />
            <div className={styles.actions}>
                <Search />
            </div>

            <div className={styles.icon}>
                <a href="">🛒</a>
                <a href="">⭐</a>
                <a href="">👤</a>
            </div>
        </header>
    );
};

export default Header;
