import React from "react";
import styles from "../styles/LancamentosDestaque.module.css";
import Lancamento from "../components/Lancamentos";

const livros = [
    {
        imagem: "https://m.media-amazon.com/images/I/81vgnVeezUL._AC_UF1000,1000_QL80_.jpg",
        titulo: "Rita Lee",
        autor: "Rita Lee",
        avaliacao: 4.5,
        categorias: ["Biografia"],
        preco: "39.65",
    },
    {
        imagem: "https://m.media-amazon.com/images/I/71K1H8WYwsL._AC_UF1000,1000_QL80_.jpg",
        titulo: "A Dama da Morte",
        autor: "Kate Quinn",
        avaliacao: 4.8,
        categorias: ["Mistério", "Terror"],
        preco: "53.90",
    },
    {
        imagem: "https://m.media-amazon.com/images/I/81XvsucSLVL.jpg",
        titulo: "No fundo é amor",
        autor: "Ali Hazelwood",
        avaliacao: 4.2,
        categorias: ["Romance"],
        preco: "55.90",
    },
];

const LancamentosDestaque = () => {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2>Lançamentos</h2>
                <a href="#" className={styles.verTodos}>Ver todos</a>
            </div>
            <div className={styles.lista}>
                {livros.map((livro, index) => (
                    <Lancamento key={index} {...livro} />
                ))}
            </div>
        </section>
    );
};

export default LancamentosDestaque;
