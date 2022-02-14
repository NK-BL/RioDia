import styled from "@emotion/styled";
import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ContactPage from "../Pages/ContactPage";
import GalleryPage from "../Pages/GalleryPage";
import HomePage from "../Pages/HomePage";
import LocationPage from "../Pages/LocationPage";

const ContentPanel = (props) => {

    const Panel = props.IsMobile ? styled.div`
width: 100%;
height: 100%;
background-color: rgba(211, 240, 245, 0.9);
`: styled.div`
 height: calc(100% - 40px);
 width: 100%;
 background-color: rgba(211, 240, 245, 0.9);
`;

    const getRoutes = () => {
        if (
            props.Sitemap === undefined ||
            props.Sitemap === null ||
            props.Sitemap.length === 0
        )
            return <></>;

        return (
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route

                    path="/Gallery"
                    element={<GalleryPage sideMenuExpanded={props.sideMenuExpanded} />}
                />
                <Route

                    path="/Contact"
                    element={<ContactPage />}
                />
                <Route

                    path="/Location"
                    element={<LocationPage />}
                />
            </Routes>
        );
    };

    return <Panel onClick={props.onClick}>
        {getRoutes()}
    </Panel>;
};

const mapStateToProps = (state) => {
    return {
        Sitemap: state.layout.Sitemap,
        IsMobile: state.layout.IsMobile,
    };
};

export default connect(mapStateToProps, null)(ContentPanel);
