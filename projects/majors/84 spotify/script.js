console.log("Ho jaye fir kuch javascript ka jaduu")

let currentSong = new Audio; // taki ek time pr ek hi gaana chle
let songs


function formatTime(seconds) {
    if (isNaN(seconds) || seconds<0){
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

// fetching the songs name

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/projects/majors/84%20spotify/songs/")
    let response = await a.text(); // now we have to parse it 
    console.log(response);

    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a") // response ke andr a tag  mnn h gaane
    // console.log(as)

    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    // console.log(songs);
    return songs
}

const playMusic = (track, pause = false) => {
    let encodedTrack = encodeURIComponent(track);  // removes the extra spaces
    currentSong.src = `http://127.0.0.1:3000/projects/majors/84%20spotify/songs/${encodedTrack}`
    // console.log(currentSong.src);
    if (!pause) {
        currentSong.play();
        play.src = "svg/pause.svg"
    }


    // adding the name and duration of the song 
    document.querySelector(".song-info").innerHTML = decodeURI(track)
    document.querySelector(".song-duration").innerHTML = "00:00/00:00 "
}


async function main() {


    //get the list of the songs
    songs = await getSongs()
    console.log(songs);

    // playing a song when we click on the play button 1st time
    playMusic(songs[8], true)


    //show all the songs in playlist
    let songList = document.querySelector(".song-list").getElementsByTagName("ul")[0]

    for (const gaane of songs) {
        songList.innerHTML = songList.innerHTML +
            `<li><img class = "invert" src="svg/music.svg"  alt="">
                <div class="info">
                    <div> ${gaane.replaceAll("%20", " ")}</div>
                    <div>Legend Rahul</div>
                </div>
                <div class="playnow">
                    <span>PlayNow</span>
                    <img class = "invert" src="svg/play.svg" alt="">
                </div>    </li>`
    }



    /*
    // just for checking purposes
        // // playing 1st song in js
        // var audio = new Audio(songs[1])
        // // for an event (from mdn)
            audio.addEventListener("loadedmetadata",()=>{
            let duration = audio.duration;
            console.log(audio.duration,audio.currentSrc,audio.currentTime); // we'll get the duration
        })
        audio.play(); 
    */



    // attach an event listener to every song
    Array.from(document.querySelector(".song-list").getElementsByTagName("li"))
        .forEach(e => {
            // we'll get all the name of the song
            e.addEventListener("click", element => {
                console.log(e.querySelector(".info").firstElementChild.innerHTML);
                playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
            })
        });


    //attach an event listener to play,next and previous
    // changing the play and pause
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "svg/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "svg/play.svg"
        }
    })

    //event listener for prevoius 
    
    previous.addEventListener("click",()=>{
        console.log("p is clicked");
        // console.log(currentSong.src)
        let index = songs.indexOf(decodeURI(currentSong.src.split("/").slice(-1)[0]))
        console.log(index)
        if((index)>0){
            playMusic(songs[index-1])
        }
    })

    // previous.addEventListener("click", () => {
    //     console.log("Previous is clicked");
    //     const currentTrackName = decodeURIComponent(currentSong.src.split("/").slice(-1)[0]);
    //     let index = songs.indexOf(currentTrackName);
    //     console.log("Current Index:", index);
    //     console.log("Total Songs:", songs.length);
    
    //     if (index > 0) {
    //         console.log("Playing Previous Song:", songs[index - 1]);
    //         playMusic(songs[index - 1]);
    //     } else {
    //         console.log("No Previous Song");
    //     }
    // });
    
    
    //event listener for next 
    next.addEventListener("click",()=>{
        console.log("n is clicked");
        // console.log(currentSong.src.split("/").slice(-1)[0])
        let index = songs.indexOf(decodeURI(currentSong.src.split("/").slice(-1)[0]))
        console.log(index)
        if((index+1)<songs.length){
            playMusic(songs[index+1])
        }
    })

    // next.addEventListener("click", () => {
    //     console.log("Next is clicked");
    //     const currentTrackName = decodeURIComponent(currentSong.src.split("/").slice(-1)[0]);
    //     let index = songs.indexOf(currentTrackName);
    //     console.log("Current Index:", index);
    //     console.log("Total Songs:", songs.length);
    
    //     if (index + 1 < songs.length) {
    //         console.log("Playing Next Song:", songs[index + 1]);
    //         playMusic(songs[index + 1]);
    //     } else {
    //         console.log("No Next Song");
    //     }
    // });
    
    // listen for time update event
    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime, currentSong.duration) //just for checking purposes

        document.querySelector(".song-duration").innerHTML = `${formatTime(currentSong.currentTime)} / ${formatTime(currentSong.duration)}`


        // for seekbar circle
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 99 + "%"

    });



    //to enable changing the song time(add an event listener to seekbar)
    document.querySelector(".seek-bar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percent + "%";

        // changing the time of the song
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    });

    // add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        // console.log("Hamburger clicked!");
        document.querySelector(".left").style.left = "-0%";
    });


    // closing left on  cross
    document.querySelector(".close").addEventListener("click", () => {
        // console.log("Hamburger clicked!");
        document.querySelector(".left").style.left = "-120%";
    });




// 3;45;19

}

main()

// document.querySelector(".playsong").addEventListener("click", main);
