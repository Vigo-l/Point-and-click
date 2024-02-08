document.getElementById("mainTitle").innerText = "Point and Click game";

const gameWindow = document.getElementById("gameWindow");
const maincharacter = document.getElementById("maincharacter");
const offsetcharacter = 16;

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log(e.target.id);
    maincharacter.style.left = x - offsetcharacter + "px";
    maincharacter.style.top = y - offsetcharacter + "px";
}
