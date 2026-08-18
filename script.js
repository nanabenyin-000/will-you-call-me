const noBtn =
    document.getElementById("noBtn");

const yesBtn =
    document.getElementById("yesBtn");

const mainContainer =
    document.getElementById("mainContainer");

const yesScreen =
    document.getElementById("yesScreen");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const heartsContainer =
    document.querySelector(".hearts");



/* =========================
   MOVE NO BUTTON
========================= */

function moveNoButton() {

    const buttons =
        document.querySelector(".buttons");

    const maxX =
        buttons.clientWidth -
        noBtn.offsetWidth;

    const maxY =
        buttons.clientHeight -
        noBtn.offsetHeight;


    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;


    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";

}



/* Computer */

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);



/* Phone */

noBtn.addEventListener(
    "touchstart",

    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);





/* =========================
   YES BUTTON
========================= */

yesBtn.addEventListener(
    "click",

    function() {

        /* Hide first screen */

        mainContainer.style.display =
            "none";


        /* Show message */

        yesScreen.style.display =
            "block";


        /* Music */

        backgroundMusic.volume = 0.6;

        backgroundMusic.currentTime = 0;


        backgroundMusic.play()
            .then(() => {

                console.log(
                    "❤️ Background music is playing!"
                );

            })
            .catch((error) => {

                console.error(
                    "❌ Music could not play:",
                    error
                );

            });


        /* Hearts */

        startCelebration();

    }
);





/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.classList.add(
        "floating-heart"
    );


    const hearts = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💘"

    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (
            15 +
            Math.random() * 30
        ) + "px";


    heart.style.animationDuration =
        (
            4 +
            Math.random() * 5
        ) + "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(

        () => {

            heart.remove();

        },

        9000

    );

}



/* Regular hearts */

setInterval(
    createHeart,
    700
);





/* =========================
   YES CELEBRATION
========================= */

function startCelebration() {

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        setTimeout(

            createHeart,

            i * 80

        );

    }

}





/* =========================
   CALL BUTTON
========================= */

const callBtn =
    document.getElementById(
        "callBtn"
    );


callBtn.addEventListener(
    "click",

    function() {

        window.location.href =
            "tel:+233XXXXXXXXX";

    }
);