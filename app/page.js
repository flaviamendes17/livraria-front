import Header from "../components/Header";
import Banner from "../components/Banner.jsx";
import CategoriaList from "../components/CategoriaList";
import Footer from "../components/Footer";
import LancamentosDestaque from "../components/LancamentosDestaque";
import Newletter from "../components/Newletter";
import DestaquesLivros from "../components/DestaquesLivros";

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
            <DestaquesLivros />
            <LancamentosDestaque />
            <Newletter />
            <Footer />
        </div>
    );
}
