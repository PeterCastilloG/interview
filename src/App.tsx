import { PopupModal } from 'react-calendly'
import { BsFillCalendarPlusFill } from "react-icons/bs"
import { IoMail } from "react-icons/io5"
import { RiWhatsappFill } from "react-icons/ri"
import { useState } from "react"
import logo from "../src/utils/logo.png"
import video from "../src/utils/background.mp4"
import "./App.scss"



function App() {
  const [openCalendar, setCalendar] = useState(false)

  return (
    <div className="container">
      <PopupModal
        open={openCalendar}
        rootElement={document.getElementById("root")!}
        onModalClose={() => setCalendar(false)}
        pageSettings={{
          backgroundColor: '1F1F29',
          hideEventTypeDetails: true,
          hideLandingPageDetails: true,
          primaryColor: '9494A0',
          textColor: 'E8E8E9',
          hideGdprBanner: true,
        }} url='https://calendly.com/globals1/entrevista' />
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
        </div>
        <div className='interview'>
          <span className='calendar'><BsFillCalendarPlusFill onClick={()=> setCalendar(true)} /></span>
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
