import React, {useState} from 'react';
import Arrow from "../../assets/arrow_carousel.png";
import "./slideshow.css";

const Slideshow = ({pictures}) => {
    const [index, setIndex] = useState(0);
    const pictureAmount = pictures.length;

    /**
     * Change the index of the picture to display the previous image
     */
    function previousImage() {
        setIndex(index === 0 ? pictureAmount - 1 : index - 1);
    }

    /**
     * Change the index of the picture to display the next image
     */
    function nextImage() {
        setIndex(index === pictureAmount - 1 ? 0 : index + 1);
    }

    return (
        <div className="slideshow" style={{backgroundImage: "url('" + pictures[index] + "')"}}>
            <div style={{display: pictureAmount <= 1 ? "none" : null}} className="slideshow-container">
                <div className="left-arrow-div">
                    <img onClick={previousImage} className="left-arrow" src={Arrow} alt="Flèche gauche"/>
                </div>
                <p>{index + 1}/{pictureAmount}</p>
                <div className="right-arrow-div">
                    <img onClick={nextImage} className="right-arrow" src={Arrow} alt="Flèche droite"/>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;