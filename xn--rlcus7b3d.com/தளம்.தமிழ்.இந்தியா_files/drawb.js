
//<![CDATA[
/*	Curve extension for canvas 2.3.1
 *	Epistemex (c) 2013-2014
 *	License: MIT
 */

 /*! getEmPixels | Author: Tyson Matanich (http://matanich.com), 2013 | License: MIT */

var elebr = document.createElement("br");

var defaultshadow = "0.05em 0.05em 0.1em #AAA";

c2 = document.getElementById("myCanvas2");
ctx2 = c2.getContext("2d");


(function(n,t){"use strict";var i="!important;",r="position:absolute"+i+"visibility:hidden"+i+"width:1em"+i+"font-size:1em"+i+"padding:0"+i;window.getEmPixels=function(u){var f,e,o;return u||(u=f=n.createElement("body"),f.style.cssText="font-size:1em"+i,t.insertBefore(f,n.body)),e=n.createElement("i"),e.style.cssText=r,u.appendChild(e),o=e.clientWidth,f?t.removeChild(f):u.removeChild(e),o}})(document,document.documentElement);
function console_log_input(input){
	//console.log(input);
}

 var arr2=new Array();


//var ptoretr = 1;
var post = [];
var total=1000;
window.onScroll = handleScroll();
var body = document.body,
    html = document.documentElement;
body = document.getElementsByTagName("BODY")[0];
var height = Math.max( (body ? body.scrollHeight : 0),
                       html.clientHeight, html.scrollHeight );
var loadedall = 0;
var qloading = 1;
qloading = 2;
console_log_input(qloading);
var testvar="Success";
console_log_input("Testing : " + testvar);

elebrEm = getEmPixels(elebr);

elemmodecounter_mycanvas2=0;

canvas2();


function posY(elm) {
    var test = elm, top = 0;

    while(!!test && test.tagName.toLowerCase() !== "body") {
        top += test.offsetTop;
        test = test.offsetParent;
    }

    return top;
}

function viewPortHeight() {
    var de = document.documentElement;

    if(!!window.innerWidth)
    { return window.innerHeight; }
    else if( de && !isNaN(de.clientHeight) )
    { return de.clientHeight; }

    return 0;
}

