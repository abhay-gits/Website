let audio = document.getElementById('music')
let isPlay = false;
document.getElementById('musicBtn').addEventListener('click',()=>{
    if(!isPlay){
        audio.play();
    }else{
        audio.load();
    }
    isPlay = !isPlay;
})