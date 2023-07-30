
// alert(" Whats up ")
userclickedpattern = [];
let level = 0;
let randomNumber;
let randomchosencolor;
let gamepattern = [];
let count;
function nextsequence() {
    userclickedpattern = [];
    randomNumber = Math.floor(Math.random() * 4);

    // console.log(randomNumber);
    buttonCOlors = ["red", "blue", "green", "yellow"];
    randomchosencolor = buttonCOlors[randomNumber];

    count = 0;


    gamepattern.push(randomchosencolor);
    console.log(gamepattern)


    $("#" + randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    document.querySelector("#level-title").innerText = `Level ${level}`
    level++;


}
$(document).on("keyup", function (event) {
    console.log(event.key)
    if (event.key === 'a' || event.key === "A") {
        nextsequence();
    }


});
//nextsequence()


// audio_file = "sounds/" + randomchosencolor + ".mp3"
// console.log(audio_file);
// var audio = new Audio(audio_file)
// function playaudio() {
//     try {
//         audio.play();
//     }
//     catch (e) {
//         console.log("error playing dude", e.message)
//     }
// }
// playaudio();



$('.btn').click(function (event) {

    userchoosencolor = this.id;



    console.log(userclickedpattern)
    function rapper() {
        console.log("inside this func");
        console.log(userchoosencolor);
        userclickedpattern.push(userchoosencolor);
        console.log(userclickedpattern)
        playsound(userchoosencolor)
        animatepress(userchoosencolor)
        count++;
    }
    rapper();
    console.log(userclickedpattern)

    if (count === level) {
        console.log(level);
        //   console.log(this.id)
        checkanswer(gamepattern.length - 1)
    }
    else {
        console.log("another round coming up")
        console.log(level)
    }
})

function playsound(userchoosencolor) {
    let audio_file;
    audio_file = "sounds/" + userchoosencolor + ".mp3"
    let audio = new Audio(audio_file);
    audio.play();
}
function animatepress(currentcolor) {
    $("#" + currentcolor).addClass("pressed");
    setTimeout(function () { $("#" + currentcolor).removeClass("pressed") }, 100)
}


function checkanswer(currentlevel) {
    let flag = 1;
    for (let i = 0; i <= currentlevel; i++) {
        console.log("gamepattern");
        console.log(gamepattern[i]);
        console.log("userclickedpattern");
        console.log(userclickedpattern[i]);

        if (gamepattern[i] === userclickedpattern[i]) {
            // console.log(gamepattern[currentlevel])
            //console.log(userclickedpattern[currentlevel])
            console.log("sucess");


        }
        else {
            flag = 0;
            //console.log(gamepattern[currentlevel])
            //console.log(userclickedpattern[currentlevel])
            console.log("hey u donkey cann't rememeber this shit ")
            console.log("wrong");
            document.querySelector("#level-title").innerText = `Wrong`
        }
    }
    if (flag) {
        document.querySelector("#level").innerText = `Score: ${level}`

        console.log("checking finished bro");
        setTimeout(nextsequence(), 50000)


    }
    else {
        $("body").addClass("game-over ");
        console.log("resetting")
        document.querySelector("#Reseting").innerText = "Resetting Game "
        setTimeout(reset, 10000);

        // reset();
        console.log("")
        console.log("wrong")
    }



    // if (gamepattern[currentlevel] === userclickedpattern[currentlevel]) {
    //     console.log(gamepattern[currentlevel])
    //     console.log(userclickedpattern[currentlevel])
    //     console.log("sucess");
    //     if (1) {
    //         console.log("checking finished bro");
    //         setTimeout(nextsequence(), 10000
    //         )

    //     }
    // }
    // else {
    //     console.log(gamepattern[currentlevel])
    //     console.log(userclickedpattern[currentlevel])
    //     console.log("wrong");
    // }


}
function reset() {
    document.querySelector("#Reseting").innerText = ""
    console.log("calling the reseting function ")
    $("body").removeClass("game-over");
    gamepattern = [];
    userclickedpattern = [];
    level = 0;
    console.log(level);
    nextsequence();
}