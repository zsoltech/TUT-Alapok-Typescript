function mygen<T>(input: T): T {
    return input;
}
var gen = mygen(1);
var gen2 = mygen('');


interface MyGenInterface<T> {
    lista: Array<T>;
    item: T;
    value: number;
}

class MyGenClass<T, TNext> implements MyGenInterface<T> {
    constructor() {
        this.lista = new Array<T>();
    }
    lista: T[];
    item: T;
    value: number;

    csinal(valami: TNext) { };
}

var myGenClass = new MyGenClass<string, number>();
myGenClass.lista.push('valami');

myGenClass.csinal(1);

console.log(myGenClass.lista);

// factory

class Allat {
    hang: string;

    fut() {
        console.log("Futas")
    };

    hangotAd() {
        console.log(this.hang);
    }
}

class Ember extends Allat{
    public magassag: number;
    private bankkartyaszam: string;

    protected alvasido: number;


    Alszik(): void {
        console.log('alszik...')
    }
}

function create<T>(myClass: { new(): T }): T {    
    return new myClass();
}

function create2<T extends Allat>(myClass: new() => T ): T {

    let c =  new myClass();
    c.fut();
    return c;
}

var emb = create2(Ember);
emb.Alszik();