var songs = ["/songs/Faded - Alan Walker.mp3","/songs/Darkside.mp3","/songs/Onmyway.mp3","/songs/Bohemian.mp3"];
var poster = ["/images/Poster1.jpg","/images/Poster2.jpg","/images/Poster3.jpg","/images/Poster4.jpg"];
        
var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");
        
var song = new Audio();
var currentSong = 0;    
window.onload = playSong;
        
function playSong(){
        song.src = songs[currentSong];  
        songTitle.textContent = songs[currentSong];
        song.play();    
    }
        
function playOrPauseSong(){
            if(song.paused){
                song.play();
                $("#play img").attr("src","/images/Pause.png");
            }
            else{
                song.pause();
                $("#play img").attr("src","/images/Play.png");
            }
        }
        
        song.addEventListener('timeupdate',function(){ 
            var position = song.currentTime / song.duration;
            fillBar.style.width = position * 100 +'%';
        });
        
    
        function next(){
            
            currentSong++;
            if(currentSong > 3){
                currentSong = 0;
            }
            
            playSong();
            $("#play img").attr("src","/images/Pause.png");
            $("#image img").attr("src",poster[currentSong]);
            $("#bg img").attr("src",poster[currentSong]);
        }
    
function pre(){
            
    currentSong--;
    if(currentSong < 0){
        currentSong = 3;
    }
    playSong();
    $("#play img").attr("src","/images/Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}