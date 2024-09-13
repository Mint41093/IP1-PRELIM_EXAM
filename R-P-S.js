let iswhite = false;
let st = true  
let profile1 = "Assets/img/Profile1.jpg";
let profile2 = "Assets/img/Profile2.jpg";

let rock = "Assets/img/Rock.jpg";
let raudio = new Audio("Assets/audio/the-rock-meme.mp3");
let paper = "Assets/img/Paper.jpg";
let paudio = new Audio("Assets/audio/yeah-boy.mp3");
let scissors = "Assets/img/Scissors.jpg";
let saudio = new Audio("Assets/audio/sus-meme-sound.mp3");

let draw = new Audio("Assets/audio/not-bad.mp3");
let win1 = new Audio("Assets/audio/talo-sorry-sorry.mp3");
let win2 = new Audio("Assets/audio/meme-de-creditos");
let win3 = new Audio("Assets/audio/funny-laughing-sound.mp3");
let win4 = new Audio("Assets/audio/laughing-man.mp3");

function start()
{
    if(st)
    {
        let ui1 = document.getElementById("startingpoint");
        let ui2 = document.getElementById("main");
        let ui3 = document.getElementById("autop");
        let srtaudio = document.getElementById("strtaudio");

        ui1.style.display = "none";
        ui2.style.display = "block";
        ui3.style.display = "block";
        srtaudio.play();
    }
}

async function play()
{
    let pb = document.getElementById("playbttn");
    let res = document.getElementById("result");
    let ng = document.getElementById("restbttn");

    if(iswhite != true)
    {   // let main = document.getElementById("main")
        // main.style.backgroundColor = "dimgray"
    }

    let Bot1 = document.getElementById("playrimg1");
    let R1 = Math.floor(Math.random() *3)+1;
    if(R1 === 1)
    {
        Bot1.src = rock;
    }
    else if(R1 === 2)
    {
        Bot1.src = paper;
    }
    else
    {
        Bot1.src = scissors;
    }

    let Bot2 = document.getElementById("playrimg2");
    let R2 = Math.floor(Math.random() *3)+1;
    if(R2 === 1)
    {
        Bot2.src = rock;
    }
    else if(R2 === 2)
    {
        Bot2.src = paper;
    }
    else
    {
        Bot2.src = scissors;
    }

    let scr1 = document.getElementById("plyr1scr");
    let scr2 = document.getElementById("plyr2scr");

    if (R1 === R2 ) {
        Bot1.style.borderColor = "limegreen";
        Bot2.style.borderColor = "limegreen";
    }else if (R1 === 2 && R2 === 1 || R1 === 3 && R2 == 2 || R1 == 1 && R2 === 3) {
        Bot1.style.borderColor = "limegreen";
        Bot2.style.borderColor = "red";
    }else  {
        Bot1.style.borderColor = "red";
        Bot2.style.borderColor = "limegreen";
    }  
    if(R1 === R2)
    {
        await new Promise(r => setTimeout(r, 650));
        res.innerHTML = "==== DRAW ====";
        draw.play();
    }else if(R1 === 1 && R2 === 2)
    {
        await new Promise(r => setTimeout(r, 650));
        res.innerHTML = "==== BOT 2 WON ====";
        scr2.innerHTML = parseInt(scr2.innerHTML) + 1;
        paudio.play();
    }else if(R1 === 1 && R2 === 3)
    {
        await new Promise(r => setTimeout(r, 650));
        res.innerHTML = "==== BOT 1 WON ====";
        scr1.innerHTML = parseInt(scr1.innerHTML) + 1;
        raudio.play();
    }else if(R1 === 2 && R2 === 1)
    {
        await new Promise(r => setTimeout(r, 650));
        res.innerHTML = "==== BOT 1 WON ====";
        scr1.innerHTML = parseInt(scr1.innerHTML) + 1;
        paudio.play();
    }else if(R1 === 2 && R2 === 3)
    {
        await new Promise(r => setTimeout(r, 650));
        res.innerHTML = "==== BOT 2 WON ====";
        scr2.innerHTML = parseInt(scr2.innerHTML) + 1;
        saudio.play();
    }else if(R1 == 3 && R2 == 1)
    {
        await new Promise(r => setTimeout(r, 650));
        res.innerHTML = "==== BOT 2 WON ====";
        scr2.innerHTML = parseInt(scr2.innerHTML) + 1;
        raudio.play();
    }else if(R1 === 3 && R2 === 2)
    {
        await new Promise(r => setTimeout(r, 650));
        res.innerHTML = "==== BOT 1 WON ====";
        scr1.innerHTML = parseInt(scr1.innerHTML) + 1;
        saudio.play();
    }
        
    let stat1 = document.getElementById("plyr1stats")
    let stat2 = document.getElementById("plyr2stats")

    if(scr1.innerHTML === "3")
    {
        stat1.style.visibility = "visible";
        Bot1.style.scale = "1.2"
        Bot2.style.scale = "0.8"
        await new Promise(r => setTimeout(r, 2000));
        Bot1.src = profile1;
        Bot2.src = profile2;
        let ap = document.getElementById("autop");
        ap.style.display = "none";
        pb.style.display = "none"
        ng.style.display = "block"
        iswhite = true;
        console.log(iswhite)

        let DR = Math.floor(Math.random() *4)+1;
        if(DR === 1)
        {
            win1.play();
        }
        else if(DR === 2)
        {
            win2.play();
        }
        else if(DR === 3)
        {
            win3.play();
        }
        else
        {
            win4.play();
        }
    }else if(scr2.innerHTML === "3")
    {
        stat2.style.visibility = "visible";
        Bot2.style.scale = "1.2"
        Bot1.style.scale = "0.8"
        await new Promise(r => setTimeout(r, 2000));
        Bot2.src = profile2;
        Bot1.src = profile1;
        let ap = document.getElementById("autop");
        ap.style.display = "none";
        pb.style.display = "none";
        ng.style.display = "block";
        iswhite = true;

        let DR = Math.floor(Math.random() *4)+1;
        if(DR === 1)
        {
            win1.play();
        }
        else if(DR === 2)
        {
            win2.play();
        }
        else if(DR === 3)
        {
            win3.play();
        }
        else
        {
            win4.play();
        }
    } 
    await new Promise(r => setTimeout(r, 2500));
    Bot1.style.borderColor = "transparent";
    Bot2.style.borderColor = "transparent";
    Bot1.src = profile1;
    Bot2.src = profile2;
    res.innerHTML = "==== --- ====";
}

