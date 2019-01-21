
function playSound (e){
    let audio = document.getElementById('audio'+e.keyCode);
    audio.currentTime =0;
    audio.play();
}
window.addEventListener('keydown', playSound);