$(function () {
	function slotRoller(spd, selector) {
	  var speed1 =
	    selector === '#slot_box1 .list'
	      ? 5
	      : Math.floor(Math.random() * 2 + 1) + 1; // slot 회전 속도
	  var speed2 =
	    selector === '#slot_box2 .list'
	      ? 60
	      : Math.floor(Math.random() * 2 + 1) + 1; // slot 회전 속도
	  var speed3 =
	    selector === '#slot_box3 .list'
	      ? 130
	      : Math.floor(Math.random() * 2 + 1) + 1; // slot 회전 속도
  
	  //var speed = 10; // slot 회전 속도
  
	  var slotAfterAction = function () {
		var firstChild = $('.list li:first-child');
		lastChild = $('.list li:last-child');
		// 첫째 목록을 마지막으로 이동
		firstChild = $('li:first-child', this);
		$(this).append(firstChild);
		$(this).css({ left: '0' });
  
		// 현재 심볼 번호
		var symbol_no1 = $('li:nth-child(1)', '#slot_box1').attr('data-roll');
		var symbol_no2 = $('li:nth-child(1)', '#slot_box2').attr('data-roll');
		var symbol_no3 = $('li:nth-child(1)', '#slot_box3').attr('data-roll');
		$('#symbol_no1').html('symbol No: ' + symbol_no1);
		$('#symbol_no2').html('symbol No: ' + symbol_no2);
		$('#symbol_no3').html('symbol No: ' + symbol_no3);
	  };
  
	  var calcSpeed1 = speed1 + (spd * 20 + spd);
	  var calcSpeed2 = speed2 + (spd * 20 + spd);
	  var calcSpeed3 = speed3 + (spd * 20 + spd);
  
	  // slot 목록 순환
	  if (selector === '#slot_box1 .list') {
		$('#slot_box1 .list')
		  .animate({ left: '520px' }, calcSpeed1, 'linear', slotAfterAction)
		  .promise()
		  .done(function () {
			$(this).addClass('on');
			slotMachineFinish(selector, spd);
		  });
	  }
	  if (selector === '#slot_box2 .list') {
		$('#slot_box2 .list')
		  .animate({ left: '520px' }, calcSpeed2, 'linear', slotAfterAction)
		  .promise()
		  .done(function () {
			$(this).addClass('on');
  
			slotMachineFinish(selector, spd);
		  });
	  }
	  if (selector === '#slot_box3 .list') {
		$('#slot_box3 .list')
		  .animate({ left: '520px' }, calcSpeed3, 'linear', slotAfterAction)
		  .promise()
		  .done(function () {
			$(this).addClass('on');
  
			slotMachineFinish(selector, spd);
		  });
	  }
	  // $(selector)
	  //   .animate(
	  //     { left: '520px' },
	  //     speed + (spd * 30 + spd),
	  //     'linear',
	  //     function () {
	  //       // 첫째 목록을 마지막으로 이동
	  //       firstChild = $('li:first-child', this);
	  //       $(this).append(firstChild);
	  //       $(this).css({ left: '0' });
  
	  //       // 현재 심볼 번호
	  //       var symbol_no1 = $('li:nth-child(1)', '#slot_box1').attr('data-roll');
	  //       $('#symbol_no1').text('symbol No:' + symbol_no1);
	  //     }
	  //   )
	  //   .promise()
	  //   .done(function () {
	  //     $(this).addClass('on');
  
	  //     slotMachineStarting(selector);
	  //   });
	}
  
	/* 슬롯 객체를 정의 */
	function Slot_roll(slotName) {
	  this.dice = function (v) {
		/* 주사위확률 정하기 */
		var dice1 = Math.floor(Math.random() * (8 - 1 + 1)) + 1;  //1~8중 랜덤 ( *돌아가는 횟수 포함 )
		var dice2 = Math.floor(Math.random() * (16 - 9 + 1)) + 9;  //9~16중 랜덤 ( *돌아가는 횟수 포함 )
		var dice3 = Math.floor(Math.random() * (24 - 17 + 1)) + 17;  //17~24중 랜덤 ( *돌아가는 횟수 포함 )
  
		/* 무조건 당첨 */
		// var dice1 = 16;
		// var dice2 = 16;
		// var dice3 = 16;
		if (v == 'dice1') {
		  for (var i = 1; i <= dice1; i++) {
			//console.log('a', dice1);
			slotRoller(i, slotName);
			//slotMachineFinish(dice1);
		  }
		}
		if (v == 'dice2') {
		  for (var i = 1; i <= dice2; i++) {
			//console.log('b', dice2 - 8);
			slotRoller(i, slotName);
			//slotMachineFinish(dice2);
		  }
		}
		if (v == 'dice3') {
		  for (var i = 1; i <= dice3; i++) {
			//console.log('c', dice3 - 16);
			slotRoller(i, slotName);
			//slotMachineFinish(dice3);
		  }
		}
	  };
	}
  
	/* 슬롯 결과발표 */
	function slotMachineFinish(v, i) {
	  if (v === '#slot_box3 .list') {
		
		setTimeout(function () {
		  $('.slotMachineStarting').removeClass('disabled');
		}, 1000);

		var resultValue1 = $('li:nth-child(1)', '#slot_box1').attr('data-roll');
		var resultValue2 = $('li:nth-child(1)', '#slot_box2').attr('data-roll');
		var resultValue3 = $('li:nth-child(1)', '#slot_box3').attr('data-roll');

		if (resultValue1 === resultValue2 && resultValue2 === resultValue3) {
		  setTimeout(success, 1000);
		} else {
		  setTimeout(fail, 1000);
		}

	  } else {
		return;
	  }
	}
  
	/* 결과 */
	//레이어팝업:btn확인
	//reset
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
  
	/* 슬롯 객체 인스턴스 생성 */
	var slot_roll1 = new Slot_roll('#slot_box1 .list');
	var slot_roll2 = new Slot_roll('#slot_box2 .list');
	var slot_roll3 = new Slot_roll('#slot_box3 .list');
  
	/* 슬롯 시작!! */
	var slotCount = $('.slotCount');
	count = 3;
	slotCount.text(count);
	$('.slotMachineStarting').on('click', function (e) {
	  if (count === 0) {
		e.preventDefault();
		alert('플로린 코인이 부족합니다.');
		slotCount.text(count);
	  } else if (count >= 1) {
		resetSlot();
		$(this).addClass('disabled');
		$('.slot .basicBg').removeClass('basicBg');
		// $('.slot .basicBg').animate({opacity: "0"}, 500);
		
		var diceA = 'dice1';
		var diceB = 'dice2';
		var diceC = 'dice3';

		// 애니메이션이 재생중이 아닐 때만 돌리고!!
		if ($('#slot_box1 .list').is(':not(:animated)')) {
		  slot_roll1.dice(diceA);
		}
		if ($('#slot_box2 .list').is(':not(:animated)')) {
		  slot_roll2.dice(diceB);
		}
		if ($('#slot_box3 .list').is(':not(:animated)')) {
		  slot_roll3.dice(diceC);
		}

		count--;
		slotCount.text(count);
	  }
	});
  
	/* 슬롯 연속해서 돌릴시 리셋 */
	function resetSlot() {
	  $('.list').removeClass('on');
	  $('.slot .basicBg').addClass('basicBg');
	  $('.evtPop').hide();
	  $('.evtPop.build > div').hide();
	  $('.evtPop.build .btn.close').hide();
	}
  });