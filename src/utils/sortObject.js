/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
const sortObject = (object, asc = true) => Object.keys(object)
  .sort((a, b) => (asc ? a - b : b - a))
  .reduce((result, key) => {
    result[key] = object[key];
    return result;
  }, {});

export default sortObject;
