const player = {
    nickname: "Ste",
    age: 21,
    isDead: false,

    // método do objeto
    present()
    {
        console.log("Meu nick é", this.nickname);
    }
}

player.name = "Stephany Resque";
console.log(player.nickname)

console.log(player);
player.present();

for(const prop in player)
{
    console.log(prop);
}

const computer = {
    motherBoard : "B360M",
    videoCard : "RTX 2070",
    cpu : "Intel i7 8700",

    // objeto dentro de um objeto!
    font: {
        name : "XPG Reactor",
        waat : 800
    }
}

console.log(computer.font.name);

const rl = require("node:readline");

const prompt = rl.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)

prompt.question();
prompt.close();