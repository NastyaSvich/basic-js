module.exports = function getSeason(date) {
    if(!date){return 'Unable to determine the time of year!';}
  var q = date.getMonth();

  if (isNaN(date)) {return Error;}

      if (q==2 ||q==3 ||q==4) {
          return 'spring';
      }

      if (q==5 ||q==6 ||q==7) {
          return 'summer';
      }

      if (q==8 ||q==9 ||q==10) {
          return 'fall';
      }

      if (q==11 || q==0 || q==1) {
          return 'winter';
      }
};
