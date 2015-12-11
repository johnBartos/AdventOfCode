var spark = require('./spark-md5.min.js');

var day4solution = (function(input) {

  function isASolution(key, match) {
    var md5 = spark.hash(key);
    var start = md5.substring(0, match.length);
    return start === match;
  }

  return {
    solve: function(match) {
      var start = 0;
      while(1) {
        var key = input + start;
        if(isASolution(key, match)) {
          return start;
        }
        start++;
      }
    },
  };

})('iwrupvqb');

console.log(day4solution.solve('00000'));
console.log(day4solution.solve('000000'));
