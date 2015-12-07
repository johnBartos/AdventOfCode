var containsVowels = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;

  word.split('').filter(function(letter) {
    if(vowels.indexOf(letter) !== -1) {
      count += 1;
    }
  });

  return count >= 3;
};

var hasRepeats = function(word) {
  for(var i = 1; i < word.length; i++) {
    if(word.charAt(i-1) === word.charAt(i)) {
      return true;
    }
  }
  return false;
};

var doesNotHaveBannedWords = function(word) {
  var bannedWords = ['ab', 'cd', 'pq', 'xy'];

  return bannedWords.every(function(element, index, array) {
    return word.indexOf(element) === -1;
  });
};

var hasPairs = function(word) {
  var currentPair;
  for(var i = 0; i < word.length; i++) {
    currentPair = word.slice(i, i+2);
    if(word.indexOf(currentPair, i+2) !== -1) {
      return true;
    }
  }
  return false;
};

var hasLetterBetweenRepeats = function(word) {
  for(var i = 2; i < word.length; i++) {
    if(word.charAt(i-2) === word.charAt(i)) {
      return true;
    }
  }
  return false;
};


var day5Solution = (function(input) {
  var splitInput = input.split('\r\n')
    .filter(function(line) {
       return line.length !== 0;
     });

  function isNice(word) {
    return function(element, index, array) {
      return element(word);
    };
  }

 return {
   solve: function(filters) {
     var niceCount = 0, word;

     for(var i = 0; i < splitInput.length; i++) {
       word = splitInput[i];
       if(filters.every(isNice(word))) {
         niceCount++;
       }
     }

     return niceCount;
    }
 };
})(getInput());

console.log(day5Solution.solve([containsVowels, hasRepeats, doesNotHaveBannedWords]));
console.log(day5Solution.solve([hasPairs, hasLetterBetweenRepeats]));

function getInput() {
  var fs = require('fs');
  return fs.readFileSync('day5input.txt', 'utf8');
}
