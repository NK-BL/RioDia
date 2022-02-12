import styled from "@emotion/styled";
import React, { useState } from "react";
import { FaListUl, FaOutdent } from "react-icons/fa";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { keyframes } from 'styled-components';
import * as actions from "../../../state/actions/index";


const SideMenu = props => {
    const [expanded, setExpanded] = useState(true);

    const SideMenuAnimation = keyframes`
    0% { width: 50px; }
    25% { width: 100px; opacity: 0.25; }
    50% { width: 150px; opacity: 0.5; }
    75% { width: 200px; opacity: 0.75; }
    100% { width: 250px; opacity: 1; }
   `;

    const SideMenuContainer = expanded ? styled.div`
    width: 250px;
    height: 100%;
    background-color: #5a8d96;
    transition: width 2s;
    font-size: 1.5em;
    color: white;
    animation-name: ${SideMenuAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;
    `
        :
        styled.div`
    width: 50px;
    height: 100%;
    background-color: #5a8d96;
    transition: width 2s;
    font-size: 1.5em;
    color: white;
    `;

    const ExpandOrShrinkButton = styled.button`
    background-color: transparent;
    color: white;
    border: 0px;
    width: 100%;
    font-size: 1.5em;
    &:hover {
        cursor: pointer;
      }
    `;

    const SideMenuList = styled.ul`
    appearance: none;
    list-style-type: none;
    color: white;
    margin: 0px;
    padding: 15px;
    `;

    const SideMenuListElement = styled.li`
    appearance: none;
    color: white;
    &:hover {
        transform: scale(1.2);
      }
    `;

    const SideMenuLinkContent = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    `;

    return (
        <SideMenuContainer>
            <ExpandOrShrinkButton onClick={() => setExpanded(!expanded)}>
                {expanded ? <FaOutdent /> : <FaListUl />}
            </ExpandOrShrinkButton>
            <SideMenuList>
                {props.Sitemap.map((x, index) =>
                    <SideMenuListElement key={"li" + index}>
                        <Link to={x.Url}>
                            <SideMenuLinkContent>
                                {x.IconElement}
                                {expanded ? x.Title : ""}
                            </SideMenuLinkContent>
                        </Link>
                    </SideMenuListElement>)}
            </SideMenuList>

        </SideMenuContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        Sitemap: state.layout.Sitemap
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        LoadSitemap: () =>
            dispatch(actions.loadSitemap()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);