import { updateObject } from "../../services/helperService.js";
import services from "../../services/serviceCollection.js";
import * as actionType from "../actionTypes/actionTypes";

const initialState = {
    Sitemap: [],
    IsMobile: window.innerWidth < window.innerHeight,
};

const layoutReducer = (state = initialState, action = "") => {

    switch (action.type) {
        case actionType.LOAD_SITEMAP:
            return updateObject(state, {
                Sitemap: services.sitemapService.loadSitemap(),
            });

        case actionType.DETECT_DEVICE_TYPE:
            return updateObject(state, {
                IsMobile: services.helperService.detectMobileDevice(),
            });

        default:
    }
    return state;
};

export default layoutReducer;

