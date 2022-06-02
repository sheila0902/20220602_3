function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#1d3557");
}

function	drawFlower(clr1,clr2,size=1) {
		
push()
fill(clr1)
ellipse(0,0,50);//目前此圓，仍以圓心為座標點
ellipseMode(CORNER)//設定以左上角為坐標點上的座標
	
fill(clr2)
for(var i=0; i<16; i++) {
ellipse(30,-20,100*size,30);//設定以左上角為座標點，
line(40,-5,120*size,-5)
rotate(PI/8) //180度產生八片，360度產生16片

	}
		

pop()
}

function mousePressed(){
positionListX.push(mouseX);
positionListY.push(mouseY);
sizesList.push(random(3));
vYList.push(random(10))	;
	

	
}
var colors1 = ["#096b72","#38887e","#67a489","#96c095","#c5dca0"];//圓心的顏色
var colors2 = ["#e0e2db","#d2d4c8","#b8bdb5","#889696","#5f7470"];//
var positionListX =[300,550,900]
var positionListY =[100,350,600]
var sizesList=[1,0.4,1.5]//形狀改變限制
var vYList=[2,3,5]//掉下去的變值速度


function draw(){
		
background("#1d3557");
	
var count=0 //計算
for(var i=0;i<positionListX.length;i++){

push()
	
count=count+1 
translate(positionListX[i],positionListY[i])
//scale(0.6)
rotate(frameCount/100)
drawFlower(colors1[count%colors1.length],colors2[count%colors2.length],map(mouseX,0,width,0,sizesList[i]))

pop()
positionListY[i]	=positionListY[i]+vYList[i]  //共掉下去的數值
	
if(positionListY[i]>height )
{
vYList[i]=-vYList[i]
}	
if( positionListY[i]<0){
positionListX.splice(i,1)
positionListY.splice(i,1)
sizesList.splice(i,1)
vYList.splice(i,1)
}
	


		}
		
}