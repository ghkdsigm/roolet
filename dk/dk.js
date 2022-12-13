$(function () {
  console.log("game started");
  //const variable for slot images
  const game1 = "images/game_1.jpg";
  const game2 = "images/game_2.jpg";
  const game3 = "images/game_3.jpg";
  const game4 = "images/game_4.jpg";
  const game5 = "images/game_1.jpg";
  const game6 = "images/game_2.jpg";
  const game7 = "images/game_3.jpg";
  const game8 = "images/game_4.jpg";
  const game9 = "images/game_1.jpg";
  const game10 = "images/game_2.jpg";
  const game11 = "images/game_3.jpg";
  const game12 = "images/game_4.jpg";
  const game13 = "images/game_1.jpg";

  //variables holding the slot vectors
  var reelA = $("#a");
  var reelB = $("#b");
  var reelC = $("#c");

  //button
  var button = $("button");

  //credits
  var credits = $("#credits");
  var money = 100;
  $(credits).text(money);
  //Global random number variables
  var epromA;
  var epromB;
  var epromC;
  //array holding images
  const arr = [
    game1,
    game2,
    game3,
    game4,
    game5,
    game6,
    game7,
    game8,
    game9,
    game10,
    game11,
    game12,
    game13
  ];


  //button starts the spinning (official game start)
  $("#spin").on("click", function spin() {
    $("img").addClass("blur");

    $("img").removeClass("shake");

    $("#a").addClass("top2");
    $("#b").addClass("top2");
    $("#c").addClass("top3");

    //result display variable (led screen that shows what the player wins)
    var result = $("#result");
    //default display text

    $(result).css("color", "rgb(37, 37, 37)");
    //this number stops the function once the max number condition has been met
    var counter = 0;
    //function for slot one spin
    var setIntervalId = setInterval(function slotOne() {
      //counter adds one ever 10 milliseconds until it reaches 200
      counter++;
      //computer chooses a random number based on how many items are in array
      epromA = Math.floor(Math.random() * arr.length);
	  //epromA = 5
      //random number is the index of the array that given time (changes every 10 milliseconds)
      $(reelA).attr("src", arr[epromA]);
      //console.log("spinning slot 1");
      //Once the counter variable reaches 200, reel one stops and diplays the current image based on the index of the array
      if (counter === 140) {
        //stopping the spin funcion
		var epromAA = 5
		$(reelA).attr("src", arr[epromAA]);
        clearInterval(setIntervalId);
        console.log("slot stopped 1");		
        //displaying the current image in reel one
        console.log(epromA);
        //playing the stop sound after reel is finished spinning
        var reelStopA = new Audio(
          "https://freesound.org/data/previews/145/145441_2615119-lq.mp3"
        );
        reelStopA.play();
        $("#a").removeClass("blur");
        $("#a").addClass("shake");
        $("#a").removeClass("top2");
        return;
        //end of all functions for reel one
      }
      //this number determines how fast the reel spins (higher slower the RNG animation)
    }, 10);
    //======================// refer to reel one for explanation
    var counterB = 0;
    var setIntervalIdB = setInterval(function slotTwo() {
      counterB++;
      //epromB = Math.floor(Math.random() * arr.length);
	  epromB = Math.floor(Math.random() * arr.length);
      $(reelB).attr("src", arr[epromB]);
      //console.log("spinning slot 2");
      if (counterB === 220) {
        clearInterval(setIntervalIdB);
        console.log("slot stopped 2");
        console.log(epromB);
        var reelStopB = new Audio(
          "https://freesound.org/data/previews/145/145441_2615119-lq.mp3"
        );
        reelStopB.play();
        $("#b").removeClass("blur");
        $("#b").addClass("shake");
        $("#b").removeClass("top2");
        return;
      }
    }, 10);
    //====================//
    //***Reel 3 is compares wins in all variables and spits out score at return
    var counterC = 0;
    var setIntervalIdC = setInterval(function slotThree() {
      counterC++;
      //epromC = Math.floor(Math.random() * arr.length);
	  epromC = Math.floor(Math.random() * arr.length);
      $(reelC).attr("src", arr[epromC]);
      //console.log("spinning slot 3");
      if (counterC === 400) {
        clearInterval(setIntervalIdC);
        console.log("slot stopped 3");
        console.log(epromC);
        var reelStopC = new Audio(
          "https://freesound.org/data/previews/145/145441_2615119-lq.mp3"
        );
        reelStopC.play();
        $("#c").removeClass("blur");
        $("#c").addClass("shake");
        $("#c").removeClass("top3");
        $(result).css("color", "#fff");
        console.log(epromA + " " + epromB + " " + epromC);
        //Play Table
        //SCOREBOARD
        //1. ***JACKPOT****
        if (epromA == 13 && epromB == 13 && epromC == 13) {
          console.log("player wins 100 credits");
          money = money + 100;
          var bigWin = new Audio(
            "https://freesound.org/data/previews/270/270319_5123851-lq.mp3"
          );
          bigWin.play();
          $(credits).text(money);
          function jackpot() {
            $(result).text("WIN $" + 100);
          }
          jackpot();
        }
        //2. TRIPLE Cherries
        if (epromA == 1 && epromB == 1 && epromC == 1) {
          console.log("player wins 20 credits");
          money = money + 20;
          var bigWin = new Audio(
            "https://freesound.org/data/previews/387/387232_1474204-lq.mp3"
          );
          bigWin.play();
          $(credits).text(money);
          function cherries() {
            $(result).text("WIN $" + 20);
          }
          cherries();
        }
        //===========random wins =================/
        //BAR IN THE MIDDLE
        if (epromB == 0) {
          console.log("user wins 10 credits");
          money = money + 10;
          var winSound = new Audio(
            "https://freesound.org/data/previews/387/387232_1474204-lq.mp3"
          );
          winSound.play();
          $(credits).text(money);
          function bar() {
            $(result).text("WIN $" + 10);
          }
          bar();
        }
        //Diamond On One
        if (epromA == 1 || epromB == 1 || epromC == 1) {
          console.log("user wins 20 credits");
          money = money + 20;
          var winSound = new Audio(
            "https://freesound.org/data/previews/387/387232_1474204-lq.mp3"
          );
          winSound.play();
          $(credits).text(money);
          function diamondOnOne() {
            $(result).text("WIN $" + 20);
          }
          diamondOnOne();
        }
        return;
        //end of last spin reel
      }
    }, 10);

    money = money - 10;
    $(credits).text(money);
    if (money <= 0) {
      function zeroCredits() {
        money = 0;
        $(result).text("NO CREDITS");
        $(credits).text(0);
        $(credits).css("color", "red");
        $("#spin").attr("disabled", "disabled");
      }
      zeroCredits();
    }
    //end of click event

    //restart
    $("#restart").on("click", function () {
      money = 100;
      $("#spin").attr("disabled", false);
      $(credits).text(money);
      $(credits).css("color", "white");
    });
  });
  //end of document ready event
});
