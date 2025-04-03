import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>📚 Meraki </h1>
                <p> Iluminando mentes inspirando futuros. </p>
            </div>

            <div className={styles.menu}>
                <a className={styles.menuItem} href="/">Início</a>
                <a href="">Livros</a>
                <a href="">Categorias</a>
                <a href="">Autores</a>
                <a href="">Ofertas</a>
            </div>

            <div className={styles.search}>
                <input type="text" placeholder="Pesquisar Livros, autores, categorias..." />
                <button>🔍</button>
            </div>

            <div className={styles.icon}>
                <a href="">🛒</a>
                <a href="">⭐</a>
                <a href="">👤</a>

            </div>
    </header>
    );
};  

