$(function () {
  //슬롯 이미지
  var game1 = 'images/1.jpg';
  var game2 = 'images/2.jpg';
  var game3 = 'images/3.jpg';
  var game4 = 'images/4.jpg';
  var game5 = 'images/5.jpg';
  var game6 = 'images/6.jpg';
  var game7 = 'images/7.jpg';
  var game8 = 'images/8.jpg';
  var game9 = 'images/9.jpg';
  var game10 = 'images/10.jpg';
  var game11 = 'images/11.jpg';
  var game12 = 'images/12.jpg';
  var game13 = 'images/13.jpg';

  //슬롯 이미지 위치
  var reelA = $('#rollerA');
  var reelB = $('#rollerB');
  var reelC = $('#rollerC');

  //랜덤숫자(롤링횟수)
  var epromA;
  var epromB;
  var epromC;

  var epromAA = 5;
  var epromBB = 3;
  var epromCC = 2;

  //이미지 배열
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

  var isLogin = true; //로그인일시 true, 로그아웃중일시 false 값
  var $defaultButton = $('.slotMachinePrev');
  var $startButton = $('.slotMachineStarting');

  if (isLogin) {
    $startButton.show();
    $defaultButton.hide();
    machineStart();
  } else {
    $startButton.hide();
    $defaultButton.show();
  }

  var slotCount = $('.slotMachineStarting .slotCount');
  count = 3;
  slotCount.text('플로린 코인 ' + count + '개 소진');

  function machineStart() {
    //button starts the spinning (official game start)
    $('.slotMachineStarting').on('click', function () {
      if (count === 0) {
        alert('플로린 코인이 부족합니다.');
        slotCount.text('플로린 코인 ' + count + '개 소진');
        $('.evtPop').hide();
      } else if (count >= 1) {
        resetSlot();
        $('.slotMachineStarting').addClass('disabled');
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
            $(reelA).attr('src', arr[epromAA - 1]);
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
            $(reelB).attr('src', arr[epromBB - 1]);
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
            $(reelC).attr('src', arr[epromCC - 1]);
            clearInterval(setIntervalIdC);
            console.log('slot stopped 3');
            console.log(epromC);
            $('#rollerC').removeClass('blur');
            $('#rollerC').addClass('shake');
            $('#rollerC').removeClass('top3');
            setTimeout(function () {
              $('.slotMachineStarting').removeClass('disabled');
            }, 1000);
            console.log(epromA + ' ' + epromB + ' ' + epromC);

            //SCOREBOARD
            //1. ***JACKPOT****
            if (epromA == 13 && epromB == 13 && epromC == 13) {
              setTimeout(success, 1000);
            } else {
              setTimeout(fail, 1000);
            }
            return;
            //end of last spin reel
          }
        }, 10);

        count--;
        slotCount.text('플로린 코인 ' + count + '개 소진');
      }

      /* 슬롯 연속해서 돌릴시 리셋 */
      function resetSlot() {
        $('.evtPop').hide();
        $('.evtPop.build > div').hide();
        $('.evtPop.build .btn.close').hide();
      }

      /* 결과 */
      //레이어팝업:btn확인
      //팝업리셋
      $('.evtPop.build > div').hide();
      $('.evtPop.build .btn.close').hide();
      $('.btn.close').click(function () {
        $(this).parents('.evtPop').hide();
      });

      //레이어팝업:성공
      function success() {
        $('.evtPop.build').show();
        $('.evtPop.build .btn.close').show();
        $('.success').show();
        $('.fail').hide();
      }
      //레이어팝업:실패
      function fail() {
        $('.evtPop.build').show();
        $('.evtPop.build .btn.close').show();
        $('.fail').show();
        $('.success').hide();
      }
    });
  }
});
