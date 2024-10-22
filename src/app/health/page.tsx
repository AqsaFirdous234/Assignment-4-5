import Image from "next/image"
import Picture from "../data/health-tecnology.jpg"
export default function Health(){
    return(
        <div className="parent">
            
            <div className="children">
           <h1 className="main">Health Tecnology</h1>
           <div className="pictures">
                <Image src={Picture} alt="Picture" height={600}/>
            </div>
           <p className="paragraph">Health  technology encompasses a wide range of tools, devices, and software designed to improve the efficiency and quality of healthcare delivery. From electronic health records (EHRs) to telemedicine, these innovations enhance patient care and streamline administrative processes. Wearable devices, such as smartwatches and fitness trackers, empower individuals to monitor their health metrics in real-time, fostering proactive health management.

             Artificial intelligence and machine learning play a crucial role in diagnostics and treatment planning, enabling healthcare professionals to analyze vast amounts of data for more accurate decisions. Robotics in surgery enhances precision and reduces recovery times, while mobile health apps provide patients with convenient access to medical information and consultations.

             Moreover, health technology facilitates better communication between patients and providers, ensuring timely interventions and personalized care. As the healthcare landscape evolves, the integration of these technologies promises to revolutionize how we approach wellness, disease prevention, and treatment</p>
            </div>
        </div>
    )
}