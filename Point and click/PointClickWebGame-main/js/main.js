document.getElementById("mainTitle").innerText = "Point and Click adventure game";

//Game window reference
const gameWindow = document.getElementById("gameWindow");

//Main Character
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

//Foreground Items
const door1 = document.getElementById("door1");
const sign = document.getElementById("sign");
const key = document.getElementById("key1");


gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log(e.target.id);
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";


    switch (e.target.id) {
        case "key1":
            console.log('found key!');
            document.getElementById("key1").remove();
            const keyElement = document.createElement("li");
            keyElement.innerText = "Key";
            inventoryList.appendChild(keyElement);

        case "door1":
            mainCharacter.style.backgroundColor = "#FFFF00";
            door1.style.opacity = 0.5;
            sign.style.opacity = 1;
            break;

        case "sign":
            mainCharacter.style.backgroundColor = "#FFFF00";
            sign.style.opacity = 0.5;
            door1.style.opacity = 1;
            break;

        default:
            //explode
            mainCharacter.style.backgroundColor = "#1286a7";
            door1.style.opacity = 1;
            sign.style.opacity = 1;
            break;

    }

}