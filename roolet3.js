var $container;	// �����̳� �±�
var $parent;	// �θ� �±�
var $rlImage;	// �̹��� �±�
var result="";		// ��÷ ���

var childImage = new Array();
var isExecute = false;
var $pop = $('.popup')
var popOpen = false; 
var arrA = []
var arrB = []

$(function(){
	$pop.removeClass('on')
	$container = jQuery("#container").eq(0);
	$parent = $container.children("div");
	$rlImage = $parent.children("img");

	$parent.each(function(i){
		childImage[i] = $(this).html();
	});

	$rlImage.each(function(i){
		var imgSrc = $(this).attr("src");
	});

});

function roolet() {
	// �̺κ��� �ӽ÷� �÷��� ������ ����߽��ϴ�.
	// �������� ������ �ʿ��� �� �����ϴ�. 
	var bt = $('.start')
	bt.attr("disabled",true); 
	if(isExecute==false) {
		rooletExecute(10);		
	} else {
		//alert("이미 참여하셨습니다.");
		if(bt.is(":disabled")){
			console.log("중복 참여가 불가합니다.");
		}
	}
}

function rooletExecute(num) {
	$parent.each(function(i){
		//$(this).animate({"top":"-="+$(this).height()*(num+1)},4000+(i*200));
		$(this).delay((i+1)*10).animate({"left":"-="+$(this).width()*(num+1)},4000+(i*200));
		
		setTimeout(function(){		
			var $pop = $('.popup'),
				lastThingA = $('#one').children('img').last().attr('src'),
				lastThingB = $('#one').children('img').last().attr('src'),
				lastThingC = $('#one').children('img').last().attr('src')
			$pop.addClass('on')
			$pop.find('span').text(result)
			if(lastThingA === lastThingB === lastThingC){
				console.log(1)
			} else {
				console.log(2)
			}
		}, 4500)
	});

	for(var j=0;j<num;j++) {
		$parent.each(function(i){
			$(this).append(childImage[i]);
			arrA.push($(this).children().eq(rand))
			arrB.push($(this).children().eq(rand))
			if(j+1==num) {
/*
				var rand = rnd(1,fileName.length-1);
				$(this).append("<img src='" + filePath[rand]+fileName[rand] + fileExt[rand]+"' />");
				result += fileName[rand] + ", ";
*/
				var rand = rnd(0,3);
				$(this).append("<img src='"+ $(this).children().eq(rand).attr("src") +"' />");
				result += $(this).children().eq(rand).attr("src")  + ", ";				
				//$pop.addClass('on')

			}
		});
	}

	$('body').append("<br/>결과 : ");
		result = result.substring(0, result.lastIndexOf(", "));
	$('body').append( result );
	isExecute = true;
}


function rnd(startNumber,endNumber) {
	var randValue = Math.floor(Math.random()*endNumber+startNumber);
	return randValue;
}