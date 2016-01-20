var files = [
	"oef1.html",
	"oef2.html"
]
var numFiles = files.length;
var chosenFileNr = Math.floor(Math.random()*numFiles);
var chosenFile = files[chosenFileNr];
var delay = 1000*20 // 1 minute
function newLocation() {
	window.location = chosenFile;
}
function fadeOut() {
	$('body').fadeOut(2000,newLocation);
}
setTimeout(fadeOut,delay);
$('body').css('display', 'none');
jQuery(function($) {

  $(document.body).fadeIn(5000);

});

