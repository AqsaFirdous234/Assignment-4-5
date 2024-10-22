import Image from "next/image";
import Picture from "../data/about.png"
export default function About(){
    return(
        <div className="about">
             <h1 className="about-us">
                About Me
            </h1>
            <h2>AQSA FIRDOUS</h2>
            <div className="info">
            <p className="para">
            I am a frontend developer with a passion for creating engaging and user-friendly web applications. With a keen eye for design and a strong foundation in technologies like HTML, CSS, and JavaScript, I strive to build intuitive interfaces that enhance the user experience. I am constantly learning and exploring new tools and frameworks to stay updated in this ever-evolving field
            </p>
            <div className="about-image">
               
            </div>
            </div>
           
        </div>
    )
}