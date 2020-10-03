class Allat {
    hang: string;

    fut() {
        console.log("Futas")
    };

    hangotAd() {
        console.log(this.hang);
    }
}

class Kutya extends Allat {

    //override
    hangotAd() {
        this.hang = "ugat";
        super.hangotAd();
    }
}

var kutya = new Kutya();
//kutya.fut();
kutya.hangotAd();

class Ember {
    public magassag: number;
    private bankkartyaszam: string;

    protected alvasido: number;


    Alszik(): void {

    }
}

class Orvos extends Ember {

    readonly nevElotag = 'Dr.';
    Alszik() {
        console.log(this.alvasido);
    }
}

var orvos = new Orvos();
orvos.magassag = 10;
console.log(orvos.nevElotag);

//orvos.bankkartyaszam = '10';


class Auto {
    private _tipus: string;

    get tipus(): string { return this._tipus + '!!!!'; }

    set tipus(value: string) {
        if (value === 'BMW') {
            throw new Error('tiltott');
        }
        this._tipus = value;
    }
}

var auto = new Auto();
auto.tipus = 'Mazda';
console.log(auto.tipus);

abstract class Allat2 {
    abstract hangotAd(): void;

    mozog(): void {
        console.log("mozog...");
    }
}

class Cica extends Allat2 {
    hangotAd() { console.log('nyávog'); }
}

var cica = new Cica();
cica.mozog();