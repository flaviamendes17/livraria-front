import Header from "../components/Header";
import CategoriaList from "../components/CategoriaList";

const categorias = [
    { name: "Ficção Científica", image: "/ficcao-cientifica.png" },
    { name: "Romance", image: "/romance.png" },
    { name: "Biografia", image: "/biografia.png" },
    { name: "Tecnologia", image: "/tecnologia.png" },
    { name: "Fantasia", image: "/fantasia.png" },
    { name: "História", image: "/historia.png" },
    { name: "Autoajuda", image: "/auto-controle.png" },
    { name: "Mistério", image: "/misterio.png" },
];

export default function Page() {
    return (
        <div>
            <Header />
            <main>
                <h1>Bem-vindo à Livraria</h1>
                <p>Explore nosso catálogo e descubra novos mundos!</p>
                <CategoriaList categorias={categorias} />
            </main>
        </div>
    );
}