function scrollY() {
    if( window.pageYOffset ) { return window.pageYOffset; }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function checkvisible( elm ) {
    var vpH = viewPortHeight(), // Viewport Height
        st = scrollY(), // Scroll Top
        y = posY(elm);

    return ((y < (vpH + st)) && (y > st));
}

function handleScroll(){};

addEvent = function(elem, type, eventHandle) {
    if (elem == null || typeof(elem) == 'undefined') return;
    if ( elem.addEventListener ) {
        elem.addEventListener( type, eventHandle, false );
    } else if ( elem.attachEvent ) {
        elem.attachEvent( "on" + type, eventHandle );
    } else {
        elem["on"+type]=eventHandle;
    }
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function initcanvas(){
/*c = document.getElementById("myCanvas");
ctx = c.getContext("2d");*/
c2 = document.getElementById("myCanvas2");
ctx2 = c2.getContext("2d");
//ctx.fillStyle = "rgba(140, 140, 140, 0.40)";
//ctx2.fillStyle = "rgba(140, 140, 140, 0.40)";
/*c.style.width = window.innerWidth;
c.style.height = window.innerHeight;
c2.style.width = window.innerWidth;
c2.style.height = window.innerHeight;*/
//ctx.fillRect(0,0,150,75);
cpx=0;
/*id = ctx.createImageData(1,1); // only do this once per page
d  = id.data;                        // only do this once per page*/
//drawcanvas();
canvascurrentx = [[[]]];
currentstatus = [[]];
edgepixelidentifierx = [];
edgepixelidentifiery = [];
datax = [[]];
deathclockx = 0;
deathclocky = 0;
//ctx.imageSmoothingEnabled = true;
offset = [];
offset[1] = Math.random() * 3.1415926545;
/*c01 = Math.floor(Math.random() * 100) + 50;
c02 = Math.floor(Math.random() * 200) + 0;
c03 = Math.floor(Math.random() * 200) + 10;
c11 = Math.floor(Math.random() * 100) + 50;
c12 = Math.floor(Math.random() * 200) + 0;
c13 = Math.floor(Math.random() * 200) + 10;
deadpixelstatus = new Array(100);
  for (var i = 0; i <= 100; i++) {
    deadpixelstatus[i] = new Array(200);
  }

datax = new Array(200);
  for (var i = 0; i <= 200; i++) {
    datax[i] = new Array(200);
    for (var j = 0; j <= 200; j++) {
	datax[i][j] = 0;
    }
  }*/
  //addEvent(window, "resize", function(){ document.getElementById("myCanvas2").getContext("2d").clearRect(0, 0, document.getElementById("myCanvas2").width, document.getElementById("myCanvas2").height);initcanvas();});
//drawlinewithdecreasingprobabilisticwidth(1);
if((navigator.hardwareConcurrency && (navigator.hardwareConcurrency > 2)) || (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) || !(w3m)){canvas2();} //execute only if Cores>2. Execute on Firefox nonetheless. Until they support GHC. Do not execute on w3m/textmode.
}


var arr2=new Array();

window.onScroll = handleScroll();

function weight(iter){
	return 200;
}

function heartcurvex(t){
return 16*Math.pow(Math.sin(t), 3);
}
function heartcurvey(t){
return 13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);
}
function curlytree1x(t){
return 10000*Math.sin(0.01*t)/(t) + (0.1/t);
}
function curlytree1y(t){
return 10000*Math.cos(0.01*t)/(t) + (0.1/t);
}
function curlytree1x2(t){
return 100*Math.sin(0.01*t)/(t) + (0.1/t);
}
function curlytree1y2(t){
return 100*Math.cos(0.01*t)/(t) + (0.1/t);
}
function curlytree2x(t){
return 10000*Math.sin(0.01*t + offset[1])/(t) + (0.1/t);
}
function curlytree2y(t){
return 10000*Math.cos(0.01*t + offset[1])/(t) + (0.1/t);
}
function curlytree2x2(t){
return 100*Math.sin(0.01*t + offset[1])/(t) + (0.1/t);
}
function curlytree2y2(t){
return 100*Math.cos(0.01*t + offset[1])/(t) + (0.1/t);
}
function b2x2(t){
t = 0.05*t;
return Math.sin(t)*(Math.pow(Math.E, Math.cos(t)) - 2*Math.cos(4*t) - (t/12)*Math.exp(Math.sin(t), 5));
}
function b2y2(t){
t = 0.05*t;
return Math.cos(t)*(Math.pow(Math.E, Math.cos(t)) - 2*Math.cos(4*t) - (t/12)*Math.exp(Math.sin(t), 5));
}
function canvas2(){

var worker1 = new Worker("http://vgn.pw/drawb_worker1.js");
var worker2 = new Worker("http://vgn.pw/drawb_worker2.js");
var worker3 = new Worker("http://vgn.pw/drawb_worker3.js");

worker1.onmessage=function(e){
  console.log(e)
  sarr=e.data;
  setTimeout(function(){
    arr2=sarr[0];
    ctx2.moveTo(arr2[0], arr2[1]);  // optionally move to first point
    ctx2.curve(arr2, 0.5, 402);                // add cardinal spline to path
    ctx2.strokeStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.85)';
    ctx2.fillStyle ='rgba(200,220,220,0.5)';
    ctx2.stroke();                      // stroke path
    arr2=[];
  }, 4000)
};

worker2.onmessage=function(e2){
  console.log(e2)
  sarr2=e2.data;
  setTimeout(function(){
    arr3=sarr2[0];
    ctx2.moveTo(arr3[0], arr3[1]);  // optionally move to first point
    ctx2.curve(arr3, 0.5, 600);               // add cardinal spline to path
    ctx2.strokeStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.85)';
    ctx2.fillStyle ='rgba(200,220,220,0.5)';
    ctx2.stroke();                      // stroke path
    //console.log(e2);
    console.log(arr3);
    //arr3=[];
}, 8000)
};

worker3.onmessage=function(e3){
  console.log(e3)
  sarr3=e3.data;
  setTimeout(function(){
    arr4=sarr3[0];
    ctx2.moveTo(arr4[0], arr4[1]);  // optionally move to first point
    ctx2.curve(arr4, 0.5, 600);               // add cardinal spline to path
    ctx2.strokeStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.85)';
    ctx2.fillStyle ='rgba(200,220,220,0.5)';
    ctx2.stroke();                      // stroke path
    //console.log(e2);
    console.log(arr4);
    //arr3=[];
}, 8000)
};


setTimeout (enummodes_mod, 15000,14);
setTimeout (enummodes_post, 15000,0);

