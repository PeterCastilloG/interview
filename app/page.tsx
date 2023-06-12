import style from "./page.module.scss";
import logo from "../public/logo.png";
import Image from "next/image";
import { IoMail } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { exo, inter, orbitron } from "./fonts";
import { clsx } from "@/lib/clsx";
import Calendary from "@/components/calendary/Calendary";

export default function Home() {
  return (
    <div className={style.container}>
      <video
        className={style.backgroundvideo}
        src="background.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className={style.content}>
        <div className={style.work}>
          <div className={style.logo}>
            <Image src={logo} alt="foto" />
            <h1 className={exo.className}>Global S1</h1>
          </div>
          <div className={style.title}>
            <span className={orbitron.className}>Entrevista Laboral</span>
            <span className={inter.className}>Full Stack Developer</span>
          </div>
          <div className={style.interview}>
            {/* <InlineWidget
              pageSettings={{
                backgroundColor: '1F1F29',
                hideEventTypeDetails: true,
                hideLandingPageDetails: true,
                primaryColor: '9494A0',
                textColor: 'E8E8E9',
                hideGdprBanner: true,
              }}
              styles={calendlyStyles} // Aplica los estilos personalizados
              url='https://calendly.com/globals1/entrevista'
            /> */}
            <div className={style.info}>
              <span className={orbitron.className}>Queremos Conocerte</span>
              <p className={inter.className}>
                Nos sentimos entusiasmados de tenerte en este punto del proceso
                y estamos ansiosos por conocer más sobre ti, tus experiencias,
                tus habilidades y cómo podrías enriquecer nuestro equipo, así
                explorar a profundidad tu potencial y alinear tus principios y
                valores con los nuestros. A través de este sistema, podrás
                seleccionar la fecha y el horario que mejor se adapte a tu
                disponibilidad.
              </p>
              <Calendary text={"Agendar Entrevista"}/>
            </div>
          </div>
        </div>
        <div className={style.contact}>
          <span className={clsx(style.title, orbitron.className)}>CONTÁCTANOS</span>
          <ul>
            <li>
              <span className={orbitron.className}>PHONE</span>
              <span className={inter.className}>
                <RiWhatsappFill />
                919557684
              </span>
            </li>
            <li>
              <span className={orbitron.className}>EMAIL</span>
              <span className={inter.className}>
                <IoMail />
                desarrollador@globals.one
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
