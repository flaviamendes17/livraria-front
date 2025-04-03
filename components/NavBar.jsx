import styles from "../styles/Header.module.css";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <a href="#" className={styles.active}>Home</a>
            <a href="#">Livros</a>
            <a href="#">Categorias</a>
            <a href="#">Autores</a>
            <a href="#">Ofertas</a>
        </nav>
    );
};

export default NavBar;