import styled from "@emotion/styled";
import React from "react";
import { FaListUl, FaOutdent } from "react-icons/fa";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../state/actions/index";


const SideMenu = props => {
    const { expanded, setExpanded } = props;

    const isMobile = props.IsMobile;

    const SideMenuContainer = expanded ? (isMobile ? styled.div`
    background-color: #5a8d96;
    transition: all .2s ease-in-out;
    font-size: 1em;
    color: white;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    ` : styled.div`
    width: 250px;
    height: 100%;
    background-color: #5a8d96;
    transition: all .2s ease-in-out;
    font-size: 1.5em;
    color: white;
    `)
        :
        styled.div`
    width: 50px;
    height: 100%;
    background-color: #5a8d96;
    transition: all .2s ease-in-out;
    font-size: 1.5em;
    color: white;
    `;

    const ButtonContainer = isMobile ? styled.div`
    display: none;
    ` : styled.div`
    display: flex;
    justify-content: flex-end;
    `;

    const ExpandOrShrinkButton = isMobile ?
        styled.button`
    display: none;
    `
        : styled.button`
    background-color: transparent;
    color: white;
    border: 0px;
    font-size: 1em;
    right: 0px;
    &:hover {
        cursor: pointer;
      }
    `;

    const SideMenuList = isMobile ? styled.ul`
    appearance: none;
    list-style-type: none;
    color: white;
    margin: 0px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    font-size: 0.8em;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    ` : styled.ul`
    appearance: none;
    list-style-type: none;
    color: white;
    margin: 0px;
    padding: 15px;
    ` ;

    const SideMenuListElement = styled.li`
    appearance: none;
    color: white;
    transition: all .2s ease-in-out;
    margin-bottom: 20px;
    &:hover {
        transform: scale(1.1);
        text-shadow: 2px 2px 5px black;
      }
    `;

    const SideMenuLinkContent = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // margin-bottom: 20px;
    `;


    return (
        <SideMenuContainer>
            {!isMobile ? <ButtonContainer>
                <ExpandOrShrinkButton onClick={() => setExpanded(!expanded)}>
                    {expanded ? <FaOutdent /> : <FaListUl />}
                </ExpandOrShrinkButton>
            </ButtonContainer> : ""}
            <SideMenuList>
                {props.Sitemap.map((x, index) =>
                    <SideMenuListElement key={"li" + index}>
                        <Link to={x.Url}>
                            {expanded ?
                                <SideMenuLinkContent>
                                    {x.IconElement}
                                    &nbsp;&nbsp;
                                    {x.Title}
                                </SideMenuLinkContent>
                                :
                                <SideMenuLinkContent>
                                    {x.IconElement}
                                </SideMenuLinkContent>}
                        </Link>
                    </SideMenuListElement>)}
            </SideMenuList>

        </SideMenuContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        Sitemap: state.layout.Sitemap,
        IsMobile: state.layout.IsMobile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        LoadSitemap: () =>
            dispatch(actions.loadSitemap()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);