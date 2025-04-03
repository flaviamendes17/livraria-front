import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                <div className={styles.brand}>
                    <h2>Meraki</h2>
                </div>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h3>Categorias</h3>
                        <ul>
                            <li><a href="#">Ficção Científica</a></li>
                            <li><a href="#">Romance</a></li>
                            <li><a href="#">Biografia</a></li>
                            <li><a href="#">Tecnologia</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Links</h3>
                        <ul>
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Termos de Uso</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Redes Sociais</h3>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <p>&copy; 2025 Meraki. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
