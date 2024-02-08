document.getElementById("mainTitle").innerText = "Point and Click game";

const gameWindow = document.getElementById("gameWindow");
const maincharacter = document.getElementById("maincharacter");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log(e.target.id);
    maincharacter.style.left = x + "px";
    maincharacter.style.top = y + "px";
}
