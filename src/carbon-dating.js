const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  let itog = parseFloat(sampleActivity);
  if (( itog <= 0) || (itog > MODERN_ACTIVITY) || (typeof sampleActivity != "string") || isNaN(itog))
  {
   return false;
 }
 else {  return Math.ceil(Math.log(MODERN_ACTIVITY / itog) / (0.693 / HALF_LIFE_PERIOD));}

}
