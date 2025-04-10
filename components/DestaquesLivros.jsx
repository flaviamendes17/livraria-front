import React from "react";
import styles from "../styles/DestaquesLivros.module.css";
import Destaques from "./Destaques";


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
        imagem: "https://m.media-amazon.com/images/I/81vgnVeezUL._AC_UF1000,1000_QL80_.jpg",
        titulo: "Rita Lee",
        autor: "Rita Lee",
        avaliacao: 4.5,
        categorias: ["Biografia"],
        preco: "39.65",
    },
    {
        imagem: "https://m.media-amazon.com/images/I/81vgnVeezUL._AC_UF1000,1000_QL80_.jpg",
        titulo: "Rita Lee",
        autor: "Rita Lee",
        avaliacao: 4.5,
        categorias: ["Biografia"],
        preco: "39.65",
    },
];

const DestaquesLivros = () => {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2>Destaques da Semana</h2>
                <a href="#" className={styles.verTodos}>Ver todos</a>
            </div>
            <div className={styles.lista}>
                {livros.map((livro, index) => (
                    <Lancamento Key={index} {...livro} />
                ))}
            </div>
        </section>
    );
};

export default DestaquesLivros;