import React from "react";
import Loadable from "react-loadable";
import Loader from "../components/BasicComponents/Loader";


let componentStore = {};

componentStore["HomePage"] = Loadable({
    loader: () =>
        import(
            "../containers/Pages/HomePage"
        ),
    loading() {
        return <Loader isLoading={true} />;
    },
});

componentStore["ContactPage"] = Loadable({
    loader: () =>
        import(
            "../containers/Pages/ContactPage"
        ),
    loading() {
        return <Loader isLoading={true} />;
    },
});

componentStore["GalleryPage"] = Loadable({
    loader: () =>
        import(
            "../containers/Pages/GalleryPage"
        ),
    loading() {
        return <Loader isLoading={true} />;
    },
});

componentStore["LocationPage"] = Loadable({
    loader: () =>
        import(
            "../containers/Pages/LocationPage"
        ),
    loading() {
        return <Loader isLoading={true} />;
    },
});

export default componentStore;
