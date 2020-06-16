var aboutIcon = $('#aboutSection .addition .addIcon');
var onAbt = false;
var xposAbt = 100;

var waypoint = new Waypoint({
  element: aboutSection,
  handler: function(direction) {
    console.log('Scrolled to about!'+direction+" sTop: "+$(document).scrollTop())
    if (direction=="down") {
      onAbt = true;
    } else if (direction=="up") {
      onAbt = false;
    }
  }
});


var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
     // downscroll code
      if (xposAbt>=0 && $(document).scrollTop() >= 847-500) {
       xposAbt--;
      }
   } else {
      // upscroll code
      if (xposAbt<=100 && $(document).scrollTop() <= 847) {
        xposAbt++;
      }
   }
   if (xposAbt>=0&&xposAbt<=100) {
     aboutIcon.css("margin-left", xposAbt+"%");
     console.log(xposAbt);
     console.log("sTop: "+$(document).scrollTop());
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
