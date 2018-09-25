
  var countclicks = 0;

  //Get hard by url
  var hardness = window.location['href'].split("?");
  //Hard
  if(hardness[1] === "easy")
  {
    var timediv = 3000;
    var goal = 15;
  }
  else if(hardness[1] === "midlevel")
  {
    var timediv = 1750;
    var goal = 30;
  }
  else if(hardness[1] === "hard")
  {
    var timediv = 1000;
    var goal = 60;
  }
  else if(hardness[1] === "infinity")
  {
    var timediv = 500;
    var goal = 99999;
  }
  else
  {
    window.location.href = "../index.html";
  }

  function startgame()
  {
    var timetoclick = performance.now();
    document.getElementById("start-button").setAttribute("onclick","null")
    document.getElementById("start-button").style.display = "none";
    //show board-game
    var boardelements = document.getElementsByClassName("board-element");
    var lengthboardelements = boardelements.length;
    for (i = 0; i < lengthboardelements; i++)
    {
      boardelements[i].style.display = 'block';
    }

    var block = document.getElementById("block");

    // Values to show and form
    document.getElementById("hardness").innerText = hardness[1].charAt(0).toUpperCase() + hardness[1].slice(1);
    document.getElementById("goal").innerText = goal;

    var interval = setInterval(appendDiv, timediv);
  }

  function appendDiv()
  {
    // Get random color
    var letters ="0123456789ABCDEF";
    var blockcolor = "#";
    for (var y = 0; y < 6; y++)
    {
      blockcolor += letters[Math.floor(Math.random() * 16)]
      ;
    }
    block.style.backgroundColor = blockcolor;
    block.style.visibility = "hidden";

    var ptop = Math.floor(Math.random() * (25 - 0) + 0);
    var pleft = Math.floor(Math.random() * (100 - 0) + 0);

    block.style.marginLeft = pleft+"%";
    block.style.marginTop = ptop+"%";

    block.style.visibility = "visible";
    block.setAttribute("onclick","goodclicks()");
  }

  // Counts clicks and notify goal
  function goodclicks()
  {
    ++countclicks;
    document.getElementById("countclicks").innerText = countclicks;
	  block.style.visibility = "hidden";
    if(countclicks === goal)
    {
      document.getElementById("scoreform").value = countclicks;
      document.getElementById("modeform").value = hardness[1];
      document.getElementById("finalgame").style.display = "block";
      clearInterval(interval);
    }
    block.setAttribute("onclick","null");
  }
