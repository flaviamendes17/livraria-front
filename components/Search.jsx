import styles from "../styles/Header.module.css";

const Search = () => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="buscar Livros, autores, categorias..." />
            <button>🔎</button>
        </div>
    );
};

export default Search;