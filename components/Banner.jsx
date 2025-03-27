import sttles from "../styles/Banner.module.css";

export default function Banner() {
    return (
        <section>
            <h1 className={sttles.title}>📚 Meraki </h1>
            <p className={sttles.subtitle}> Iluminando mentes, inspirando futuros. </p>
            <button class name={sttles.button}> Ver ofertas </button>
        </section>
    );
}