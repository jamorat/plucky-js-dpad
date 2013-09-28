var tempX = 0;
var tempY = 0;
var $upDown = "up";


document.ontouchstart = document.ontouchdown = document.onmousedown = function(event)
    {
         $("#goodIndicator").css("background-color","8A00B8");
         $("#upDownTouch").text('Touching');
         
    }
    
    document.ontouchend = document.ontouchup = document.onmouseup = function(event)
    {
    $("#goodIndicator").css("background-color","B82E00");
    	$("#upDownTouch").text('');
    }

document.ontouchmove = function(e){
e.preventDefault();
whichButton();
} 

function whichButton(){


		$howFarFromLeft = window.innerWidth - event.targetTouches[0].pageX;
		$howFarFromBottom = window.innerHeight - event.targetTouches[0].pageY;
		
		$ttX = event.targetTouches[0].pageX;
		$ttY = event.targetTouches[0].pageY;



//the real deal
$('#goodIndicator').text('x:'+ event.targetTouches[0].pageX + ' ' + 'y:'+ event.targetTouches[0].pageY);

$('.follow').css('top', $ttY ).css('left', $ttX);
      


var div = $("#uButton"),
    divTop = div.offset().top;
    divLeft = div.offset().left;
    divRight = divLeft + div.width();
    divBottom = divTop + div.height();
mouseX = $ttX;
    mouseY = $ttY;
    if(mouseX >= divLeft && mouseX <= divRight && mouseY >= divTop && mouseY <= divBottom){
    $("#statusDiv").css("background-color","00B88A");
    $("#statusDiv").text('UP');
    }
    
    
    var div = $("#dButton"),
    divTop = div.offset().top;
    divLeft = div.offset().left;
    divRight = divLeft + div.width();
    divBottom = divTop + div.height();
mouseX = $ttX;
    mouseY = $ttY;
    if(mouseX >= divLeft && mouseX <= divRight && mouseY >= divTop && mouseY <= divBottom){
    $("#statusDiv").css("background-color","00B82E");
    $("#statusDiv").text('DOWN');
    }
    
    var div = $("#lButton"),
    divTop = div.offset().top;
    divLeft = div.offset().left;
    divRight = divLeft + div.width();
    divBottom = divTop + div.height();
mouseX = $ttX;
    mouseY = $ttY;
    if(mouseX >= divLeft && mouseX <= divRight && mouseY >= divTop && mouseY <= divBottom){
    $("#statusDiv").css("background-color","B82E00");
    $("#statusDiv").text('LEFT');
    
    }
    
    var div = $("#rButton"),
    divTop = div.offset().top;
    divLeft = div.offset().left;
    divRight = divLeft + div.width();
    divBottom = divTop + div.height();
mouseX = $ttX;
    mouseY = $ttY;
    if(mouseX >= divLeft && mouseX <= divRight && mouseY >= divTop && mouseY <= divBottom){
    $("#statusDiv").css("background-color","B88A00");
    $("#statusDiv").text('RIGHT');
    }


}

function refocusBody(){
	$("#statusDiv").text('h');
}

function changeMe($which1){
	$('#'+$which1).text('flagged '+$which1);
}

document.addEventListener( 'touchstart' , stopScrolling , false );
document.addEventListener( 'touchmove' , stopScrolling , false );

function showXYInTopLine()
{
$('goodIndicator').text('flagged 2');
}


<!-- Begin
var IE = document.all?true:false;
if (!IE) document.captureEvents(Event.MOUSEMOVE)
document.onmousemove = getMouseXY;

function getMouseXY(e) {
if (IE) { // grab the x-y pos.s if browser is IE
tempX = event.clientX + document.body.scrollLeft;
tempY = event.clientY + document.body.scrollTop;
}
else {  // grab the x-y pos.s if browser is NS
tempX = e.pageX;
tempY = e.pageY;
}  
if (tempX < 0){tempX = 0;}
if (tempY < 0){tempY = 0;}  

xSaucer = Math.round(10*tempX/$(window).width())/10;
ySaucer = Math.round(10*tempY/$(window).height())/10;

	if(xSaucer <= .2 && ySaucer <=.2)
	{
	moveit(0,0);
	//document.title="1";
	}
	else if(ySaucer < .2 && xSaucer >.2 && xSaucer <.8)
	{
	moveit(0,99999);
	//document.title="2";
	}
	else if(ySaucer > .1 && ySaucer < .3 &&  xSaucer >.2 && xSaucer < .8)
	{
	moveit(0,99999);
	//document.title="3";
	}
	else if(ySaucer < .3 && xSaucer >=.8)
	{
	moveit(0,-400);
	//document.title="4";
	}
	else if(ySaucer > .2 && ySaucer < .8 && xSaucer <=.1)
	{
	moveit(99999,0);
	//document.title="5";
	}
	else if(ySaucer > .2 && ySaucer < .8 && xSaucer ==.2)
	{
	moveit(99999,0);
	//document.title="6";
	}
	else if(ySaucer > .2 && ySaucer < .8 && xSaucer ==.8)
	{
	moveit(99999,-400);
	//document.title="7";
	}
	else if(ySaucer > .2 && ySaucer < .8 && xSaucer >=.9)
	{
	moveit(99999,-400);
	//document.title="8";
	}
	else if(xSaucer <= .2 && ySaucer >=.8)
	{
	moveit(-400,0);
	//document.title="9";
	}
	else if(xSaucer > .2 && xSaucer < .8 && ySaucer ==.8)
	{
	moveit(-400,99999);
	//document.title+="10";
	}
	else if(xSaucer > .2 && xSaucer < .8 && ySaucer >=.9)
	{
	moveit(-400,99999);
	//document.title+="11";
	}
	else if(xSaucer >= .8 && ySaucer >=.8)
	{
	moveit(-400,-400);
	//document.title+="12";
	}
	else
	{
	$("#mainDiv").stop();
	}



document.Show.MouseX.value = tempX;
document.Show.MouseY.value = tempY;
return true;
}
//  End -->


$("body").mousemove(function(e){
      $('.follow').css('top', e.clientY+10 ).css('left', e.clientX-20);
});

function resetToHome(){
$("#mainDiv").stop();
$('#mainDiv').css('top', -50 ).css('left', -50);


}

$('#mainDiv').animate({
    	left:movingY,
    	top: movingX
  		}, 10000, function() {
  		});

