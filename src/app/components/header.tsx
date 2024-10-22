import Image from "next/image"
import Logo from "../data/logo.png"
import Link from "next/link"
export default function Header(){
    return(
        <div className="header">
            <div className="logo">
                <Image
                src={Logo} alt="Logo-picture"
                height={500}
                width={100}
                />
            </div>
            <ul className="header-button">
               <Link href={"/"}> <li>HOME</li></Link>
               <Link href={"./about"}><li>ABOUT</li></Link>
               <Link href={"./contact"}><li>CONTACT</li></Link>
            </ul>
        </div>
    )
}