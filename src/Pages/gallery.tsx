const Gallery = () => {
    return (
        <div className="pages">
            <h1>Image Manipulation Gallery</h1>
            <div className="gallery">
                <div className="artwork">
                    <h3 id="artwork-header">Artwork</h3>
                    <img src="/Jonathan-card.jpg" alt="Jonathan the Debator a Magic the Gathering card" className="artwork-pieces" id="jonathan"></img>
                    <img src="/Phasmophobia-demon-art-lower-quality.jpg" alt="Phasmophobia demon art" className="artwork-pieces" id="phasmophobia"></img>
                    <img src="/lucio-ohs-lower-quality.jpg" alt="Lucio from Overwatch holding a box of lucio-ohs cereal" className="artwork-pieces" id="lucio"></img>
                    <img src="batman-final-lower-quality.jpg" alt="Batman in a comic book style" className="artwork-pieces" id="batman"></img>
                </div>
            </div>
        </div>
    )
}

export default Gallery;