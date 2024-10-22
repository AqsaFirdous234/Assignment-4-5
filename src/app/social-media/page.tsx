import Image from "next/image"
import Picture from "../data/social-media.png"

export default function SocialMedia(){
    return(
        <div className="parent">
            
            <div className="children">
           <h1 className="main">Social Media</h1>
           <div className="image-cont">
                <Image src={Picture} alt="Picture" height={600}/>
            </div>
           <p className="paragraph"> Social media is a dynamic digital landscape that connects billions of people worldwide, enabling them to share ideas, experiences, and information in real time. Platforms like Facebook, Twitter, Instagram, and TikTok foster community and engagement, allowing users to express themselves through text, images, and videos. With its interactive nature, social media facilitates communication across distances, bridging gaps between friends, family, and even strangers.

          Businesses leverage social media to enhance brand visibility, engage with customers, and drive sales. Targeted advertising and analytics tools allow companies to reach their desired audiences effectively, making it a powerful marketing platform. Additionally, social media serves as a hub for news and trends, influencing public opinion and shaping cultural movements.

            However, the rise of social media also presents challenges, such as the spread of misinformation and concerns about privacy. As we navigate this ever-evolving landscape, understanding its impact on society is crucial for responsible and meaningful engagement</p>
            </div>
        </div>
    )
}