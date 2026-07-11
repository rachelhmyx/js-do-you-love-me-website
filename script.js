let count = 0;

let scale = 1;

function moveButton(){

    const noBtn =
        document.getElementById("noBtn");

    const yesBtn =
        document.getElementById("yesBtn");

    const title =
        document.getElementById("title");

    count++;

    scale += 0.1;

    yesBtn.style.transform =
        `scale(${scale})`;

    if(count === 3){

        title.innerHTML =
            "🥺 Are You Sure?";
    }

    if(count === 6){

        title.innerHTML =
            "😭 Really?";
    }

    if(count === 9){

        title.innerHTML =
            "💔 Don't Break My Heart";
    }

    if(count === 12){

        title.innerHTML =
            "❤️ Please Say YES";
    }

    let x =
        Math.random() *
        (window.innerWidth - 150);

    let y =
        Math.random() *
        (window.innerHeight - 100);

    noBtn.style.left =
        x + "px";

    noBtn.style.top =
        y + "px";
}

function yesClick(){

    const message =
        document.getElementById("loveMessage");

    message.style.display =
        "block";

    createHearts();

    launchConfetti();

    document.getElementById("title").innerHTML =
        "😍 You Made My Day 😍";
}

function createHearts(){

    for(let i = 0; i < 40; i++){

        let heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() *
            window.innerWidth + "px";

        heart.style.fontSize =
            (20 + Math.random()*30) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 4000);
    }
}

function launchConfetti(){

    confetti({
        particleCount:200,
        spread:180,
        origin:{y:0.6}
    });
}