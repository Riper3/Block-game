var countclicks = 0;
var timeclicks = 1;
var interval;
var timediv;
var seconds = 0;
//Get hard by url
var hardness = window.location['href'].split("?");

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

  function startgame()
  {
    //Hard
    if(hardness[1] === "easy")
    {
      timediv = 3000;
      var goal = 15;
    }
    else if(hardness[1] === "midlevel")
    {
      timediv = 1750;
      var goal = 30;
    }
    else if(hardness[1] === "hard")
    {
      timediv = 1000;
      var goal = 60;
    }
    else if(hardness[1] === "infinity")
    {
      timediv = 3000;
      var goal = 99999;
    }
    else
    {
      window.location.href = "../index.html";
    }

    var timetoclick = performance.now();
    var button = document.getElementById("start-button");
    button.setAttribute("onclick","null")
    button.style.display = "none";
    document.getElementsByTagName("h2")[0].style.display = "none";
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

    intervalseconds = setInterval(countseconds, 1000);
    interval = setInterval(appendDiv, timediv);
  }

  function appendDiv()
  {
    if (timeclicks === 1)
    {
      timeclicks = 0;
      // Get random color
      block.style.backgroundColor = randomcolor();
      block.style.border = "solid 2px"+ randomcolor();
      block.style.visibility = "hidden";

      var ptop = Math.floor(Math.random() * (25 - 0) + 0);
      var pleft = Math.floor(Math.random() * (90 - 0) + 0);

      block.style.marginLeft = pleft+"%";
      block.style.marginTop = ptop+"%";

      block.style.visibility = "visible";
      block.setAttribute("onclick","goodclicks()");

      if(hardness[1] === "infinity")
      {
        timediv = timediv - (timediv * 0.05);
        clearInterval(interval);
        interval = setInterval(appendDiv, timediv);
      }
    }
    else
    {
      block.style.visibility = "hidden";
      document.getElementById("scoreform").value = countclicks;
      document.getElementById("modeform").value = hardness[1];
      document.getElementById("timeform").value = seconds;
      document.getElementById("finalgame").style.display = "block";
      clearInterval(interval);
      clearInterval(intervalseconds);
    }
  }

  // Counts clicks and notify goal
  function goodclicks()
  {
    ++timeclicks;
    ++countclicks;
    document.getElementById("countclicks").innerText = countclicks;
	  block.style.visibility = "hidden";
    if(countclicks == goal.innerHTML)
    {
      document.getElementById("scoreform").value = countclicks;
      document.getElementById("modeform").value = hardness[1];
      document.getElementById("timeform").value = seconds;
      document.getElementById("finalgame").style.display = "block";
      clearInterval(interval);
      clearInterval(intervalseconds);
    }
    block.setAttribute("onclick","null");
  }

  function restartgame()
  {
    document.getElementById("finalgame").style.display = "none";
    timeclicks = 1;
    countclicks = 0;
    seconds = 0;
    startgame();
  }

  function countseconds()
  {
    seconds++;
  }

  function validatename()
  {
    var name = document.getElementById('nameform').value;
    var score = document.getElementById('scoreform').value;
    if(name == '')
    {
      var error = document.getElementById('form-error');
      error.innerHTML = "The name can't be empty";
      return false;
    }
    if(score == 0)
    {
      var error = document.getElementById('form-error');
      error.innerHTML = "The score can't be 0";
      return false;
    }
  }
