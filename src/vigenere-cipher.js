class VigenereCipheringMachine {



    encrypt(input,keyword){
      input = input.toUpperCase();
      keyword = keyword.toUpperCase();

      var characters = {
                A: 0,
                B: 1,
                C: 2,
                D: 3,
                E: 4,
                F: 5,
                G: 6,
                H: 7,
                I: 8,
                J: 9,
                K: 10,
                L: 11,
                M: 12,
                N: 13,
                O: 14,
                P: 15,
                Q: 16,
                R: 17,
                S: 18,
                T: 19,
                U: 20,
                V: 21,
                W: 22,
                X: 23,
                Y: 24,
                Z: 25,
            };

    var result = "";
    var c;
    var keyword_index = 0;
    var N = characters.length;
  for (let symbol in input)
    {
         c = (input.indexOf(characters, symbol) +
            input.indexOf(characters, keyword[keyword_index])) % N;

        result += characters[c];

        keyword_index++;

        if ((keyword_index + 1) == keyword.length)
            keyword_index = 0;
    }

    return result;
}

    decrypt(input, keyword) {
      input = input.toUpperCase();
      keyword = keyword.toUpperCase();

    var characters = {
              A: 0,
              B: 1,
              C: 2,
              D: 3,
              E: 4,
              F: 5,
              G: 6,
              H: 7,
              I: 8,
              J: 9,
              K: 10,
              L: 11,
              M: 12,
              N: 13,
              O: 14,
              P: 15,
              Q: 16,
              R: 17,
              S: 18,
              T: 19,
              U: 20,
              V: 21,
              W: 22,
              X: 23,
              Y: 24,
              Z: 25,
          };

      var result = '';
      var keyword_index = 0;
      var p;
      var N = characters.length;
      for (let symbol in input)
      {
          p = (input.indexOf(characters, symbol) + N -
              input.indexOf(characters, keyword[keyword_index])) % N;

          result += characters[p];

          keyword_index++;

          if ((keyword_index + 1) == keyword.length)
              keyword_index = 0;
      }

      return result;
    }
}

module.exports = VigenereCipheringMachine;