ctx2.strokeStyle = 'rgba(100,100,100,0.4)';
points = [];
//console.log(points);
ctx2.moveTo(0, 0);
arr2=[];
for(l=0;l<=200;l++){
	arr2.push(Math.floor(2 * (100 - heartcurvex(l))));
	arr2.push(Math.floor(2 * (100 - heartcurvey(l))));
}
//console.log(arr2);
ctx2.moveTo(arr2[0], arr2[1]);  // optionally move to first point
//ctx2.curve([1,1,1000,1000]);                // add cardinal spline to path
//ctx2.strokeStyle = '#ff0000';
//ctx2.fillStyle = '#ff0000';
//ctx2.stroke();                      // stroke path
ctx2.curve(arr2, 0.5, 402);                // add cardinal spline to path
ctx2.strokeStyle = 'rgba(100,100,100,0.4)';
ctx2.fillStyle ='rgba(100,100,100,0.4)';
ctx2.stroke();                      // stroke path
// move to the first point
points = arr2;
//console.log(points);
ctx2.moveTo(arr2[398], arr2[399]);
arr2=[];
for(l=200;l<=400;l++){
	arr2.push(Math.floor(2 * (100 - heartcurvex(l))));
	arr2.push(Math.floor(2 * (100 - heartcurvey(l))));
}
//console.log(arr2);
ctx2.moveTo(arr2[0], arr2[1]);  // optionally move to first point
ctx2.curve(arr2, 0.5, 402);                // add cardinal spline to path
ctx2.strokeStyle = 'rgba(200,200,200,0.4)';
ctx2.fillStyle ='rgba(200,200,200,0.4)';
ctx2.stroke();                      // stroke path
arr2=[];
for(l=401;l<=800;l++){
	arr2.push(Math.floor(2 * (100 - heartcurvex(l))));
	arr2.push(Math.floor(2 * (100 - heartcurvey(l))));
}
//console.log(arr2);
ctx2.moveTo(arr2[0], arr2[1]);  // optionally move to first point
ctx2.curve(arr2, 0.5, 402);                // add cardinal spline to path
ctx2.strokeStyle = 'rgba(180,220,220,0.5)';
ctx2.fillStyle ='rgba(200,220,220,0.5)';
ctx2.stroke();                      // stroke path
arr2=[];
for(l=1;l<=2000;l++){
	arr2.push(Math.floor((100 - 200*curlytree1x2(l))));
	arr2.push(Math.floor((100 - 200*curlytree1y2(l))));
}
//console.log(arr2);
ctx2.moveTo(arr2[0], arr2[1]);  // optionally move to first point
ctx2.curve(arr2, 0.5, 402);                // add cardinal spline to path
ctx2.strokeStyle = 'rgba(180,220,220,0.5)';
ctx2.fillStyle ='rgba(200,220,220,0.5)';
ctx2.stroke();                      // stroke path
arr2=[];
for(l=1;l<=2000;l++){
	arr2.push(Math.floor((101 - 200*curlytree1x2(l))));
	arr2.push(Math.floor((101 - 200*curlytree1y2(l))));
}
//console.log(arr2);
ctx2.moveTo(arr2[0], arr2[1]);  // optionally move to first point
ctx2.curve(arr2, 0.5, 402);                // add cardinal spline to path
ctx2.strokeStyle = 'rgba(180,240,240,0.5)';
ctx2.fillStyle ='rgba(180,240,240,0.5)';
ctx2.stroke();                      // stroke path
ctx2.beginPath();
arr2=[];
for(l=1;l<=2000;l++){
	arr2.push(Math.floor((200 - 200*curlytree2x2(l))));
	arr2.push(Math.floor((100 - 200*curlytree2y2(l))));
}
//console.log(arr2);
ctx2.moveTo(arr2[0], arr2[1]);  // optionally move to first point
ctx2.curve(arr2, 0.5, 402);                // add cardinal spline to path
/*ctx2.strokeStyle = 'rgba(230, 230, 250,0.6)';
ctx2.fillStyle ='rgba(230, 230, 250,0.6)';*/
ctx2.strokeStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.85)';
ctx2.fillStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.85)';
ctx2.stroke();                      // stroke path
ctx2.beginPath();
arr2=[];
for(l=(-150);l<=150;l++){
	arr2.push(Math.floor((100 - 20*b2x2(l))));
	arr2.push(Math.floor((300 - 20*b2y2(l))));
}
//console.log(arr2);
ctx2.moveTo(arr2[0], arr2[1]);  // optionally move to first point
ctx2.curve(arr2, 0.5, 402);                // add cardinal spline to path
ctx2.strokeStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.7)';
ctx2.fillStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.7)';
ctx2.stroke();                      // stroke path
myCanvas2.addEventListener('click', clickdetect);


