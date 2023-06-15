let playbutton = document.getElementById("playbutton");
let pausebutton = document.getElementById("pausebutton");
let time = document.getElementById('tracktime');

var audio = document.getElementById("audio");
function playAudio() {
	audio.play();
}
function pauseAudio() {
	audio.pause();
}
function updateTime(track) {
		time.innerHTML =
		Math.floor((track.currentTime)/60) + ':'+Math.floor((track.currentTime)%60) + '/' + Math.floor((track.duration)/60) +':'+ Math.floor((track.duration)%60);
}
