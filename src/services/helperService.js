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

const obj = {
  isFunction,
  isObject,
  isBoolean,
  updateObject,
};

export default obj;
