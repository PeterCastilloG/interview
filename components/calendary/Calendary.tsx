"use client";
import { inter } from "@/app/fonts";
import { useState } from "react";
import style from "./Calendary.module.scss";
import { InlineWidget } from "react-calendly";
import { AiOutlineClose } from "react-icons/ai";
import { clsx } from "@/lib/clsx";

function Calendary({ text }: { text: string }) {
  const [calendaryShow, setCalendaryShow] = useState(false);
  const calendlyStyles = {
    height: '100vh',
    overflow: 'hidden',
  }
  return (
    <div className={style.calendary}>
      <button className={inter.className} onClick={()=> setCalendaryShow(true)}>{text}</button>
      <div className={clsx(style.scheduale, `${ !calendaryShow && style.noable}`)}>
        <div className={style.btnclose}>
          <AiOutlineClose  onClick={()=> setCalendaryShow(false)}/>
        </div>
        <InlineWidget
          pageSettings={{
            backgroundColor: "1F1F29",
            hideEventTypeDetails: true,
            hideLandingPageDetails: true,
            primaryColor: "9494A0",
            textColor: "E8E8E9",
            hideGdprBanner: true,
          }}
          styles={calendlyStyles} // Aplica los estilos personalizados
          url="https://calendly.com/globals1/entrevista"
        />
      </div>
    </div>
  );
}

export default Calendary;
