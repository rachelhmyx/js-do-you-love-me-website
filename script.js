let count = 0;

let scale = 1;

function moveButton(){

    const noBtn =
        document.getElementById("noBtn");

    const yesBtn =
        document.getElementById("yesBtn");

    const title =
        document.getElementById("title");

    const container =
        document.querySelector(".container");

    count++;

    // YES phóng to nhưng không quá lớn
    if(scale < 2){

        scale += 0.08;

        yesBtn.style.transform =
            `scale(${scale})`;
    }

    // Thay đổi câu hỏi

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

    if(count === 15){

        title.innerHTML =
            "🥹 Just Click YES";
    }

    const containerRect =
        container.getBoundingClientRect();

    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;

    const padding = 20;

    const maxX =
        containerRect.width
        - buttonWidth
        - padding;

    const maxY =
        containerRect.height
        - buttonHeight
        - padding;

    const x =
        Math.random() * maxX;

    const y =
        100 + Math.random() * (maxY - 100);

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

    document
        .getElementById("title")
        .innerHTML =
        "😍 You Made My Day 😍";

    createHearts();

    launchConfetti();
}

function createHearts(){

    const totalHearts =
        window.innerWidth < 768
            ? 25
            : 50;

    for(let i = 0; i < totalHearts; i++){

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() *
            window.innerWidth + "px";

        heart.style.fontSize =
            (20 + Math.random() * 25) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 4000);
    }
}

function launchConfetti(){

    confetti({

        particleCount:
            window.innerWidth < 768
                ? 120
                : 250,

        spread:180,

        origin:{
            y:0.6
        }
    });
}