//Buttons assignment
var clap_btn = document.getElementById('clap');
var hihat_btn = document.getElementById('hihat');
var kick_btn = document.getElementById('kick');
var openhat_btn = document.getElementById('openhat');
var boom_btn = document.getElementById('boom');
var ride_btn = document.getElementById('ride');
var snare_btn = document.getElementById('snare');
var tom_btn = document.getElementById('tom');
var tink_btn = document.getElementById('tink');

//Importing Audios
var clap_audio = new Audio('./sounds/clap.wav');
var hihat_audio = new Audio('./sounds/hihat.wav');
var kick_audio = new Audio('./sounds/kick.wav');
var openhat_audio = new Audio('./sounds/openhat.wav');
var boom_audio = new Audio('./sounds/boom.wav');
var ride_audio = new Audio('./sounds/ride.wav');
var snare_audio = new Audio('./sounds/snare.wav');
var tom_audio = new Audio('./sounds/tom.wav');
var tink_audio = new Audio('./sounds/tink.wav');



//Adding click event listioners to buttons.
clap_btn.addEventListener('click',function(){
    clap_audio.play();
});

hihat_btn.addEventListener('click',function(){
    hihat_audio.play();
});

kick_btn.addEventListener('click',function(){
    kick_audio.play();
});

openhat_btn.addEventListener('click',function(){
    openhat_audio.play();
});

boom_btn.addEventListener('click',function(){
    boom_audio.play();
});

ride_btn.addEventListener('click',function(){
    ride_audio.play();
});

snare_btn.addEventListener('click',function(){
    snare_audio.play();
});

tom_btn.addEventListener('click',function(){
    tom_audio.play();
});

tink_btn.addEventListener('click',function(){
    tink_audio.play();
});

