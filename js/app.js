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

var range = 100;

function randomInRange(val) {
  var min = Math.ceil(val - range);
  var max = Math.floor(val + range);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var headerTextOffset = getOffset(headerText);

var myNameEle = document.getElementById("myName");
var myNameOffset = getOffset(myName);

var taglineEle = document.getElementById("tagline");
var taglineOffset = getOffset(tagline);

var tagline2Ele = document.getElementById("tagline2");
var tagline2Offset = getOffset(tagline2);

var contactMeEle = document.getElementById("contactMe");
var contactMeOffset = getOffset(contactMe);

svgMyName.innerHTML = myName.innerText;
svgTagline.innerHTML = tagline.innerText;
svgTagline2.innerHTML = tagline2.innerText;

headerSvg.setAttribute("height", window.innerHeight + (headerTextOffset.height * 2));
headerSvg.setAttribute("width", window.innerWidth);


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

ctaCutout.setAttribute("x", contactMeOffset.left);
ctaCutout.setAttribute("y", contactMe.offsetTop + headerText.offsetTop);
ctaCutout.setAttribute("height", contactMeOffset.height);
ctaCutout.setAttribute("width", contactMeOffset.width);


function buildBackground() {

  var limit = Math.floor(window.innerWidth / 300);
  // var limit = 7;
  var startX = 0;
  var xStep = (window.innerWidth - startX) / limit;
  // var startY = randomInRange(window.innerHeight*.33);
  var startY = window.innerHeight * .15;
  var endY = window.innerHeight;
  var yStep = (startY - endY) / limit;
  var bottomRight = window.innerHeight/.9;



  var pointsArray = [];
  // lower left point
  // pointsArray.push([0,randomInRange(window.innerHeight + headerTextOffset.height/2)]);
  pointsArray.push([0, window.innerHeight]);
  // left side start
  // pointsArray.push([startX, startY]);

  pointsArray.push([0,window.innerHeight * .15]);
  pointsArray.push([window.innerWidth/3.5,window.innerHeight/3]);
  pointsArray.push([window.innerWidth/2,window.innerHeight/1.4]);
  pointsArray.push([window.innerWidth/1.2,window.innerHeight/1.1]);
  pointsArray.push([window.innerWidth, window.innerHeight/.9]);
  // pointsArray.push([1439,1019]);


  // build inner points
  // for (var k = 1; k < limit; k++) {
  //   if(k>0){
  //    pointsArray.push([randomInRange(startX + xStep), randomInRange(startY - yStep)]); 
  //   }
  //   startX = startX + xStep;
  //   startY = startY - yStep;
  // }

  // right side end
  // pointsArray.push([window.innerWidth, endY]);
  // lower right point
  // pointsArray.push([window.innerWidth, bottomRight]);

  console.log(pointsArray);
  


  var pointsString = "";

  for (var i = 0; i < pointsArray.length; i++) {
    pointsString = pointsString.concat(" ", pointsArray[i].toString());
  }
  
  background.setAttribute("points", pointsString);

  // -----------------------------------------

  headerSpacerSvg.setAttribute("height", headerTextOffset.height);
  headerSpacerSvg.setAttribute("width", window.innerWidth);

  var spacerPointsArray = [];
  var spacerPointsString = "";

  spacerPointsArray.push([0, window.innerHeight - 3]);
  spacerPointsArray.push([0, randomInRange(bottomRight + 100)]);


  spacerPointsArray.push([randomInRange(window.innerWidth * .25), randomInRange(bottomRight + 50)]);
  spacerPointsArray.push([randomInRange(window.innerWidth * .5), randomInRange(bottomRight + 25)]);
  spacerPointsArray.push([randomInRange(window.innerWidth * .75), randomInRange(bottomRight + 50)]);

  spacerPointsArray.push([window.innerWidth, randomInRange(bottomRight + 100)]);

  spacerPointsArray.push([window.innerWidth, bottomRight - 3]);


  for (var i = 0; i < spacerPointsArray.length; i++) {
    spacerPointsString = spacerPointsString.concat(" ", spacerPointsArray[i].toString());
  }

  spacerFill.setAttribute("points", spacerPointsString);

}
buildBackground();



var animation;
// TODO: limit animation loop
function animate() {
  animation = requestAnimationFrame(animate);
  svgMyName.setAttribute("y", myName.offsetTop + headerText.offsetTop);
  svgTagline.setAttribute("y", tagline.offsetTop + headerText.offsetTop);
  svgTagline2.setAttribute("y", tagline2.offsetTop + headerText.offsetTop);
  ctaCutout.setAttribute("y", (contactMe.offsetTop + headerText.offsetTop))


}
animate();


// menu icon
function menuChange(x) {
  x.classList.toggle("change")
}