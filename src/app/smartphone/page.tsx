import Image from "next/image"
import Picture from "../data/smartphone.jpg"
export default function Smartphone(){
    return(
        <div className="parent">
            
            <div className="children">
           <h1 className="main">SmartPhone</h1>
           <div className="image-cont">
                <Image src={Picture} alt="Picture" height={600}/>
            </div>
           <p className="paragraph">The  latest smartphone blends cutting-edge technology with sleek design, offering users an unparalleled mobile experience. With a stunning 6.7-inch OLED display, vibrant colors and sharp contrasts bring images and videos to life, making every moment visually captivating. Powered by an advanced processor, this smartphone ensures lightning-fast performance, seamlessly handling multitasking, gaming, and demanding applications.

           Capture every moment with a state-of-the-art triple-camera system, featuring a 108 MP main sensor for breathtaking photos, a wide-angle lens for expansive landscapes, and a macro lens for intricate close-ups. The device also boasts AI-enhanced photography, automatically optimizing settings for stunning results in any lighting.

            With 5G connectivity, enjoy ultra-fast download speeds and smooth streaming, keeping you connected wherever you go. The long-lasting battery supports all-day use, while quick-charging technology ensures you're back in action in no time. Experience the perfect blend of power, performance, and style with this innovative smartphone.</p>
            </div>
        </div>
    )
}