$(function () {
  function slotRoller(spd, selector) {
    //   var speed =
    //     selector === '#slot_box2 .list' ? 5 : Math.floor(Math.random() * 15 + 10); // slot 회전 속도
    var speed = 10;
    var firstChild = $('.list li:first-child');
    var secondChild = $('.list li:nth-child(2)');
    var lastChild = $('.list li:last-child');

    // slot 목록 순환
    $(selector)
      .animate(
        { marginLeft: '-520px' },
        speed + (spd * 30 + spd),
        'linear',
        function () {
          // 첫째 목록을 마지막으로 이동
          firstChild = $('li:first-child', this);
          $(this).append(firstChild);
          $(this).css({ marginLeft: '-0' });

          // 현재 심볼 번호
          var symbol_no1 = $('li:nth-child(1)', '#slot_box1').attr('data-roll');
          var symbol_no2 = $('li:nth-child(1)', '#slot_box2').attr('data-roll');
          var symbol_no3 = $('li:nth-child(1)', '#slot_box3').attr('data-roll');
          $('#symbol_no1').text('symbol No:' + symbol_no1);
          $('#symbol_no2').text('symbol No:' + symbol_no2);
          $('#symbol_no3').text('symbol No:' + symbol_no3);
        }
      )
      .promise()
      .done(function () {
        $(this).addClass('on');

        slotMachineStarting();

        //   if (
        //     $('#slot_box1 .list, #slot_box3 .list, #slot_box3 .list').hasClass('on')
        //   ) {
        //     var symbol_no1 = $('li:nth-child(1)', '#slot_box1').attr('data-roll');
        //     var symbol_no2 = $('li:nth-child(1)', '#slot_box2').attr('data-roll');
        //     var symbol_no3 = $('li:nth-child(1)', '#slot_box3').attr('data-roll');
        //     $('#symbol_no1').text('symbol No:' + symbol_no1);
        //     $('#symbol_no2').text('symbol No:' + symbol_no2);
        //     $('#symbol_no3').text('symbol No:' + symbol_no3);
        //     console.log(symbol_no1);
        //     console.log(symbol_no2);
        //     console.log(symbol_no3);
        // if (
        //   (Number(symbol_no1) === Number(symbol_no2)) ===
        //   Number(symbol_no3)
        // ) {
        //   setTimeout(() => {
        //     console.log('축하합니다.');
        //   }, 500);
        // }
        // }
      });
  }

  /* 당첨 */
  function slotMachineStarting() {
    //   if (
    //     $('#slot_box1 .list, #slot_box3 .list, #slot_box3 .list').hasClass('on')
    //   ) {
    //     var symbol_no1 = $('li:nth-child(1)', '#slot_box1').attr('data-roll');
    //     var symbol_no2 = $('li:nth-child(1)', '#slot_box2').attr('data-roll');
    //     var symbol_no3 = $('li:nth-child(1)', '#slot_box3').attr('data-roll');
    //     $('#symbol_no1').text('symbol No:' + symbol_no1);
    //     $('#symbol_no2').text('symbol No:' + symbol_no2);
    //     $('#symbol_no3').text('symbol No:' + symbol_no3);
    //     console.log(symbol_no1);
    //     console.log(symbol_no2);
    //     console.log(symbol_no3);
    //     if ((Number(symbol_no1) === Number(symbol_no2)) === Number(symbol_no3)) {
    //       setTimeout(() => {
    //         console.log('축하합니다.');
    //       }, 500);
    //     }
    //   }
  }

  /* 슬롯 객체를 정의 */
  function Slot_roll(slotName) {
    this.min = 1;
    this.max = 8;
    this.dice1 = function () {
      var dice1 = Math.round(Math.random() * (this.max - this.min)) + this.min;
      for (var i = 0; i < dice1; i++) {
        slotRoller(i, slotName);
      }
    };
    this.dice2 = function () {
      var dice2 =
        Math.round(Math.random() * (this.max * 2 - this.min * 2)) +
        this.min * 2;
      for (var i = 0; i < dice2; i++) {
        slotRoller(i, slotName);
      }
    };
    this.dice3 = function () {
      var dice3 =
        Math.round(Math.random() * (this.max * 3 - this.min * 3)) +
        this.min * 3;
      for (var i = 0; i < dice3; i++) {
        slotRoller(i, slotName);
      }
    };
  }

  /* 슬롯 객체 인스턴스 생성 */
  var slot_roll1 = new Slot_roll('#slot_box1 .list');
  var slot_roll2 = new Slot_roll('#slot_box2 .list');
  var slot_roll3 = new Slot_roll('#slot_box3 .list');

  /* 슬롯 시작!! */
  $('#slotMachineStarting').on('click', function (e) {
    e.preventDefault();
    $('.slot .basicBg').removeClass('basicBg');
    // $('.slot .basicBg').animate({opacity: "0"}, 500);
    if ($('#slot_box1 .list').is(':not(:animated)')) {
      slot_roll1.dice1();
    }
    if ($('#slot_box2 .list').is(':not(:animated)')) {
      slot_roll2.dice2();
    }
    if ($('#slot_box3 .list').is(':not(:animated)')) {
      slot_roll3.dice3();
    }
  });
});

/* card 배경 */
