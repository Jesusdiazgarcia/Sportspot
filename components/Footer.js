import { IoTrophyOutline, IoLogoTwitter, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="footer mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
                        <h4 className="footer-brand"><IoTrophyOutline /> SPORTSPOT</h4>
                        <p>Conectando pasiones, creando equipos.</p>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="row">
                            <div className="col-md-4 col-6 mb-4 mb-lg-0">
                                <h5 className="footer-heading">NAVEGACIÓN</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#">Inicio</a></li>
                                    <li><a href="#">Equipos</a></li>
                                    <li><a href="#">Torneos</a></li>
                                    <li><a href="#">Amistosos</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-6 mb-4 mb-lg-0">
                                <h5 className="footer-heading">LEGAL</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#">Términos y Condiciones</a></li>
                                    <li><a href="#">Política de Privacidad</a></li>
                                    <li><a href="#">Política de Cookies</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-12">
                                <h5 className="footer-heading">SÍGUENOS</h5>
                                <div className="social-icons">
                                    <a href="#" aria-label="Twitter"><IoLogoTwitter /></a>
                                    <a href="#" aria-label="Instagram"><IoLogoInstagram /></a>
                                    <a href="#" aria-label="Facebook"><IoLogoFacebook /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} SportSpot. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 