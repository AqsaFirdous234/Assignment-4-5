import Image from "next/image"
import Picture from "../data/computer.png"
export default function Computer(){
    return(
        <div className="parent">
            
            <div className="children">
           <h1 className="main">Computer</h1>
           <div className="picture">
                <Image src={Picture} alt="Picture" height={600}/>
            </div>
           <p className="paragraph">
           A computer is an essential electronic device designed to process, store, and retrieve data efficiently. At its core, a computer consists of hardware components, including the central processing unit (CPU), memory, storage, and input/output devices, all working in harmony to perform a variety of tasks. From desktops to laptops and tablets, computers come in various forms, catering to different user needs and preferences.

           Modern computers offer powerful processing capabilities, enabling users to run complex applications, create multimedia content, and connect to the internet for global communication and information access. With operating systems like Windows, macOS, and Linux, users can navigate seamlessly through their tasks, whether for work, education, or entertainment.

            Additionally, computers play a pivotal role in industries ranging from healthcare to finance, enhancing productivity and facilitating innovation. As technology continues to evolve, computers remain vital tools that empower individuals and organizations to thrive in an increasingly digital world.</p>
            </div>
        </div>
    )
}