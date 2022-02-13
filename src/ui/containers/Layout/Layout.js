import styled from "@emotion/styled";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../state/actions/index";
import ContentPanel from "../ContentPanel/ContentPanel";
import SideMenu from "../SideMenu/SideMenu";

const LayoutContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
@media (max-width: 1085px) {
    flex-direction: column;
  }
`;

const Layout = props => {

    props.LoadSitemap();

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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        LoadSitemap: () =>
            dispatch(actions.loadSitemap()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);