/*
ctx2.moveTo(points[0], points[1]);
for (i = 1; i < points.length - 4; i = i + 2)
{
	var xc = (points[i] + points[i + 2]) / 2;
	var yc = (points[i+1] + points[i + 3]) / 2;
	ctx2.quadraticCurveTo(points[i], points[i+1], xc, yc);
}
 // curve through the last two points
ctx2.quadraticCurveTo(points[i], points[i+1], points[i+2],points[i+3]);
ctx2.stroke();
drawCurve(ctx2, arr2);*/
}

/*function drawCurve(ctx, ptsa, tension, isClosed, numOfSegments, showPoints) {
showPoints  = showPoints ? showPoints : false;
ctx.beginPath();
drawLines(ctx, getCurvePoints(ptsa, tension, isClosed, numOfSegments));
if (showPoints) {
ctx.stroke();
ctx.beginPath();
for(var i=0;i<pts.length-1;i+=2)
	ctx.rect(pts[i] - 2, pts[i+1] - 2, 4, 4);
}
}
*/

function drawfunc(func){
c2 = document.getElementById("myCanvas2");
ctx2 = c2.getContext("2d");
ctx2.beginPath();
arr2=[];
for(param=-1000;param<=1000;param++){
	arr2.push(250 + Math.floor((0.25)*param));
	//arr2.push(Math.floor(((eval("l=" + l +";" + func)))));
	arr2.push(250 + Math.floor((0.25)*eval(func)));
}
console.log(Math.floor(((eval("l=" + l +";" + func)))));
console.log(Math.floor(((eval(func)))));
console.log(arr2);
//console.log(arr2);
ctx2.moveTo(arr2[0], arr2[1]);  // optionally move to first point
ctx2.curve(arr2, 0.5, 402);                // add cardinal spline to path
/*ctx2.strokeStyle = 'rgba(230, 230, 250,0.6)';
ctx2.fillStyle ='rgba(230, 230, 250,0.6)';*/
ctx2.strokeStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.85)';
ctx2.fillStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.85)';
ctx2.stroke();                      // stroke path
};
function drawfunc2(func1, func2){
c2 = document.getElementById("myCanvas2");
ctx2 = c2.getContext("2d");
ctx2.beginPath();
arr2=[];
for(param=-1000;param<=1000;param++){
	//arr2.push(Math.floor(((eval("l=" + l +";" + func)))));
	arr2.push(250 + Math.floor((0.25)*eval(func1)));
	arr2.push(250 - Math.floor((0.25)*eval(func2)));
}
console.log(Math.floor(((eval("l=" + l +";" + func2)))));
console.log(Math.floor(((eval(func2)))));
console.log(arr2);
//console.log(arr2);
ctx2.moveTo(arr2[0], arr2[1]);  // optionally move to first point
ctx2.curve(arr2, 0.5, 402);                // add cardinal spline to path
/*ctx2.strokeStyle = 'rgba(230, 230, 250,0.6)';
ctx2.fillStyle ='rgba(230, 230, 250,0.6)';*/
ctx2.strokeStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.85)';
ctx2.fillStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.85)';
ctx2.stroke();                      // stroke path
};
function drawfunc2t(func1, func2){
c2 = document.getElementById("myCanvas2");
ctx2 = c2.getContext("2d");
ctx2.beginPath();
arr2=[];
for(param=-1000;param<=1000;param++){
	//arr2.push(Math.floor(((eval("l=" + l +";" + func)))));
	arr2.push(250 + Math.floor((0.25)*eval(func1)));
	arr2.push(250 - Math.floor((0.25)*eval(func2)));
	arr2.push(250 + Math.ceil((0.25)*eval(func1)));
	arr2.push(250 - Math.ceil((0.25)*eval(func2)));
}
console.log(Math.floor(((eval("l=" + l +";" + func2)))));
console.log(Math.floor(((eval(func2)))));
console.log(arr2);
//console.log(arr2);
ctx2.moveTo(arr2[0], arr2[1]);  // optionally move to first point
ctx2.curve(arr2, 0.5, 402);                // add cardinal spline to path
/*ctx2.strokeStyle = 'rgba(230, 230, 250,0.6)';
ctx2.fillStyle ='rgba(230, 230, 250,0.6)';*/
ctx2.strokeStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.85)';
ctx2.fillStyle = 'rgba('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + '0.85)';
ctx2.stroke();                      // stroke path

};

