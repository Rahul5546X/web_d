console.log("Ho jaye fir kuch javascript ka jaduu")

// fetching the songs name

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/projects/majors/84%20spotify/songs/")
    let response = await a.text() ; // now we have to parse it 
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


async function main() {
    //get the list of the songs
    let songs = await getSongs()
    console.log(songs);


    let songList= document.querySelector(".song-list").getElementsByTagName("ul")[0]

    for (const gaane of songs) {
        songList.innerHTML = songList.innerHTML+
        `<li><img class = "invert" src="svg/music.svg"  alt="">
                <div class="info">
                    <div> ${gaane.replaceAll("%20"," ").replace(".mp3","")}</div>
                    <div>Legend Rahul</div>
                </div>
                <div class="playnow">
                    <span>PlayNow</span>
                    <img class = "invert" src="svg/play.svg" alt="">
                </div>
                
        </li>`
    }
    // playing 1st song in js
    var audio = new Audio(songs[1])
    // for an event (from mdn)
    audio.addEventListener("loadedmetadata",()=>{
        let duration = audio.duration;
        console.log(audio.duration,audio.currentSrc,audio.currentTime); // we'll get the duration
    })
    audio.play();
}
main() 








        
// document.querySelector(".playsong").addEventListener("click", main);
