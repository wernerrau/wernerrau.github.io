var files = [
	"http://wernerrau.github.io/oef1.html",
	"http://wernerrau.github.io/oef2.html"
]
var numFiles = files.length;
var chosenFileNr = Math.floor(Math.random()*numFiles);
var chosenFile = files[chosenFileNr];
var delay = 1000*60 // 1 minute
setTimeout(function() {window.location = chosenFile;}, delay);