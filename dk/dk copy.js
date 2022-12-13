$(function () {
  console.log('game started');
  //const variable for slot images
  const game1 = 'images/1.jpg';
  const game2 = 'images/2.jpg';
  const game3 = 'images/3.jpg';
  const game4 = 'images/4.jpg';
  const game5 = 'images/5.jpg';
  const game6 = 'images/6.jpg';
  const game7 = 'images/7.jpg';
  const game8 = 'images/8.jpg';
  const game9 = 'images/9.jpg';
  const game10 = 'images/10.jpg';
  const game11 = 'images/11.jpg';
  const game12 = 'images/12.jpg';
  const game13 = 'images/13.jpg';

  //variables holding the slot vectors
  var reelA = $('#rollerA');
  var reelB = $('#rollerB');
  var reelC = $('#rollerC');

  //button
  var button = $('button');

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
    game13,
  ];

  //button starts the spinning (official game start)
  $('#spin').on('click', function () {
    $('img').addClass('blur');
    $('img').removeClass('shake');
    reelA.addClass('top2');
    reelB.addClass('top2');
    reelC.addClass('top3');

    //this number stops the function once the max number condition has been met
    var counter = 0;
    //function for slot one spin
    var setIntervalIdA = setInterval(function slotOne() {
      //counter adds one ever 10 milliseconds until it reaches 200
      counter++;
      //computer chooses a random number based on how many items are in array
      epromA = Math.floor(Math.random() * arr.length);
      //epromA = 5
      //random number is the index of the array that given time (changes every 10 milliseconds)
      $(reelA).attr('src', arr[epromA]);
      //console.log("spinning slot 1");
      //Once the counter variable reaches 200, reel one stops and diplays the current image based on the index of the array
      if (counter === 140) {
        //stopping the spin funcion
        var epromAA = 5;
        $(reelA).attr('src', arr[epromAA]);
        clearInterval(setIntervalIdA);
        console.log('slot stopped 1');
        //displaying the current image in reel one
        console.log(epromA);
        $('#rollerA').removeClass('blur');
        $('#rollerA').addClass('shake');
        $('#rollerA').removeClass('top2');
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
      $(reelB).attr('src', arr[epromB]);
      //console.log("spinning slot 2");
      if (counterB === 220) {
        var epromBB = 6;
        $(reelB).attr('src', arr[epromBB]);
        clearInterval(setIntervalIdB);
        console.log('slot stopped 2');
        console.log(epromB);
        $('#rollerB').removeClass('blur');
        $('#rollerB').addClass('shake');
        $('#rollerB').removeClass('top2');
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
      $(reelC).attr('src', arr[epromC]);
      //console.log("spinning slot 3");
      if (counterC === 400) {
        var epromCC = 2;
        $(reelC).attr('src', arr[epromCC]);
        clearInterval(setIntervalIdC);
        console.log('slot stopped 3');
        console.log(epromC);
        $('#rollerC').removeClass('blur');
        $('#rollerC').addClass('shake');
        $('#rollerC').removeClass('top3');
        console.log(epromA + ' ' + epromB + ' ' + epromC);
        //Play Table
        //SCOREBOARD
        //1. ***JACKPOT****
        if (epromA == 13 && epromB == 13 && epromC == 13) {
          console.log('축하합니당');
        }
        return;
        //end of last spin reel
      }
    }, 10);

    //restart
    $('#restart').on('click', function () {
      money = 100;
      $('#spin').attr('disabled', false);
      $(credits).text(money);
      $(credits).css('color', 'white');
    });
  });
  //end of document ready event
});
