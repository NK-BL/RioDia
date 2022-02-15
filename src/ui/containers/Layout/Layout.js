import styled from "@emotion/styled";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AirBNBLogo from "../../../assets/logo/airbnb.png";
import BookingLogo from "../../../assets/logo/booking.png";
import DeFlagLogo from "../../../assets/logo/de_flag.png";
import HrFlagLogo from "../../../assets/logo/hr_flag.png";
import RioDiaLogo from "../../../assets/logo/RioDia.png";
import UkFlagLogo from "../../../assets/logo/uk_flag.png";
import * as actions from "../../../state/actions/index";
import ContentPanel from "../ContentPanel/ContentPanel";
import SideMenu from "../SideMenu/SideMenu";

const Layout = props => {

    const [sideMenuExpanded, setSideMenuExpanded] = useState(true);

    React.useEffect(() => {
        function handleResize() {
            props.DetectDeviceType()
        }
        window.addEventListener('resize', handleResize)
    });

    props.LoadSitemap();

    var isMobile = props.IsMobile

    const HeaderAndContentContainer = isMobile ? styled.div`
         width: 100%;
         height: calc(100% - 40px);
    ` : styled.div`
    width: 100%;
`;

    const LayoutContainer = isMobile ? styled.div`
display: flex;
 height: 100%;
 width: 100%;
flex-direction: column;
background-image: url("images/primosten.jpg");
background-size: cover;
background-position: center;
` : styled.div`
display: flex;
height: 100%;
background-image: url("images/primosten.jpg");
background-size: cover;
background-position: center;
`;

    const Header = styled.div`
width: 100%;
height: 40px;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
display: flex;
justify-content: space-between;
align-items: center;
background-color: #d3f0f5;
`;

    const HeaderLogo = styled.img`
height: 30px;
padding-left: 5px;
transition: all .2s ease-in-out;
&:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

    const HeaderLogoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 15%;
    justify-content: space-between;
    height: 35px;
`;

    const LanguageFlagsContainer = styled.div`
display: flex;
align-items: center;
height: 15px;
// width: 25%;
// height: 20px;
justify-content: space-between;
padding-right: 15px;
padding-top: 5px;
padding-bottom: 5px;
`;


    const LanguageFlagLogo = styled.img`
height: 15px;
padding-left: 5px;
transition: all .2s ease-in-out;
&:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

    const BookingAndAirbnbContainer = styled.span`
display: flex;
`;


    return (
        <LayoutContainer>
            <SideMenu expanded={sideMenuExpanded} setExpanded={setSideMenuExpanded} />
            <HeaderAndContentContainer>
                <Header>
                    <HeaderLogoContainer>
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
                    <LanguageFlagsContainer>
                        {/* <a target="_blank" rel="noreferrer" href="#" title="English"> */}
                        <LanguageFlagLogo src={UkFlagLogo}></LanguageFlagLogo>
                        {/* </a> */}
                        {/* <a target="_blank" rel="noreferrer" href="#" title="Deutsch"> */}
                        <LanguageFlagLogo src={DeFlagLogo}></LanguageFlagLogo>
                        {/* </a> */}
                        {/* <a target="_blank" rel="noreferrer" href="#" title="Hrvatski"> */}
                        <LanguageFlagLogo src={HrFlagLogo}></LanguageFlagLogo>
                        {/* </a> */}
                    </LanguageFlagsContainer>
                </Header>
                <ContentPanel sideMenuExpanded={sideMenuExpanded} />
            </HeaderAndContentContainer>
        </LayoutContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        Sitemap: state.layout.Sitemap,
        IsMobile: state.layout.IsMobile,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        LoadSitemap: () =>
            dispatch(actions.loadSitemap()),
        DetectDeviceType: () =>
            dispatch(actions.detectDeviceType()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);