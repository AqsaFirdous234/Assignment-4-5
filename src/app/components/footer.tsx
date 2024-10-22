import { FaGithub, FaEnvelope , FaLinkedin } from 'react-icons/fa';
export default function Footer(){
    return(
      <footer className="footer">
       <div className="icon">
          <FaLinkedin size={30}  />
          <a href="https://www.linkedin.com/in/aqsa-firdous31">LinkedIn</a>
        <FaGithub size={30}  />
          <a href="https://github.com/AqsaFirdous234" >GitHub</a>
        </div>
        <hr />
        <div className="container">
        <p>&copy; {new Date().getFullYear()} . All rights reserved.</p>

        </div>
      </footer>
    )
}