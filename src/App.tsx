import { InlineWidget } from 'react-calendly'
import { IoMail } from "react-icons/io5"
import { RiWhatsappFill } from "react-icons/ri"
import { useState } from "react"
import logo from "../src/utils/logo.png"
import video from "../src/utils/background.mp4"
import "./App.scss"




function App() {
  const [openCalendar, setCalendar] = useState(false)

  const calendlyStyles = {
    height: '500px', 
    width: "500px",
    overflow: 'hidden', 
    padding: '1rem'
  };
  return (
    <div className="container">
      <video id="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        <source src={video} type="video/webm" />
      </video>
      <div className="content">
        <div className='work'>
          <div className='logo'>
            <img src={logo} alt="foto" />
            <h1>Global S1</h1>
          </div>
          <div className='title'>
            <span>Entrevista Laboral</span>
            <span>Full Stack Developer</span>
          </div>
          <div className='interview'>
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
            <div className='info'>
              <span>Queremos Conocerte</span>
              <p>Nos sentimos entusiasmados de tenerte en este
                punto del proceso y estamos ansiosos por
                conocer más sobre ti, tus experiencias, tus
                habilidades y cómo podrías enriquecer nuestro
                equipo, así explorar a profundidad tu potencial y
                alinear tus principios y valores con los nuestros.
                A través de este sistema, podrás seleccionar la
                fecha y el horario que mejor se adapte a tu
                disponibilidad.
              </p>
              <button>Agendar Entrevista</button>
            </div>
          </div>
        </div>
        <div className='contact'>
          <span className='title'>CONTÁCTANOS</span>
          <ul>
            <li>
              <span>PHONE</span>
              <span><RiWhatsappFill />919557684</span>
            </li>
            <li>
              <span>EMAIL</span>
              <span><IoMail />desarrollador@globals.one</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
