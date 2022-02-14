import styled from "@emotion/styled";
import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Page from "./Page";

const GalleryPage = props => {

    const Gallery = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    `;

    return (
        <Page>
            <Gallery>
                <ImageSlider sideMenuExpanded={props.sideMenuExpanded} />
            </Gallery>
        </Page>
    );
};

export default GalleryPage;