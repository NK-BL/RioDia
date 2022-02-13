import styled from "@emotion/styled";
import React from "react";
import { connect } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import AirBNBLogo from "../../../assets/logo/airbnb.png";
import BookingLogo from "../../../assets/logo/booking.png";
import RioDiaLogo from "../../../assets/logo/RioDia.png";
import ContactPage from "../Pages/ContactPage";
import GalleryPage from "../Pages/GalleryPage";
import HomePage from "../Pages/HomePage";
import LocationPage from "../Pages/LocationPage";

const Panel = styled.div`
height: 100%;
width: 100%;
background-color: white;
`;

const Header = styled.div`
width: 100%;
height: 40px;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
display: flex;
align-items: center;
`;

const HeaderLogo = styled.img`
padding-left: 10px;
height: 35px;
&:hover {
    transform: scale(1.2);
  }
`;

const HeaderLogoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 15%;
    justify-content: space-between;
`;

const BookingAndAirbnbContainer = styled.span`
display: flex;
`;

const ContentPanel = (props) => {
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
                    element={<GalleryPage />}
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
        <Header>
            <HeaderLogoContainer>
                {props.IsMobile ? "mobilni" : "komp"}
                <Link to="/">
                    <HeaderLogo src={RioDiaLogo}></HeaderLogo>
                </Link>
                <BookingAndAirbnbContainer>
                    <a target="_blank" rel="noreferrer" href="https://www.booking.com/hotel/hr/riodia-seaview-stay.hr.html" title="Booking">
                        <HeaderLogo src={BookingLogo}></HeaderLogo>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.airbnb.com/rooms/49947504?source_impression_id=p3_1644697293_Z3sHT8CPvdeOc%2FPo" title="Airbnb">
                        <HeaderLogo src={AirBNBLogo}></HeaderLogo>
                    </a>
                </BookingAndAirbnbContainer>
            </HeaderLogoContainer>
        </Header>
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
