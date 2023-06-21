import style from "./page.module.scss";
import logo from "../public/logo.png";
import Image from "next/image";
import { IoMail } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { exo, inter, orbitron } from "./fonts";
import { clsx } from "@/lib/clsx";
import { BsFillTelephonePlusFill } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"
import { SiGooglemaps } from "react-icons/si"
import Calendary from "@/components/calendary/Calendary";
import logoGlobal from "../public/LogoGSF.png"
import heroFoto from "../public/hero-shape1.png"
import logoIcon from "../public/LogoR1.png"
import Navbar from "@/components/navbar/Navbar";
import 'normalize.css/normalize.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <video
        className={style.backgroundvideo}
        src="background.mp4"
        autoPlay
        muted
        loop
      ></video>
      <section className={clsx(style.section_empresa, inter.className)}>
        <div className={style.content}>
          <div className={style.logo}>
            <div><Image src={heroFoto} alt="" /></div>
            <div> <Image src={logoIcon} alt="" /></div>
          </div>
          <div className={style.info}>
            <span>¡BIENVENIDO A GLOBAL S1!</span>
            <h1>Entrevista <span>Laboral</span> Developer Full Stack</h1>
            <span>Postula ahora y sé parte de nuestra historia de éxito.</span>
          </div>
        </div>
      </section>
      <section className={clsx(inter.className, style.section_inteview)}>
        <div className={style.content}>
          <h2>Queremos Conocerte.</h2>
          <div className={style.info}>
            <p>Nos sentimos entusiasmados de tenerte en este punto del proceso y estamos buscamos conocer más sobre ti, tus experiencias, tus habilidades y cómo podrías enriquecer nuestro equipo, así explorar a profundidad tu potencial y alinear tus principios y valores con los nuestros.
              A través de este sistema, podrás seleccionar la fecha y el horario que mejor se adapte a tu disponibilidad.</p>
            <div className={style.calendar}>
              <Calendary text="Agendar tu entrevista" />
            </div>
          </div>
        </div>
      </section>
      <footer className={clsx(style.footer, inter.className)}>
        <div className={style.content}>
          <div className={style.logo}><Image src={logoGlobal} alt="Global S1" /></div>
          <ul className={style.info}>
            <li>¡Juntos, haremos realidad tus visiones digitales!</li>
            <li>Somos La innovación en el desarrollo de software que estas buscando.</li>

          </ul>
          <div className={style.things}>
            <span>Información de contacto</span>
            <ul>
              <li><BsFillTelephonePlusFill /> <a href="https://api.whatsapp.com/send/?phone=51919557684&text=Hola+deseo+informaci%C3%B3n+para&type=phone_number&app_absent=0">+51 919 557 684</a></li>
              <li><FiMail /> <a href="">contacto@globals.one</a></li>
              <li><SiGooglemaps /> Lima, Perú</li>
            </ul>
          </div>
          <a href="https://www.linkedin.com/company/global-s1" target="_blank" className={style.linkeind}>
            <span><FaLinkedinIn /></span>
          </a>
        </div>
        <span className={style.title}>© Copyrights 2023 Global S1 - Todos los derechos reservados</span>
      </footer>
    </div >
  );
}
