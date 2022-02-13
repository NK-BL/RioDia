import * as actionType from "../actionTypes/actionTypes.js";

export const loadSitemap = () => {
  return {
    type: actionType.LOAD_SITEMAP,
  };
};

export const detectDeviceType = () => {
  return {
    type: actionType.DETECT_DEVICE_TYPE,
  };
};