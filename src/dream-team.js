module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
  var b="";
  var c="";
  for (let a of members) {
  if (typeof a == "string") {
  a=a.toUpperCase().replace(/^\s*/,'');
  a=a.replace(/\[|\]/, '');
  b+=a.substr(0, 1);}}
  c=b.split("").sort().join("");
  return c;
  }
  else {return false;}
  };
