var day2Solution = (function(input) {
  var boxes = input.split('\r\n')
    .filter(function(line) {
       return line.length !== 0;
     });

  function getDimensions(boxString) {
    var box = boxString.split('x');
    return {
      l: parseInt(box[0]),
      w: parseInt(box[1]),
      h: parseInt(box[2]),
    };
  }

  return {
    part1: function() {
      var totalArea = 0;

      for(var i = 0; i < boxes.length; i++) {
        var box = getDimensions(boxes[i]);

        var lw = box.l * box.w;
        var wh = box.w * box.h;
        var hl = box.h * box.l;

        var area = 2 * (lw * wh * hl);
        var extra = Math.min(lw, wh, hl);

        totalArea += (area + extra);
      }

      return totalArea;
    },

    part2: function() {
      var totalLength = 0;

      for(var i = 0; i < boxes.length; i++) {
        var box = getDimensions(boxes[i]);

        var lw = box.l + box.w;
        var wh = box.w + box.h;
        var hl = box.h + box.l;

        var wrapLength = 2 * Math.min(lw, wh, hl);
        var volume = box.l * box.w * box.h;

        totalLength += (wrapLength + volume);
      }

      return totalLength;
    }
  };

})(getInput());

console.log(day2Solution.part1());
console.log(day2Solution.part2());

function getInput() {
  var fs = require('fs');
  return fs.readFileSync('day2input.txt', 'utf8');
}
