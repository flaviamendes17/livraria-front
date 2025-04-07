import Header from "../components/Header";
import Banner from "../components/Banner.jsx";
import CategoriaList from "../components/CategoriaList";
import Footer from "../components/Footer";
import Lancamentos from "../components/Lancamentos";
import LancamentosDestaque from "@/components/LancamentosDestaque";
import Newletter from "../components/Newletter";

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
            <LancamentosDestaque />
            <Newletter />
            <Footer /> 
        </div>
    );
}
