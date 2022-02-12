import { updateObject } from "../../services/helperService.js";
import services from "../../services/serviceCollection.js";
import * as actionType from "../actionTypes/actionTypes";

const initialState = {
    Sitemap: [],
};

const layoutReducer = (state = initialState, action = "") => {

    switch (action.type) {
        case actionType.LOAD_SITEMAP:
            return updateObject(state, {
                Sitemap: services.sitemapService.loadSitemap(),
            });

        default:
    }
    return state;
};

export default layoutReducer;

