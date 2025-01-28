const Gallery = () => {
    return (
      <div className="pages">
        <h1>Image Manipulation Gallery</h1>
        <div className="gallery">
          <div className="artwork">
            <h3 id="artwork-header">Artwork</h3>
  
            <div className="artwork-piece" id="jonathan">
              <img
                src="/Jonathan-card.jpg"
                alt="Jonathan the Debator a Magic the Gathering card"
              />
              <p className="description">For this project, I took a blank card canvas and turned Jonathan into a Magic the Gathering card. I added his
                picture into the card, and added the card's name, type, and abilities. I also added the card's mana cost and power/toughness. To add the mana
                I had to cut out the mana symbols from other cards and paste them onto this card. I then created a custom symbol for the set that this card
                comes from, the mythic colored J in the middle.
              </p>
            </div>
  
            <div className="artwork-piece" id="phasmophobia">
              <img
                src="/Phasmophobia-demon-art-lower-quality.jpg"
                alt="Phasmophobia demon art"
              />
              <p className="description">For this project I touched up a piece of artwork from the internet to make it look crisp and clear.
                I added some lighting effects to make it look more dramatic. I then cut out the Phasmophobia official logo and pasted it up top,
                and added the text at the bottom. Originally this piece was created to be a print for a t-shirt, but I decided to modifiy it to be
                an art piece instead, print it up, and give it as a gift.
              </p>
            </div>
  
            <div className="artwork-piece" id="lucio">
              <img
                src="/lucio-ohs-lower-quality.jpg"
                alt="Lucio from Overwatch holding a box of Lucio-ohs cereal"
              />
              <p className="description">This piece includes an artwork of Lucio from the video game Overwatch. I added the text and 
                the styled border around it. I also had to cut out the box of lucio-oh's cereal from another image and add it into lucio's hand.
                to do this I had to cut out a piece of his hand on the image and create a copy of it to place over the box of cereal so that it
                looks like he is holding it. As always I also crisped up the image and touched up the lighting and color.
              </p>
            </div>
  
            <div className="artwork-piece" id="batman">
              <img
                src="batman-final-lower-quality.jpg"
                alt="Batman in a comic book style"
              />
              <p className="description">For this image i cut out the image of batman on the little tower from another image and added him into an image
                of the city. To make it look natural I had to extremely modify the lighting, color, saturation and contrast of the two images to make them
                fit together. I then blurred the city background and added styling to the image to make it look more like a comic book.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;
  