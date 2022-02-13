import styled from "@emotion/styled";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../state/actions/index";
import ContentPanel from "../ContentPanel/ContentPanel";
import SideMenu from "../SideMenu/SideMenu";

const Layout = props => {

    props.LoadSitemap();

    var isMobile = props.IsMobile

    const LayoutContainer = isMobile ? styled.div`
display: flex;
height: 100%;
width: 100%;
flex-direction: column;
` : styled.div`
display: flex;
height: 100%;
width: 100%;
`;


    return (
        <LayoutContainer>
            <SideMenu />
            <ContentPanel />
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