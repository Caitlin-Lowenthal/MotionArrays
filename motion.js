const characterKnight = {
    arrImgs: ["running w0000.png", "running w0001.png",
        "running w0002.png", "running w0003.png", "running w0004.png",
        "running w0005.png", "running w0006.png", "running w0007.png", "running w0008.png", "running w0009.png",
        "running w0010.png", "running w0011.png"],
    poseNumber: 0,
    elem: document.querySelector("#knight"),
    screenWidth: window.width,
    screenHeight: document.querySelector("#castle").scrollHeight,
    x: 1200,
    y: document.querySelector("#castle").scrollHeight - 140,
    timerId: null,
    move : function() {
        if (this.x > this.screenWidth - 150) {
            characterKnight.x = 5;
        } else {
            this.x -= 5;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "HorseridingKnight\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 12;
        }
    }
}
const characterCoffin = {
    arrImgs: [ "coffin right0000.png", "coffin right0001.png", "coffin right0002.png", "coffin right0003.png", 
        "coffin right0004.png", "coffin right0005.png", "coffin right0006.png", "coffin right0007.png", 
        "coffin right0008.png", "coffin right0009.png", "coffin right0010.png" ],
    poseNumber: 0,
    elem: document.querySelector("#coffin"),
    screenWidth: window.width,
    screenHeight: document.querySelector("#castle").scrollHeight,
    x: 0,
    y: document.querySelector("#castle").scrollHeight - 200,
    timerId: null,
    move : function() {
        if (this.x > this.screenWidth - 150) {
            characterCoffin.x = 5;
        } else {
            this.elem.src =
                "Coffin\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 11;
        }
    }
}
const characters = [characterKnight, characterCoffin];

function move() {
    characters.forEach(character => {
        character.timerId = setInterval(frame, 150);
    });
}

function frame() {
    characters.forEach(character => {
        character.move();
    })
}

function stopMoving() {
    characters.forEach(character => {
        clearInterval(character.timerId);
    })
}



