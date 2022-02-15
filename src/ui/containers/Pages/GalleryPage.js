import styled from "@emotion/styled";
import React from "react";
import { connect } from "react-redux";
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
                <ImageSlider sideMenuExpanded={props.sideMenuExpanded} IsMobile={props.IsMobile} />
            </Gallery>
        </Page>
    );
};

const mapStateToProps = (state) => {
    return {
        IsMobile: state.layout.IsMobile,
    };
};

export default connect(mapStateToProps, null)(GalleryPage);