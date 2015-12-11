var day6Solution = (function(input) {

  var turnOn = function(startCoordinate, endCoordinate) {
    for(var i = startCoordinate.x; i <= endCoordinate.x; i++) {
      for(var j = startCoordinate.y; j <= endCoordinate.y; j++) {
        lights[i][j] = 1;
      }
    }
  };

})();

function getInput() {
  var fs = require('fs');
  return fs.readFileSync('day5input.txt', 'utf8');
}


var lights = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

var turnOn = function(startCoordinate, endCoordinate) {
  for(var i = startCoordinate.x; i <= endCoordinate.x; i++) {
    for(var j = startCoordinate.y; j <= endCoordinate.y; j++) {
      lights[i][j] = 1;
    }
  }
};

turnOn({x: 0, y: 0}, {x: 1, y:1});
console.log(lights);
