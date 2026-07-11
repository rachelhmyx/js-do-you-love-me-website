function yesClick() {

    alert("I Love You Too ❤️");

}

function moveButton() {

    let noBtn =
        document.getElementById("noBtn");

    let x =
        Math.random() *
        (window.innerWidth - 150);

    let y =
        Math.random() *
        (window.innerHeight - 100);

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";
}