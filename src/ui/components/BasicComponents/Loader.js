import React from "react";
import LoadingOverlay from "react-loading-overlay";

const Loader = (props) => {
    return (
        <LoadingOverlay
            active={props.isLoading}
            fadeSpeed={250}
            spinner
            text={props.message}
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: "rgba(0,0,0,0.2)",
                    zIndex: 99000,
                }),
            }}
        >
            {props.children}
        </LoadingOverlay>
    );
}

export default Loader;