function clickdetect(event){
	var x = event.layerX;
	var y = event.layerY;
	var pixel = ctx2.getImageData(x, y, 1, 1);
	var data = pixel.data;
	var rgba = 'rgba(' + data[0] + ',' + data[1] +
		',' + data[2] + ',' + data[3] + ')';
	//console.log(rgba);
	alert(rgba);
}

function isWebkit() {return ('WebkitAppearance' in document.documentElement.style) }

function initcanvasandfixwebkit(){
  window.setTimeout(initcanvas, 1000);
  if (isWebkit()){
    document.getElementById("bgdiv").style.display="none";
    document.body.style.filter += " hue-rotate(" + getRandomInt(0, 180) + ")";
    document.body.style.webkitFilter += " hue-rotate(" + getRandomInt(0, 180) + "deg)";
    console.log(document.body.style.backgroundImage);
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundAttachment="fixed";
    document.body.style.backgroundPosition="center";
    document.body.style.backgroundImage = "url('http://பொது.ris.rocks/3875491691_2e1bbcc60e_o.jpg')";
  }

}

/*function enummodes_mod(a){
    var mix-blend-mode;
    switch(a){
        case 0:
        mix-blend-mode= "normal";
        break;
        case 1:
        mix-blend-mode= "multiply";
        break;
        case 2:
        mix-blend-mode= "screen";
        break;
        case 3:
        mix-blend-mode= "overlay";
        break;
        case 4:
        mix-blend-mode= "darken";
        break;
        case 5:
        mix-blend-mode= "lighten";
        break;
        case 6:
        mix-blend-mode= "color-dodge";
        break;
        case 7:
        mix-blend-mode= "color-burn";
        break;
        case 8:
        mix-blend-mode= "hard-light";
        break;
        case 9:
        mix-blend-mode= "soft-light";
        break;
        case 10:
        mix-blend-mode= "difference";
        break;
        case 11:
        mix-blend-mode= "exclusion";
        break;
        case 12:
        mix-blend-mode= "hue";
        break;
        case 13:
        mix-blend-mode= "saturation";
        break;
        case 14:
        mix-blend-mode= "color";
        break;
        case 15:
        mix-blend-mode= "luminosity";
        break;
    }
    if (a=15) a=0;
    setTimeout (enummodes_mod, 1000, a);
    //document.getElementById('myCanvas2').style.mixBlendMode = mix-blend-mode;
}*/

function enummodes_mod(a){
    if (!document.getElementById('mycanvas2')) {return;}
    var mixblendmode;
    switch(a){
        case 0:
        mixblendmode= "normal";
        break;
        case 1:
        mixblendmode= "multiply";
        break;
        case 2:
        mixblendmode= "screen";
        break;
        case 3:
        mixblendmode= "overlay";
        break;
        case 4:
        mixblendmode= "darken";
        break;
        case 5:
        mixblendmode= "lighten";
        break;
        case 6:
        mixblendmode= "color-dodge";
        break;
        case 7:
        mixblendmode= "color-burn";
        break;
        case 8:
        mixblendmode= "hard-light";
        break;
        case 9:
        mixblendmode= "soft-light";
        break;
        case 10:
        mixblendmode= "difference";
        break;
        case 11:
        mixblendmode= "exclusion";
        break;
        case 12:
        mixblendmode= "hue";
        break;
        case 13:
        mixblendmode= "saturation";
        break;
        case 14:
        mixblendmode= "color";
        break;
        case 15:
        mixblendmode= "luminosity";
        break;
    }
    if (a==15) {a=0} else {a++}
    setTimeout (enummodes_mod, 25000, a);
    document.getElementById('myCanvas2').style.mixBlendMode = mixblendmode;
}


function enummodes_post(a){
    if (!document.getElementById('post'+(ptoretr-1))) {return;}
    var mixblendmode;
    switch(a){
        case 0:
        mixblendmode= "normal";
        break;
        case 1:
        mixblendmode= "multiply";
        break;
        case 2:
        mixblendmode= "screen";
        break;
        case 3:
        mixblendmode= "overlay";
        break;
        case 4:
        mixblendmode= "darken";
        break;
        case 5:
        mixblendmode= "lighten";
        break;
        case 6:
        mixblendmode= "color-dodge";
        break;
        case 7:
        mixblendmode= "color-burn";
        break;
        case 8:
        mixblendmode= "hard-light";
        break;
        case 9:
        mixblendmode= "soft-light";
        break;
        case 10:
        mixblendmode= "difference";
        break;
        case 11:
        mixblendmode= "exclusion";
        break;
        case 12:
        mixblendmode= "hue";
        break;
        case 13:
        mixblendmode= "saturation";
        break;
        case 14:
        mixblendmode= "color";
        break;
        case 15:
        mixblendmode= "luminosity";
        break;
    }
    if (a<=15) {
        console.log(a);
        a++;
        setTimeout (enummodes_post, 17, a);
    }
    else {mixblendmode=document.getElementById("ui.readingmode").innerHTML;}
    document.getElementById('post'+(ptoretr-1)).style.mixBlendMode = mixblendmode;
}


