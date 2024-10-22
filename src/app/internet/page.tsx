import Image from "next/image"
import Picture from "../data/Internet.png"
 export default function Internet(){
    return(
        <div className="parent">
            
            <div className="children">
           <h1 className="main">Internet</h1>
           <div className="image-cont">
                <Image src={Picture} alt="Picture" height={600}/>
            </div>
           <p className="paragraph"> The internet is a vast global network that connects millions of devices, revolutionizing the way we communicate, access information, and conduct business. It serves as a platform for sharing ideas, enabling real-time interactions through emails, social media, and video conferencing. From its humble beginnings as a military communication system, the internet has evolved into an essential part of daily life, impacting every aspect of society.

           With an abundance of resources available at our fingertips, the internet democratizes knowledge, allowing users to learn and explore diverse topics through articles, videos, and online courses. E-commerce has transformed retail, providing consumers with the convenience of shopping from anywhere at any time.

           However, the internet also presents challenges, including cybersecurity threats, privacy concerns, and the spread of misinformation. As we continue to rely on this powerful tool, understanding its implications and navigating it responsibly is vital for fostering a safe and informed digital environment</p>
            </div>
        </div>
    )
}