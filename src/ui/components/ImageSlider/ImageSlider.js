import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "images/299415146.jpg" },
    { url: "images/299415167.jpg" },
    { url: "images/299415211.jpg" },
    { url: "images/299415213.jpg" },
    { url: "images/299415083.jpg" },
    { url: "images/299415090.jpg" },
    { url: "images/299415091.jpg" },
    { url: "images/299415099.jpg" },
    { url: "images/299415111.jpg" },
    { url: "images/299415141.jpg" },
    { url: "images/299415238.jpg" },
    { url: "images/299415245.jpg" },
    { url: "images/299634439.jpg" },
    { url: "images/299835414.jpg" },
    { url: "images/299835936.jpg" },
    { url: "images/299836732.jpg" },
    { url: "images/299844447.jpg" },
    { url: "images/299844627.jpg" },
    { url: "images/299844629.jpg" },
    { url: "images/299844634.jpg" },
    { url: "images/299844648.jpg" },
    { url: "images/299844650.jpg" },
    { url: "images/299844691.jpg" }
];

const ImageSlider = props => {

    return (
        <SimpleImageSlider
            width={props.sideMenuExpanded ? window.innerWidth - 400 : window.innerWidth - 400}
            height={props.sideMenuExpanded ? parseFloat((window.innerWidth - 400)) / 1.78 : parseFloat((window.innerWidth - 400)) / 1.78}
            images={images}
            showBullets={true}
            showNavs={true}
        />
    );
};

export default ImageSlider;