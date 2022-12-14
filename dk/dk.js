// 변수 count = 보유 코인 값 //
// 변수 epromAA = 첫번째 슬롯 확률 값 //
// 변수 epromBB = 첫번째 슬롯 확률 값 //
// 변수 epromCC = 첫번째 슬롯 확률 값 //
// 변수 isLogin = 로그인 여부 값 Boolean //

$(function () {
  //슬롯 이미지
//   var game1 = 'images/1.jpg';
//   var game2 = 'images/2.jpg';
//   var game3 = 'images/3.jpg';
//   var game4 = 'images/4.jpg';
//   var game5 = 'images/5.jpg';
//   var game6 = 'images/6.jpg';
//   var game7 = 'images/7.jpg';
//   var game8 = 'images/8.jpg';
//   var game9 = 'images/9.jpg';
//   var game10 = 'images/10.jpg';
//   var game11 = 'images/11.jpg';
//   var game12 = 'images/12.jpg';
//   var game13 = 'images/13.jpg';
  var game1 = 'images/game_1.jpg';
  var game2 = 'images/game_2.jpg';
  var game3 = 'images/game_3.jpg';
  var game4 = 'images/game_4.jpg';
  var game5 = 'images/game_1.jpg';
  var game6 = 'images/game_2.jpg';
  var game7 = 'images/game_3.jpg';
  var game8 = 'images/game_4.jpg';

  //슬롯 이미지 위치
  var reelA = $('#rollerA');
  var reelB = $('#rollerB');
  var reelC = $('#rollerC');

  //랜덤숫자(롤링횟수)
  var epromA;
  var epromB;
  var epromC;

  var epromAA = 3; //확률 값 넣기
  var epromBB = 3; //확률 값 넣기
  var epromCC = 3; //확률 값 넣기

  //롤링등장 시간
  var showRoolet1 = 140;
  var showRoolet2 = 280;
  var showRoolet3 = 400;

  //이미지 배열
//   const arr = [
//     game1,
//     game2,
//     game3,
//     game4,
//     game5,
//     game6,
//     game7,
//     game8,
//     game9,
//     game10,
//     game11,
//     game12,
//     game13,
//   ];
  var arr = [
    game1,
    game2,
    game3,
    game4,
    game5,
    game6,
    game7,
    game8
  ];

  var isLogin = true; //로그인일시 true, 로그아웃중일시 false 값
  var $defaultButton = $('.slotMachinePrev');
  var $startButton = $('.slotMachineStarting');

  //로그인 여부
  if (isLogin) {
    $startButton.show();
    $defaultButton.hide();
    machineStart();
  } else {
    $startButton.hide();
    $defaultButton.show();
  }

  var slotCount = $('.slotMachineStarting .slotCount');
  count = 333; //보유 코인수
  slotCount.text('플로린 코인 ' + count + '개 소진');

  function machineStart() {
    $('.slotMachineStarting').on('click', function () {
	  $('.slotMachineStarting').off(); //단 한번만 실행시키기
      if (count === 0) {
        alert('플로린 코인이 부족합니다.');
        slotCount.text('플로린 코인 ' + count + '개 소진');
        $('.evtPop').hide();
      } else if (count >= 1) {
        resetSlot();	
		spinRoolet()
		$('.reels').find('img').removeClass('on')
		
        $('.slotMachineStarting').addClass('disabled');
        $('img').addClass('blur');
        $('img').removeClass('shake');
        $('.reels').removeClass('on');
		$('.reels').removeClass('default');
		$('.list').show();

        //bangDel($('.reels'));
        reelA.addClass('top2');
        reelB.addClass('top2');
        reelC.addClass('top3');

        // 첫번째 릴
        var counterA = 0;		
        var setIntervalIdA = setInterval(function () {
          counterA++;
          //epromA = Math.floor(Math.random() * arr.length);
          //랜덤숫자
          //$(reelA).attr('src', arr[epromA]);
		  
          if (counterA === showRoolet1) {
            //회전 멈추는 시점
            $(reelA).attr('src', arr[epromAA - 1]);
            clearInterval(setIntervalIdA);
            console.log('slot stopped 1');
            //현재 이미지 보여주는 시점
            //console.log(epromA);
            $('#rollerA').removeClass('blur');
            $('#rollerA').addClass('shake on');
            $('#slotA').addClass('on');
			$('#slotA').find('.list').hide()
            $('#rollerA').removeClass('top2');
            bang($('#slotA'));
            return;
          }
        }, 10);

        // 두번째 릴
        var counterB = 0;
        var setIntervalIdB = setInterval(function () {
          counterB++;
          //epromB = Math.floor(Math.random() * arr.length);
          //epromB = Math.floor(Math.random() * arr.length);
          //$(reelB).attr('src', arr[epromB]);

          if (counterB === showRoolet2) {
            $(reelB).attr('src', arr[epromBB - 1]);
            clearInterval(setIntervalIdB);
            console.log('slot stopped 2');
            //현재 이미지 보여주는 시점
			//console.log(epromB);
            $('#rollerB').removeClass('blur');
            $('#rollerB').addClass('shake on');
            $('#slotB').addClass('on');
			$('#slotB').find('.list').hide()
            $('#rollerB').removeClass('top2');
            bang($('#slotB'));
            return;
          }
        }, 10);

        // 세번째 릴
        var counterC = 0;
        var setIntervalIdC = setInterval(function () {
          counterC++;
          //epromC = Math.floor(Math.random() * arr.length);
          //$(reelC).attr('src', arr[epromC]);

          if (counterC === showRoolet3) {
            $(reelC).attr('src', arr[epromCC - 1]);
            clearInterval(setIntervalIdC);
            console.log('slot stopped 3');
            //현재 이미지 보여주는 시점
			//console.log(epromC);
            $('#rollerC').removeClass('blur');
            $('#rollerC').addClass('shake on');
            $('#slotC').addClass('on');
			$('#slotC').find('.list').hide()
            $('#rollerC').removeClass('top3');
            bang($('#slotC'));

            setTimeout(function () {
              $('.slotMachineStarting').removeClass('disabled');
            }, 1000);
            console.log(epromA + ' ' + epromB + ' ' + epromC);

            //***3개 슬롯 다 맞을경우****
            if (epromAA === epromBB && epromBB === epromCC) {
              setTimeout(success, 1000);
            } else {
              setTimeout(fail, 1000);
            }
            return;
          }
        }, 10);

        count--; //코인 수 줄이기
        slotCount.text('플로린 코인 ' + count + '개 소진');
      }

      /* 슬롯 연속해서 돌릴시 리셋 */
      function resetSlot() {
        $('.evtPop').hide();
        $('.evtPop.build > div').hide();
        $('.evtPop.build .btn.close').hide();
      }

      /* 폭죽태그 추가 */
      function bang(ele) {
        ele.append(
          "<div class='pyro'><div class='after'></div><div class='before'></div></div>"
        );
      }

	  /* 회전 */
	  function spinRoolet(){
		for(var i = 0; i < showRoolet3/21; i++){				
			var slotAfterAction = function () {
				var firstChild = $('.list li:first-child');
					lastChild = $('.list li:last-child');
					// 첫째 목록을 마지막으로 이동
					firstChild = $('li:first-child', this);
					$(this).append(firstChild);
					$(this).css({ marginBottom: "0px" });		
			}
			$('.list').animate({ marginBottom: "-774px" }, 210, 'linear', slotAfterAction)
		}
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
