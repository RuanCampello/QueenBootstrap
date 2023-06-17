let playbutton = document.getElementById("playbutton");
let pausebutton = document.getElementById("pausebutton");
let currentAudioTime = document.getElementById('currentAudioTime');
let totalAudioDuration = document.getElementById('totalAudioDuration');
let currentAudioTime1 = document.getElementById('currentAudioTime1');
let totalAudioDuration1 = document.getElementById('totalAudioDuration1');
let currentAudioTime2 = document.getElementById('currentAudioTime2');
let totalAudioDuration2 = document.getElementById('totalAudioDuration2');

var audio = document.getElementById("audio");
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");

function playAudio(track) {
	if(track == 0){
		audio.play();
		audio1.pause();
		audio2.pause();
	}
	else if(track == 1){
		audio1.play();
		audio.pause();
		audio2.pause();
	}
	else if(track == 2){
		audio2.play();
		audio1.pause();
		audio.pause();
	}
}
function pauseAudio(track) {
	if(track == 0){
		audio.pause();
	}
	else if(track == 1){
		audio1.pause();
	}
	else if(track == 2){
		audio2.pause();
	}
}

function update_time(current_time, audio_duration, song){
	if(song == 0){
		currentAudioTime.innerHTML = (format_time(current_time));
		totalAudioDuration.innerHTML = (format_time(audio_duration));
	}
  else if(song == 1){
		currentAudioTime1.innerHTML = (format_time(current_time));
		totalAudioDuration1.innerHTML = (format_time(audio_duration));
	}
	else if(song == 2){
		currentAudioTime2.innerHTML = (format_time(current_time));
		totalAudioDuration2.innerHTML = (format_time(audio_duration));
	}
}
function format_time(audio_duration){
  sec = Math.floor( audio_duration );
  min = Math.floor( sec / 60 );
  min = min >= 10 ? min : '0' + min;
  sec = Math.floor( sec % 60 );
  sec = sec >= 10 ? sec : '0' + sec;
  return min + ":"+ sec;
}