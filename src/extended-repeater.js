module.exports = function repeater(str, options) {
  var q=[];
if(options.repeatTimes == undefined ) {options.repeatTimes = 0;}
if(options.additionRepeatTimes == undefined ) {options.additionRepeatTimes = 0;}
if(options.separator == undefined ) {options.separator = '+';}
if(options.additionSeparator == undefined) {options.additionSeparator = '|';}


if(options.repeatTimes == 0){
  return  str += options.addition;
}

for(var a=0;a<options.repeatTimes;a++){
q+=str;

for(var m=0;m<options.additionRepeatTimes;m++){
q+=options.addition;
if (m<options.additionRepeatTimes-1)
{
  q+=options.additionSeparator;
}
}
if (a<options.repeatTimes-1)
{
q+=options.separator;
}
}
return q;
}
