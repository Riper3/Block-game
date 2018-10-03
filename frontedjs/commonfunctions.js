  export function randomColor()
  {
    // Get random color
    var letters ="0123456789ABCDEF";
    var blockcolor = "#";
    for (var y = 0; y < 6; y++)
    {
      blockcolor += letters[Math.floor(Math.random() * 16)];
    }
  }
