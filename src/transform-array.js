module.exports = function transform(arr) {
if(!Array.isArray(arr)) {throw new Error;}

var itog = [];
for(let i=0; i<arr.length; i++)
{
if (arr[i] == '--discard-next')
{
 i++;
}
else if (arr[i] == '--discard-prev')
{
itog.pop();
}
else if (arr[i] == '--double-next')
{
  if (i + 1 !== arr.length)
  itog.push(arr[i + 1]);
}
else if (arr[i] == '--double-prev')
{
  if (i - 1 >= 0)
  itog.push(arr[i - 1]);
}
else {itog.push(arr[i]);}
}
return itog;
};
