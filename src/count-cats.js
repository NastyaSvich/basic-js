  module.exports = function countCats(matrix) {
  var count=0;

  for (let a of matrix) {
  for (let b of a) {
  if (b=="^^") count++;
  }
  }

  return count;
  };