function newgame()
{
    if(iswhite = true)
    {
        // let main = document.getElementById("main")
        // main.style.backgroundColor = "gray"
        let pb = document.getElementById("playbttn");
        let ng = document.getElementById("restbttn");

        ng.style.display = "none";
        pb.style.display = "block";
        pb.style.visibility = "visible";

        let Bot1 = document.getElementById("playrimg1");
        let Bot2 = document.getElementById("playrimg2");

        Bot1.src = profile1;
        Bot2.src = profile2;

        Bot2.style.scale = "1"
        Bot1.style.scale = "1"

        let stat1 = document.getElementById("plyr1stats");
        let stat2 = document.getElementById("plyr2stats");
        
        stat1.style.visibility = "hidden";
        stat2.style.visibility = "hidden";

        let scr1 = document.getElementById("plyr1scr");
        let scr2 = document.getElementById("plyr2scr");

        scr1.innerHTML = "0";
        scr2.innerHTML = "0";

        let res = document.getElementById("result");
        res.innerHTML = "==== --- ====";

        let ap = document.getElementById("autop");
        ap.style.display = "block";

        iswhite = false;
    }
    else
    {
        iswhite = false;
    }
}

async function Autoplay()
{
    let pb = document.getElementById("playbttn");
    let ap = document.getElementById("autop");
    pb.style.visibility = "hidden";
    ap.style.display = "none";

    while(iswhite != true)
    {
        await new Promise(r => setTimeout(r, 2000));
        play();
        // let main = document.getElementById("main")
        // main.style.backgroundColor = "green"
        console.log(iswhite)
        //Ayaw sir gumana ng sleep function, d pala parehas sa c++ 
        // (Naghanap nalang ako sir sa net hahaha)
        await new Promise(r => setTimeout(r, 3500));
        let res = document.getElementById("result");
        res.innerHTML = "==== --- ====";
        await new Promise(r => setTimeout(r, 2900));
    }
        clearInterval(Autoplay);
}