import Link from "next/link"
export default function Home(){
  return(
    <div className="parent-container">
    <div className="child-container">
        <div className="image-container">
        
           </div>
            <h1 className="tittle">
                ARTIFICIAL INTELLIGENCE
             </h1>
            <p className="description">
            Artificial intelligence (AI) is the simulation of human intelligence in machines, enabling them to learn, reason, and solve problems. It powers applications like virtual assistants, autonomous vehicles, and data analysis tools.
            </p>
            <Link href={"/artifical-intelligence"}>
            <button className="button">Read More</button></Link>
    </div>
    <div className="child-container">
        <div className="image-containers">
        
           </div>
            <h1 className="tittle">
                SMARTPHONE
            </h1>
            <p className="description">
            A smartphone is a portable device that combines a mobile phone with advanced computing features, including internet access, apps, cameras, and multimedia. It supports communication through calls, messaging, and social media, while enabling web browsing, gaming, and productivity tasks.               
           </p>
            <Link href={"/smartphone"}>
            <button className="button">Read More</button></Link>
    </div>
    <div className="child-container">
        <div className="image">
        
           </div>
            <h1 className="tittle">
                INTERNET
            </h1>
            <p className="description">
            The internet is a global network of interconnected computers that enables the exchange of information and communication. It provides access to websites, email, social media, and various online services, revolutionizing how we work, learn, and connect worldwide
            </p>
            <Link href={"/internet"}>
            <button className="button">Read More</button></Link>
    </div>
    <div className="child-container">
        <div className="Picture">
        
           </div>
            <h1 className="tittle">
            COMPUTER
            </h1>
            <p className="description">
            Computers are electronic devices that process data and perform tasks based on instructions. They enable users to store information, run software applications, browse the internet, and handle complex calculations, making them essential tools for work, communication, and entertainment.
            </p>
            <Link href={"/computer"}>
            <button className="button">Read More</button></Link>
    </div>
    <div className="child-container">
        <div className="images-container">
        
           </div>
            <h1 className="tittle">
            SOCIAL MEDIA
            </h1>
            <p className="description">
          Social media refers to online platforms that enable users to create, share, and engage with content. These platforms foster communication, collaboration, and community-building through posts, messages, videos, and images, connecting people globally for personal, professional, and entertainment purposes.
            </p>
            <Link href={"/social-media"}>
            <button className="button">Read More</button></Link>
    </div>
    <div className="child-container">
        <div className="img-container">
        
           </div>
            <h1 className="tittle">
            HEALTH TECNOLOGY
            </h1>
            <p className="description">
               Health technology refers to the use of digital tools, devices, and innovations to improve healthcare delivery and outcomes. This includes telemedicine, wearable health trackers, electronic health records, and AI-driven diagnostics, enhancing patient care, treatment, and medical research.
            </p>
            <Link href={"/health"}>
            <button className="button">Read More</button></Link>
    </div>
    </div>
    
  )
}