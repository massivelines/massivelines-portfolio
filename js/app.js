$(document).foundation();

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  // newSize is the name of the now-current breakpoint, oldSize is the previous breakpoint
  console.log(newSize);
});

// // Look for .hamburger
// var hamburger = document.querySelector(".hamburger");
// // On click
// hamburger.addEventListener("click", function() {
//   // Toggle class "is-active"
//   hamburger.classList.toggle("is-active");
//   // Do something else, like open/close menu
// });


// gets location and size of element
// function getOffset(el) {
//   el = el.getBoundingClientRect();
//   return {
//     left: el.left,
//     right: el.right,
//     top: el.top,
//     bottom: el.bottom,
//     width: el.width,
//     height: el.height
//   };
// }

// var range = 100;

// function randomInRange(val) {
//   var min = Math.ceil(val - range);
//   var max = Math.floor(val + range);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// var headerTextOffset = getOffset(headerText);

// var myNameEle = document.getElementById("myName");
// var myNameOffset = getOffset(myName);

// var taglineEle = document.getElementById("tagline");
// var taglineOffset = getOffset(tagline);

// var tagline2Ele = document.getElementById("tagline2");
// var tagline2Offset = getOffset(tagline2);

// var contactMeEle = document.getElementById("contactMe");
// var contactMeOffset = getOffset(contactMe);

// svgMyName.innerHTML = myName.innerText;
// svgTagline.innerHTML = tagline.innerText;
// svgTagline2.innerHTML = tagline2.innerText;

// headerSvg.setAttribute("height", window.innerHeight + (headerTextOffset.height * 2));
// headerSvg.setAttribute("width", window.innerWidth);


// svgMyName.setAttribute("x", myNameOffset.left);
// svgMyName.setAttribute("y", myName.offsetTop + headerText.offsetTop);
// svgMyName.setAttribute("font-size", window.getComputedStyle(myNameEle).fontSize);
// svgMyName.setAttribute("font-family", window.getComputedStyle(myNameEle).fontFamily);

// svgTagline.setAttribute("x", taglineOffset.left);
// svgTagline.setAttribute("y", tagline.offsetTop + headerText.offsetTop);
// svgTagline.setAttribute("font-size", window.getComputedStyle(taglineEle).fontSize);
// svgTagline.setAttribute("font-family", window.getComputedStyle(taglineEle).fontFamily);

// svgTagline2.setAttribute("x", tagline2Offset.left);
// svgTagline2.setAttribute("y", tagline2.offsetTop + headerText.offsetTop);
// svgTagline2.setAttribute("font-size", window.getComputedStyle(tagline2Ele).fontSize);
// svgTagline2.setAttribute("font-family", window.getComputedStyle(tagline2Ele).fontFamily);

// ctaCutout.setAttribute("x", contactMeOffset.left);
// ctaCutout.setAttribute("y", contactMe.offsetTop + headerText.offsetTop);
// ctaCutout.setAttribute("height", contactMeOffset.height);
// ctaCutout.setAttribute("width", contactMeOffset.width);


// function buildBackground() {

//   var limit = Math.floor(window.innerWidth / 300);
//   // var limit = 7;
//   var startX = 0;
//   var xStep = (window.innerWidth - startX) / limit;
//   // var startY = randomInRange(window.innerHeight*.33);
//   var startY = window.innerHeight * .15;
//   var endY = window.innerHeight;
//   var yStep = (startY - endY) / limit;
//   var bottomRight = window.innerHeight/.9;



//   var pointsArray = [];


//   pointsArray.push([0,window.innerHeight * .15]);
//   pointsArray.push([window.innerWidth/3.5,window.innerHeight/3]);
//   pointsArray.push([window.innerWidth/2,window.innerHeight/1.4]);
//   pointsArray.push([window.innerWidth/1.2,window.innerHeight/1.1]);
//   pointsArray.push([window.innerWidth, window.innerHeight/.9]);
//   pointsArray.push([window.innerWidth * .7, window.innerHeight/.91]);
//   pointsArray.push([window.innerWidth * .6, window.innerHeight/.92]);
//   pointsArray.push([window.innerWidth * .4, window.innerHeight/.93]);
//   pointsArray.push([window.innerWidth * .2, window.innerHeight/.97]);
//   pointsArray.push([0, window.innerHeight/.92]);

//   console.log(pointsArray);
  
//   var pointsString = "";

//   for (var i = 0; i < pointsArray.length; i++) {
//     pointsString = pointsString.concat(" ", pointsArray[i].toString());
//   }
  
//   background.setAttribute("points", pointsString);

// }
// buildBackground();



// var animation;
// // TODO: limit animation loop
// function animate() {
//   animation = requestAnimationFrame(animate);
//   // svgMyName.setAttribute("y", myName.offsetTop + headerText.offsetTop);
//   // svgTagline.setAttribute("y", tagline.offsetTop + headerText.offsetTop);
//   // svgTagline2.setAttribute("y", tagline2.offsetTop + headerText.offsetTop);
//   // ctaCutout.setAttribute("y", (contactMe.offsetTop + headerText.offsetTop))


// }
// animate();


// menu icon
function menuChange(x) {
  x.classList.toggle("change")
}