function enummodes_elm(a, elm){
    if (!document.getElementById(elm)) {return;}
    var mixblendmode;
    switch(a){
        case 0:
        mixblendmode= "normal";
        break;
        case 1:
        mixblendmode= "multiply";
        break;
        case 2:
        mixblendmode= "screen";
        break;
        case 3:
        mixblendmode= "overlay";
        break;
        case 4:
        mixblendmode= "darken";
        break;
        case 5:
        mixblendmode= "lighten";
        break;
        case 6:
        mixblendmode= "color-dodge";
        break;
        case 7:
        mixblendmode= "color-burn";
        break;
        case 8:
        mixblendmode= "hard-light";
        break;
        case 9:
        mixblendmode= "soft-light";
        break;
        case 10:
        mixblendmode= "difference";
        break;
        case 11:
        mixblendmode= "exclusion";
        break;
        case 12:
        mixblendmode= "hue";
        break;
        case 13:
        mixblendmode= "saturation";
        break;
        case 14:
        mixblendmode= "color";
        break;
        case 15:
        mixblendmode= "luminosity";
        break;
    }
    document.getElementById(elm).style.mixBlendMode = mixblendmode;
}

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function enumreadingmode(){
    console.log("enumerator called");
    var elementtoset = document.getElementById("post"+(ptoretr-1));
    if (!isWebkit()){
        currentmode = document.getElementById("ui.readingmode").innerHTML;
        switch (currentmode){
            case "normal":
                document.getElementById("ui.readingmode").style.backgroundColor = "black";
                document.getElementById("ui.readingmode").style.backgroundColor = "rgba(0,0,0,1)";
                document.getElementById("ui.readingmode").style.color = "rgba(100,200,150,1)";
                elementtoset.style.color="white";
                setreadingmode("difference");
                break;
            case "difference":
                elementtoset.style.color="white";
                elementtoset.style.backgroundColor="black";
                document.getElementById("ui.readingmode").style.backgroundColor = "rgba(0,0,0,1)";
                document.getElementById("ui.readingmode").style.color = "rgba(100,200,150,1)";
                setreadingmode("luminosity");
                //elementtoset.style.textShadow="none";
                //elementtoset.style.color="rgba(255,255,255,0.2)";
                break;
            case "luminosity":
                document.getElementById("ui.readingmode").style.backgroundColor = "rgba(0,0,0,1)";
                document.getElementById("ui.readingmode").style.color = "rgba(255,255,255,1)";
                setreadingmode("darken");
                elementtoset.style.textShadow=defaultshadow;
                break;
            case "darken":
                elementtoset.style.backgroundColor=defaultbgcolor;
                elementtoset.style.color="black";
                document.getElementById("ui.readingmode").style.backgroundColor = "rgba(0,0,0,0)";
                document.getElementById("ui.readingmode").style.color = "rgba(100,200,150,1)";
                setreadingmode("normal");
                break;
        }
    }
}

function toggleshadow(){
    console.log("toggleshadow called");
    var elementtoset = document.getElementById("post"+(ptoretr-1));
    if (!isWebkit() || 1){
        currentmode = document.getElementById("ui.textshadow").innerHTML;
        switch (currentmode){
            case "on":
                //document.getElementById("ui.readingmode").style.backgroundColor = "black";
                elementtoset.style.textShadow="none";
                document.getElementById("ui.textshadow").innerHTML="off";
                break;
            case "off":
                elementtoset.style.textShadow=defaultshadow;
                document.getElementById("ui.textshadow").innerHTML="on";
        }
    }
}

function setreadingmode(mode){
    var elementtoset = document.getElementById("post"+(ptoretr-1));
    var display = document.getElementById("ui.readingmode");
    display.innerHTML=mode;
    elementtoset.style.mixBlendMode=mode;
    display.style.mixBlendMode=mode;
}
