$(function () {
  $('#useBattingTicket').click(function () {
    slotMachineStarting();
  });
  $('.stopmachine').click(function () {
    slotMachineDefault();
  });
});

function slotMachineStarting() {
  $('.ev01 .slot1 img').attr(
    'src',
    'https://www.itembay.com/resources/image/design/event_ing/evt2014/evt20140331_hm/spin.gif'
  );
  $('.ev01 .slot2 img').attr(
    'src',
    'https://www.itembay.com/resources/image/design/event_ing/evt2014/evt20140331_hm/spin.gif'
  );
  $('.ev01 .slot3 img').attr(
    'src',
    'https://www.itembay.com//resources/image/design/event_ing/evt2014/evt20140331_hm/spin.gif'
  );
}
function slotMachineDefault() {
  $('.ev01 .slot1 img').attr(
    'src',
    'https://www.itembay.com/resources/image/design/event_ing/evt2014/evt20140331_hm/slot1.gif'
  );
  $('.ev01 .slot2 img').attr(
    'src',
    'https://www.itembay.com/resources/image/design/event_ing/evt2014/evt20140331_hm/slot2.gif'
  );
  $('.ev01 .slot3 img').attr(
    'src',
    'https://www.itembay.com/resources/image/design/event_ing/evt2014/evt20140331_hm/slot3.gif'
  );
}
function slotMachineController(message, iGiftCode) {
  var imgIdx = 1;

  var slotMachineMove = setInterval(function () {
    if (imgIdx < 4) {
      slotMachineEnding(imgIdx, iGiftCode);
      imgIdx++;
    } else {
      clearInterval(slotMachineMove);
      $('#container .pop4').show();
      $('#container .pop4 p.popTxt').html(message);
      getHappyMoneyEventResult();
      battingDuplyFlag = false;
      imgIdx = 1;
    }
  }, 1000);
}
function slotMachineEnding(imgIdx, iGiftCode) {
  var arrImg = new Array('slot1.gif', 'slot2.gif', 'slot3.gif');
  if (iGiftCode == 1) {
    $('.ev01 .slot' + imgIdx + ' img').attr(
      'src',
      'https://www.itembay.com/resources/image/design/event_ing/evt2014/evt20140331_hm/' +
        arrImg[0]
    );
  } else {
    $('.ev01 .slot' + imgIdx + ' img').attr(
      'src',
      'https://www.itembay.com/resources/image/design/event_ing/evt2014/evt20140331_hm/' +
        arrImg[1]
    );
  }
}

function checkOpenLayerPop() {
  if ($('#container div.pop1').css('display') == 'block') {
    $('#container div.pop1').css('display', 'none');
  }
  if ($('#container div.pop2').css('display') == 'block') {
    $('#container div.pop2').css('display', 'none');
  }
  if ($('#container div.pop3').css('display') == 'block') {
    $('#container div.pop3').css('display', 'none');
  }
  if ($('#container div.pop4').css('display') == 'block') {
    $('#container div.pop4').css('display', 'none');
  }
}
