console.log("Ho jaye fir kuch javascript ka jaduu")

let currentSong = new Audio; // taki ek time pr ek hi gaana chle
let songs;
let currFolder;


function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

// fetching the songs name


async function getSongs(folder) {
    currFolder = folder
    let a = await fetch(`/${folder}/`)

    let response = await a.text(); // now we have to parse it 
    // console.log(response);

    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a") // response ke andr a tag  mnn h gaane
    // console.log(as)

    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }
    // console.log(songs);

    //show all the songs in the playlist
    let songList = document.querySelector(".song-list").getElementsByTagName("ul")[0];
    songList.innerHTML = " "
    for (const gaane of songs) {
        if (typeof gaane === 'string') {
            songList.innerHTML = songList.innerHTML +
                `<li><img class = "invert" src="svg/music.svg"  alt="">
                        <div class="info">
                            <div> ${gaane.replaceAll("%20", " ")}</div>
                            <div>Legend Rahul</div>
                        </div>
                        <div class="playnow">
                            <span>PlayNow</span>
                            <img class = "invert" src="svg/play.svg" alt="">
                        </div>    </li>`;
        }
    }

        // attach an event listener to every song
        Array.from(document.querySelector(".song-list").getElementsByTagName("li"))
        .forEach(e => {
            // we'll get all the name of the song
            e.addEventListener("click", element => {
                console.log("working");
                console.log(e.querySelector(".info").firstElementChild.innerHTML);
                playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
            })
        });
    console.log("get song end");
    return songs
}

const playMusic = (track, pause = false) => {
    let encodedTrack = track;  // removes the extra spaces
    currentSong.src = `/${currFolder}/${encodedTrack}`
    console.log(currentSong.src);
    if (!pause) {
        currentSong.play();
        play.src = "svg/pause.svg"
    }

    // adding the name and duration of the song 
    document.querySelector(".song-info").innerHTML = decodeURI(track)
    document.querySelector(".song-duration").innerHTML = "00:00/00:00 "
    console.log("play music end");
}




async function displayAlbums() {
    let a = await fetch(`/songs/`)
    let response = await a.text(); // now we have to parse it
    let div = document.createElement("div")
    div.innerHTML = response;
    console.log(div);
    let anchors = div.getElementsByTagName('a')
    console.log(anchors);

    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];

        if ((e.href.includes("/songs")) && (!e.href.includes(".htaccess")) ){
            // console.log(e.href.split("/").slice(-2)[0]);
            let folder = e.href.split("/").slice(-2)[0];

            //get meta data of folder
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json();
            console.log(response);
            document.querySelector(".card-container").innerHTML = document.querySelector(".card-container").innerHTML +
                `<div data-folder = "${folder}" class="card ">
            <div class="play">
                <svg class="svg" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
                    class="Svg-sc-ytk21e-0 bneLcE">
                    <path
                        d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z">
                    </path>
                </svg>
            </div>
            <img  src="songs/${folder}/cover.jpg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }
    

    // addig libraries dynamically play cards(load the playlist)
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        console.log(e);
        e.addEventListener("click", async item => {
            console.log("inside event listener of card");
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
            console.log('songs ',songs)
            console.log("saying to play first song of album");
            playMusic(songs[0])
        })
    })
}




async function main() {
    //get the list of the songs
    await getSongs("songs/arijit"); // it'll decide which playlist will load when we open of refresh the website
    // playing a song when we click on the play button 1st time
    playMusic(songs[0], true);

    //display all the albums on the page

    displayAlbums();




    //attach an event listener to play,next and previous
    // changing the play and pause
    play.addEventListener("click", async () => {
        try {
            if (currentSong.paused) {
                await playMusic(songs[0]); // Ensure playMusic completes before playing
                currentSong.play();
                play.src = "svg/pause.svg";
            } else {
                currentSong.pause();
                play.src = "svg/play.svg";
            }
        } catch (error) {
            console.error("Error in play button click:", error.message);
        }
    });
    
    //event listener for prevoius 

    previous.addEventListener("click", () => {
        console.log("p is clicked");
        // console.log(currentSong.src)
        let index = songs.indexOf((currentSong.src.split("/").slice(-1)[0]))
        console.log(index)
        if ((index) > 0) {
            playMusic(songs[index - 1])
        }
    })

    //event listener for next 
    next.addEventListener("click", () => {
        console.log("n is clicked");
        // console.log(currentSong.src.split("/").slice(-1)[0])
        let index = songs.indexOf((currentSong.src.split("/").slice(-1)[0]))
        console.log(index)
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })














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


    // add an event to volume range
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("change", e, e.target, e.target.value);
        currentSong.volume = parseInt(e.target.value) / 100  //because volume range is from 0 to 1
    })



    // changing mute and volume icon
    document.querySelector(".volIcon").addEventListener("click", (e) => {
        // console.log("clicked one time");
        if (e.target.src.includes("volume.svg")) {
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            currentSong.volume = 0
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;

        }
        else {
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentSong.volume = 0.2
            document.querySelector(".range").getElementsByTagName("input")[0].value = 20;

        }
    })


}

main()


