import styled from "@emotion/styled";
import React from "react";
import { connect } from "react-redux";

const Page = props => {
    const PageContainer = props.IsMobile ? styled.div`
    height: 100%;
    width: 100%;
    padding: 15px;
    ` : styled.div`
    // height: 100%;
    // width: 100%;
    padding: 15px;
    `;

    return (
        <PageContainer>
            {props.children}
        </PageContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        IsMobile: state.layout.IsMobile,
    };
};

export default connect(mapStateToProps, null)(Page);