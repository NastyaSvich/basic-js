module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  obj = {};
  obj.turns = Math.pow(2, disksNumber) - 1;
  var q = turnsSpeed / 3600;
  obj.seconds = obj.turns / q;
  return obj;

}
