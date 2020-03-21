module.exports = class DepthCalculator {
    calculateDepth(arr) {
if (!Array.isArray(arr)) return Error;
var itog = 1;
for (let i = 0; i<arr.length; i++)
{
if (Array.isArray(arr[i]))
{
  arr = arr.flat(1);
  return itog = itog + this.calculateDepth(arr);
}
}
return itog;
}
};
