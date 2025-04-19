import { useState } from 'react';

const Gallery = () => {
  const [selectedImageData, setSelectedImageData] = useState<{
    edited: string;
    original: string | null;
    description: string;
    title: string;
  } | null>(null);

  const openLightbox = (imageData: {
    edited: string;
    original: string | null;
    description: string;
    title: string;
  }) => {
    setSelectedImageData(imageData);
  };

  const closeLightbox = () => {
    setSelectedImageData(null);
  };

  return (
    <div className="pages">
      <h1>Image Manipulation Gallery</h1>
      <h4>Click an image for more information!</h4>
      <div className="gallery">
        <div className="artwork">
          <h3 id="artwork-header">Artwork</h3>
          

          <div className="artwork-piece" id="jonathan">
            <div 
              className="image-container"
              onClick={() => 
                openLightbox({
                  edited: "/Jonathan-card.jpg",
                  original: "/Jonathan-card-original.jpg",
                  description: "For this project, I took a blank card canvas and turned Jonathan into a Magic the Gathering card. I added his picture into the card, and added the card's name, type, and abilities. I also added the card's mana cost and power/toughness. To add the mana I had to cut out the mana symbols from other cards and paste them onto this card. I then created a custom symbol for the set that this card comes from, the mythic colored J in the middle.",
                  title: "Jonathan the Debator - Magic the Gathering Card"
                })
              }
            >
              <img
                src="/Jonathan-card.jpg"
                alt="Jonathan the Debator a Magic the Gathering card"
                className="clickable-image"
              />
              {/* <div className="overlay">
                <span className="description-text">Click to compare</span>
              </div> */}
            </div>
          </div>
  
          <div className="artwork-piece" id="phasmophobia">
            <div 
              className="image-container"
              onClick={() => 
                openLightbox({
                  edited: "/Phasmophobia-demon-art.jpg",
                  original: "/Phasmophobia-demon-art-original.jpg",
                  description: "For this project I touched up a piece of artwork from the internet to make it look crisp and clear. I added some lighting effects to make it look more dramatic. I then cut out the Phasmophobia official logo and pasted it up top, and added the text at the bottom. Originally this piece was created to be a print for a t-shirt, but I decided to modifiy it to be an art piece instead, print it up, and give it as a gift.",
                  title: "Phasmophobia: It's a Demon! Wait.. I'm dead."
                })
              }
            >
              <img
                src="/Phasmophobia-demon-art.jpg"
                alt="Phasmophobia demon art"
                className="clickable-image"
              />
              {/* <div className="overlay">
                <span className="description-text">Click to compare</span>
              </div> */}
            </div>
          </div>
  
          <div className="artwork-piece" id="lucio">
            <div 
              className="image-container"
              onClick={() =>
                openLightbox({
                  edited: "/lucio-ohs.jpg",
                  original: "/lucio-ohs-original.jpg",
                  description: "This piece includes an artwork of Lucio from the video game Overwatch. I added the text and the styled border around it. I also had to cut out the box of lucio-oh's cereal from another image and add it into lucio's hand. to do this I had to cut out a piece of his hand on the image and create a copy of it to place over the box of cereal so that it looks like he is holding it. As always I also crisped up the image and touched up the lighting and color.",
                  title: "Lucio-ohs"
                })
              }
            >
              <img
                src="/lucio-ohs.jpg"
                alt="Lucio from Overwatch holding a box of Lucio-ohs cereal"
                className="clickable-image"
              />
              {/* <div className="overlay">
                <span className="description-text">Click to compare</span>
              </div> */}
            </div>
          </div>
  
          <div className="artwork-piece" id="batman">
            <div 
              className="image-container"
              onClick={() =>
                openLightbox({
                  edited: "/batman.jpg",
                  original: "/batman-original.jpg",
                  description: "For this image i cut out the image of batman on the little tower from another image and added him into an image of the city. To make it look natural I had to extremely modify the lighting, color, saturation and contrast of the two images to make them fit together. I then blurred the city background and added styling to the image to make it look more like a comic book.",
                  title: "Batman in a comic book style"
                })
              }
            >
              <img
                src="/batman.jpg"
                alt="Batman in a comic book style"
                className="clickable-image"
              />
              {/* <div className="overlay">
                <span className="description-text">Click to compare</span>
              </div> */}
            </div>
          </div>

          <div className="artwork-piece" id="elspeth">
            <div 
            className="image-container"
            onClick={() =>
              openLightbox({
                edited: "/Elspeth-Forrest.jpg",
                original: "/Elspeth-Forrest-original.jpg",
                description: "For this project I created a flyer for Elspeth and Forrest's wedding. I added a picturen of them, the questions and answers for the FAQ, and multiple clipart images. I then formatted everything to look like a professional flyer.",
                title: "Elspeth and Forrest"
              })
            }
            >
              <img
                src="/Elspeth-Forrest.jpg"
                alt="Elspeth and Forrest"
                className="clickable-image"
              />
              {/* <div className="overlay">
                <span className="description-text">Click to compare</span>
              </div> */}
            </div>
          </div>
        </div>
        {selectedImageData && (
          <div className="comparison-lightbox-overlay" onClick={closeLightbox}>
            <div className="comparison-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="comparison-header">
                <h3>{selectedImageData.title}</h3>
                <button className="close-button" onClick={closeLightbox}>×</button>
              </div>
              
              <div className="comparison-images">
                {selectedImageData.original ? (
                  <>
                    <div className="original-image">
                      <h4>Original</h4>
                      <img src={selectedImageData.original} alt="Original artwork" />
                    </div>
                    <div className="edited-image">
                      <h4>My Edit</h4>
                      <img src={selectedImageData.edited} alt="Edited artwork" />
                    </div>
                  </>
                ) : (
                  <div className="placeholder-image">
                    <h4>My Edit</h4>
                    <img src={selectedImageData.edited} alt="Edited artwork" />
                    <p className="no-original-note">Original image not available for comparison</p>
                  </div>
                )}
              </div>
              
              <div className="comparison-description">
                <h4>Process Description</h4>
                <p>{selectedImageData.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )};
  
  export default Gallery;
  