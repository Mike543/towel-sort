
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  let result = [];
  if (!matrix) {
    return [];
  }; 
  matrix.map((el, i) => {
    result = i % 2 == 0?result.concat(el):result.concat(el.reverse());
  });
  return result;
};
