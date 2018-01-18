// gets location and size of element
function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left,
    right: el.right,
    top: el.top,
    bottom: el.bottom,
    width: el.width,
    height: el.height
  };
}

var range = 50;
function randomInRange(val) {
  var min = Math.ceil(val - range);
  var max = Math.floor(val + range);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myNameEle = document.getElementById("myName");
var myNameOffset = getOffset(myName);

var taglineEle = document.getElementById("tagline");
var taglineOffset = getOffset(tagline);

var tagline2Ele = document.getElementById("tagline2");
var tagline2Offset = getOffset(tagline2);

svgMyName.innerHTML = myName.innerText;
svgTagline.innerHTML = tagline.innerText;
svgTagline2.innerHTML = tagline2.innerText;

svgMyName.setAttribute("x", myNameOffset.left);
svgMyName.setAttribute("y", myName.offsetTop + headerText.offsetTop);
svgMyName.setAttribute("font-size", window.getComputedStyle(myNameEle).fontSize);
svgMyName.setAttribute("font-family", window.getComputedStyle(myNameEle).fontFamily);

svgTagline.setAttribute("x", taglineOffset.left);
svgTagline.setAttribute("y", tagline.offsetTop + headerText.offsetTop);
svgTagline.setAttribute("font-size", window.getComputedStyle(taglineEle).fontSize);
svgTagline.setAttribute("font-family", window.getComputedStyle(taglineEle).fontFamily);

svgTagline2.setAttribute("x", tagline2Offset.left);
svgTagline2.setAttribute("y", tagline2.offsetTop + headerText.offsetTop);
svgTagline2.setAttribute("font-size", window.getComputedStyle(tagline2Ele).fontSize);
svgTagline2.setAttribute("font-family", window.getComputedStyle(tagline2Ele).fontFamily);

function buildBackground() {

  var limit = Math.floor(window.innerWidth / 200);
  var xStep = window.innerWidth / limit;
  var startX = 0;
  var startY = randomInRange(window.innerHeight*.33);
  var endY = randomInRange(window.innerHeight*.66);
  var yStep = (startY - endY)/limit;


  var pointsArray =[];
  // lower left point
  pointsArray.push([0,window.innerHeight]);
  // left side start
  pointsArray.push([0, startY]);

  // build inner points
  for(var k=1; k<limit; k++ ){
    pointsArray.push([randomInRange(startX+xStep),randomInRange(startY-yStep)]);
    startX = startX+xStep;
    startY = startY-yStep;
  }

  // right side end
  pointsArray.push([window.innerWidth, endY]);
  // lower right point
  pointsArray.push([window.innerWidth, window.innerHeight])

  var pointsString = "";

  for(var i = 0; i<pointsArray.length; i++) {
    pointsString = pointsString.concat(pointsString, " ", pointsArray[i].toString());
  }

  background.setAttribute("points", pointsString);
}
buildBackground();



var animation;
// TODO: limit animation loop
function animate() {
	animation = requestAnimationFrame(animate);
  svgMyName.setAttribute("y", myName.offsetTop + headerText.offsetTop);
  svgTagline.setAttribute("y", tagline.offsetTop + headerText.offsetTop);
  svgTagline2.setAttribute("y", tagline2.offsetTop + headerText.offsetTop);


}
animate();
