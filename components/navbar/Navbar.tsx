import style from "./Navbar.module.scss"
import { IoIosCall } from "react-icons/io"
import { GrMail } from "react-icons/gr"
import { FaLinkedinIn } from "react-icons/fa"
import { clsx } from "@/lib/clsx";
import { inter } from "@/app/fonts";

function Navbar() {
    return (
        <div className={clsx(style.calendary, inter.className)}>
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
                    <a target="_blank" href="https://www.linkedin.com/company/global-s1"><FaLinkedinIn /></a>
                    <span>Conócenos</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
