export const isFunction = (functionToCheck) => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
};

export const isObject = (objectToCheck) => {
  return typeof objectToCheck === "object" && objectToCheck !== null;
};

export const isBoolean = (booleanToCheck) => {
  return booleanToCheck !== undefined && typeof booleanToCheck == "boolean";
};

export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};

export const detectMobileDevice = () => {
  return window.innerWidth < window.innerHeight;
}

const obj = {
  isFunction,
  isObject,
  isBoolean,
  updateObject,
  detectMobileDevice
};

export default obj;
