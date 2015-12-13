var getCoordinates = function(line, start, end) {
  var split = line.split(' ');
  var startCoords = split[start].split(',');
  var endCoords = split[end].split(',');

  return {
    start: {
      x: parseInt(startCoords[0]),
      y: parseInt(startCoords[1])
    },
    end: {
      x: parseInt(endCoords[0]),
      y: parseInt(endCoords[1])
    }
  };
};

var makeCommand = function(line) {
  console.log(line);
  line = line.trim();
  var action;
  var coordinates;

  if(line.indexOf('on') !== -1) {
    action = function() {
      return 1;
    };
    coordinates = getCoordinates(line, 2, 4);
  }
  else if(line.indexOf('off') !== -1) {
    action = function() {
      return 0;
    };
    coordinates = getCoordinates(line, 2, 4);
  }
  else if(line.indexOf('toggle') !== -1) {
    action = function(currentValue) {
      var val = currentValue || 0;
      return !val;
    };
    coordinates = getCoordinates(line, 1, 3);
  }

  return {
    action: action,
    start: coordinates.start,
    end: coordinates.end
  };
};

var day6Solution = (function(input) {
  var lights = (function(size) {
    var grid = [];
    while(size--) {
      grid.push([]);
    }
    return grid;
  })(1000);

  function runLights(command) {
    for(var i = command.start.x; i <= command.end.x; i++) {
      for(var j = command.start.y; j <= command.end.y; j++) {
        lights[i][j] = command.action(lights[i][j]);
        }
      }
    }

  function countOn() {
    var count = 0;
    for(var i = 0; i < 1000; i++) {
      for(var j = 0; j < 1000; j++)   {
        count += lights[i][j] || 0;
        }
      }
      return count;
    }
    
  return {
    part1: function() {
      console.log(input);
      for(var i in input) {
        runLights(makeCommand(input[i]));
      }
      return countOn();
    }
  };
})(getInput());

console.log(day6Solution.part1());

function getInput() {
  var fs = require('fs');
  return fs.readFileSync('day6input.txt', 'utf8').split('\r\n')
    .filter(function(line) {
       return line.length !== 0;
   });
}
