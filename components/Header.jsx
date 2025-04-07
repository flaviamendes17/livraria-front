import styles from "../styles/Header.module.css";
import Banner from "./Banner"; // Importando o componente Banner

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.title}>📚 Meraki</h1>
                    <p className={styles.slogan}> Iluminando mentes inspirando futuros!</p>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <a href="/home" className={styles.home}>Início</a>
                        </li>
                        <li>
                            <a href="/Livros" className={styles.home}>Livros</a>
                        </li>
                        <li>
                            <a href="/Categorias" className={styles.home}>Categorias</a>
                        </li>
                        <li>
                            <a href="/Autores" className={styles.home}>Autores</a>
                        </li>
                        <li>
                            <a href="/ofertas" className={styles.home}>Ofertas</a>
                        </li>
                    </ul>
                </nav>

                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Pesquisar" className={styles.inputPesquisar} />
                    <button className={styles.lupa}>🔎</button>
                </div>

                <div className={styles.icons}>
                    <img src="/iconFavoritos.png" alt="Favoritos" className={styles.favIcon} />
                    <img src="/trolley.png" alt="Carrinho" className={styles.cartIcon} />
                    <img src="/user.png" alt="User" className={styles.userIcon} />
                </div>
            </div>

            {/* Adicionando o componente Banner abaixo da header */}
            <Banner />
        </>
    );
}

export default Header;