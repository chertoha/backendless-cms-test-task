export const sortArrayByObjectProp = (arr, prop) => {
  return [...arr].sort((prevObj, nextObj) => prevObj[prop] - nextObj[prop]);
};
