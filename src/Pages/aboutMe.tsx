import { useState } from 'react';

const AboutMe = () => {

      const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
      const openLightbox = (imageSrc: string) => {
        setSelectedImage(imageSrc);
      };
    
      const closeLightbox = () => {
        setSelectedImage(null);
      };

    return (
        <div className = "pages">
            <h3>
                About Me
            </h3>
            <img src="/liam-digital-portrait.jpeg" 
            alt="Liam Rayback artistic portrait" 
            className = "portrait"/>
            <p>
            A graduate of the University of Utah Software Development Bootcamp, currently working at a startup called Reko
            helping to implement a React Native upgrade as well as helping to fix bugs and implement general upkeep and upgrade features. 
            Having a diverse background in childcare, reception, retail, 
            newspaper delivery, customer service, and IT internships. This range of roles has fostered adaptability, problem-solving, 
            and strong communication skills—all essential traits for a successful computer programmer. Additionally, exposure to 
            business management at the college level during high school provides a unique understanding of project coordination and 
            organizational strategies. Volunteering at organizations like the Humane Society of Utah, Sunrise Assisted Living, and 
            various food pantries and homeless shelters has reinforced a sense of teamwork and responsibility, all of which contribute to 
            a well-rounded approach to software development.
            </p>
            <img src="bootcamp-diploma.jpeg" 
            alt="Liam Rayback holding his software development bootcamp diploma" 
            className = "clickable-image" 
            id="diploma"
            onClick={() => openLightbox("/bootcamp-diploma.jpeg")}
            />
            {selectedImage && (
            <div className="diploma-lightbox-overlay" onClick={closeLightbox}>
                <div className="diploma-lightbox-content">
                <img src={selectedImage} alt="Enlarged artwork" />
                <button className="close-button" onClick={closeLightbox}>×</button>
                </div>
            </div>
            )}
        </div>
    );
}

export default AboutMe;