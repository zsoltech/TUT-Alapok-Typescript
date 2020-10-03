enum Szinek {
    Piros = "ff0000",
    Zold = "00ff00",
    Kek = "0000ff",
    LogoSzin = "ef01c3"
}

var szin: Szinek = Szinek.Piros;
var szin2: string = Szinek["Piros"];

console.log(szin2);