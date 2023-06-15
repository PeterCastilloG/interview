import style from "./page.module.scss";
import logo from "../public/logo.png";
import Image from "next/image";
import { IoMail } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { exo, inter, orbitron } from "./fonts";
import { clsx } from "@/lib/clsx";
import Calendary from "@/components/calendary/Calendary";
import logoGlobal from "../public/LogoGSF.png"
import heroFoto from "../public/hero-shape1.png"
import logoIcon from "../public/LogoR1.png"

export default function Home() {
    return (
        <div>

            <div className="offcanvas offcanvas-start" id="offcanvasExample">
                <div className="offcanvas-header">
                    <div className="offcanvas-logo">
                        <a href="Recruiter1.html"><Image src={logoGlobal} alt="Global S1" /></a>
                    </div>
                    <button type="button" className="close-btn" data-bs-dismiss="offcanvas"><i className="flaticon-close"></i></button>
                </div>
                <div className="offcanvas-body">
                    <div className="offcanvas-menu">
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                    <div className="col-lg-6">
                        <div className="hero-images">
                            <Image className="shape-1" src={heroFoto} alt="" />
                            <div className="images">
                                <Image src={logoIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h2 className="sub-title" data-aos-delay="600" data-aos="fade-up">¡Bienvenido a Global S1!</h2>
                            <h2 className="title" data-aos="fade-up" data-aos-delay="800">Entrevista <span>Laboral</span>
                                Developer Full Stack</h2>
                            <p data-aos="fade-up" data-aos-delay="900">Postula ahora y sé parte de nuestra historia de
                                éxito.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section techwix-cta-section-04 section-padding"
                style={{ backgroundImage: "url('assets/images/bg/cta-bg3.jpg')" }}>
                <div className="container">
                    <div className="cta-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="cta-left">
                                    <div className="section-title">
                                        <h2 className="title white">Queremos Conocerte. </h2>
                                    </div>
                                    <div className="cta-info">
                                        <div className="cta-text">
                                            <p>Nos sentimos entusiasmados de tenerte en este punto del proceso y estamos
                                                buscamos conocer más sobre ti, tus experiencias, tus habilidades y cómo podrías
                                                enriquecer nuestro equipo, así explorar a profundidad tu potencial y alinear tus
                                                principios y valores con los nuestros.</p>
                                            <p>A través de este sistema, podrás seleccionar la fecha y el horario que mejor se
                                                adapte a tu disponibilidad.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="hero-btn" data-aos="fade-up" data-aos-delay="1000">
                                    <a className="btn btn-4" href="conocenos.html">Agenda tu entrevista</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section footer-section footer-section-03 footer-section-05"
                style={{ backgroundImage: "url('assets/images/bg/footer-bg.jpg')" }}>

                <div className="container">
                    <div className="footer-widget-wrap">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget-about">
                                    <a className="footer-logo" href="home.html"><Image src="assets/images/LogoGSF.png" alt="Logo" /></a>


                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget-about">
                                    <p>¡Juntos, haremos realidad tus visiones digitales!</p>
                                    <p>Somos La innovación en el desarrollo de software que estas buscando.</p>

                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="footer-widget-title">Información de contacto</h4>

                                    <div className="widget-info">
                                        <ul>
                                            <li>
                                                <div className="info-icon">
                                                    <i className="flaticon-phone-call"></i>
                                                </div>
                                                <div className="info-text">
                                                    <span><a target="_blank"
                                                        href="https://wa.me/51919557684?text=Hola%20deseo%20información%20para">+51
                                                        919 557 684</a></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="info-icon">
                                                    <i className="far fa-envelope-open"></i>
                                                </div>
                                                <div className="info-text">
                                                    <span><a href="contacto.html">contacto@globals.one</a></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="info-icon">
                                                    <i className="flaticon-pin"></i>
                                                </div>
                                                <div className="info-text">
                                                    <span>Lima, Perú</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-social">
                                    <ul className="social">
                                        <li><a target="_blank" href="https://www.linkedin.com/company/global-s1"><i
                                            className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-area">
                    <div className="container">
                        <div className="footer-copyright-wrap">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="copyright-text text-center">
                                        <p>© Copyrights 2023 Global S1 - Todos los derechos reservados </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
