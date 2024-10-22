import Image from "next/image"
import Picture from "../data/AI.png"
export default function AI(){
    return(
        <div className="parent">
            
            <div className="children">
           <h1 className="main">Artificial Intelligence</h1>
            <div className="image-cont">
                <Image src={Picture} alt="Picture" height={600}/>
            </div>

           <p className="paragraph">Artificial Intelligence (AI) is a transformative field of computer science that enables machines to simulate human intelligence. By using algorithms and large datasets, AI systems can learn from experience, adapt to new inputs, and perform tasks that typically require human intelligence, such as decision-making, language processing, visual perception, and problem-solving. AI is divided into subsets like machine learning (ML), where computers improve their performance without being explicitly programmed, and deep learning, which uses neural networks to process vast amounts of data.

           AI is revolutionizing industries such as healthcare, where it aids in diagnostics and personalized treatments, finance, where it enhances fraud detection and algorithmic trading, and automotive, where it powers autonomous vehicles. While AI holds immense potential to improve efficiency and innovation, it also raises ethical considerations, such as bias in decision-making and job displacement. As AI continues to evolve, it promises to reshape the future of technology and human interaction.</p>
            </div>
        </div>
    )
}