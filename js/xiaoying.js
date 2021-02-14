

var canvas=document.getElementById('canvas');

var ctx=canvas.getContext("2d");//二维绘图

var width=600;

var height=400;

var colorArr=["yellow","pink","orange","red","green"];

var textArr=[
	"小英，感觉你好美呀，人又好看又温柔，cute and perfect！",
	"小英，我发现昨天很喜欢你，今天也很喜欢你，而且有预感明天也会喜欢你。",
	"你那么认真，美得那么天真……",
	"小英，能遇见你真好，是我八辈子修来的缘分，爱你喔",
	"从智汇*棠下网红街，到吃饭时的自助餐，每一次都那么期待能见到你！",
	"’你最近是不是又胖了?‘　‘没有啊，为什么这么说?’　　‘那为什么在我心里的分量越来越重了?’"
]

canvas.width=width;

canvas.height=height;

var image=new Image();



ctx.font = "20px Courier New";

var numArrL=[80,100,5,300,500,430];//初始的X

var numArrT=[80,100,20,300,380,210];//初始的Y

setInterval(function(){

ctx.clearRect(0,0,canvas.width,canvas.height);//在给定矩形内清空一个矩形：

ctx.save();

for(var j=0;j<textArr.length;j++){

	numArrL[j]-=(j+1)*0.6;

	ctx.fillStyle = colorArr[j]

	ctx.fillText(textArr[j],numArrL[j],numArrT[j]);

}

for(var i=0;i<textArr.length;i++){

	if(numArrL[i]<=-500){

		numArrL[i]=canvas.width;

	}

}

ctx.restore();

},30)



