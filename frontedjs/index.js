var interval;

function randomcolor()
{
  var letters ="0123456789ABCDEF";
  var blockcolor = "#";
  for (var y = 0; y < 6; y++)
  {
    blockcolor += letters[Math.floor(Math.random() * 16)];
  }
  return blockcolor;
}
function indexeffects()
{
  var block = document.getElementById('index-block');
  block.style.backgroundColor = randomcolor();
  block.style.border = "solid 2px"+ randomcolor();
}

function stopindexeffects()
{
  clearInterval(interval);
}

function startindexeffects()
{
  interval = setInterval(indexeffects, 300);
}

window.onload = startindexeffects();
