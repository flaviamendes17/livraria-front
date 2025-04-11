import React from "react";
import Lancamento from "../components/Lancamentos";
import styles from "../styles/DestaquesLivros.module.css";
import Destaques from "./Destaques";


const livros = [
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/91r5G8RxqfL._AC_UL232_SR232,232_.jpg",
        titulo: "É Assim que Acaba",
        autor: " Colleen Hoover",
        avaliacao: 4.5,
        categorias: ["ficção romântica"],
        preco: "40.65",
    },
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81Vhnel+xxL._AC_UL165_SR165,165_.jpg",
        titulo: "Todas as suas Imperfeições",
        autor: " Colleen Hoover",
        avaliacao: 4.8,
        categorias: ["ficção romântica"],
        preco: "41.90",
    },
    {
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81Izv2GRWoL._AC_UL232_SR232,232_.jpg",
        titulo: " É Assim que Começa",
        autor: " Colleen Hoover",
        avaliacao: 4.4,
        categorias: ["ficção romântica"],
        preco: "39.65",
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebxQARqOKpjzUKGlQtEUbdOSqA11w0joNha4y1a5Z6j6RkAzMoLh7yyTa&s=10",
        titulo: "Novembro, 9",
        autor: " Colleen Hoover",
        avaliacao: 4.2,
        categorias: ["Romance contemporâneo"],
        preco: "39.65",
    },
    {
        imagem: "data:image/jpeg;base64,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",
        titulo: "Confess",
        autor: " Colleen Hoover",
        avaliacao: 4.7,
        categorias: ["Romance contemporâneo"],
        preco: "52,98",
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
                    <Lancamento key={index} {...livro} />
                ))}
            </div>
        </section>
    );
};

export default DestaquesLivros;