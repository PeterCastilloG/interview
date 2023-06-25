"use client";
import style from "./Navbar.module.scss";
import { IoIosCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { clsx } from "@/lib/clsx";
import { inter } from "@/app/fonts";
import { useState, useEffect } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    let timeoutId: any;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (prevScrollpos > currentScrollPos) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      timeoutId = setTimeout(() => {
        setShowNav(true);
      }, 200);

      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={clsx(style.calendary, inter.className, !showNav && style.noshow)}>
      <div className={style.content}>
        <div>
          <IoIosCall />
          <span>51 919 557 684</span>
        </div>
        <div>
          <GrMail />
          <span>contacto@globals.one</span>
        </div>
        <div className={style.special}>
          <a target="_blank" href="https://www.linkedin.com/company/global-s1">
            <FaLinkedinIn />
          </a>
          <span>Conócenos</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
