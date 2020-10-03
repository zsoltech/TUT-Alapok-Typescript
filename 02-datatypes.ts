var logikai: boolean = true;

var decimal: number = 6;
var hexadecimal = 0xf;
var binary: number = 0b101;
//var long: bigint = 100n;

var szoveg: string;
szoveg = `${decimal} ez egy jó szám!`;
szoveg += '!!!!!!!';

//console.log(szoveg);

var myAny: any;
myAny = 5;
myAny = '';

var myUnknown: unknown;

// szoveg = myAny;
// myAny.method();

// szoveg = myUnknown;
// myUnknown.method();

// Types Assertation
var u2: unknown = 'test';
//szoveg = u2 as string;
szoveg = (<string>u2);
console.log(szoveg);

var u: undefined = undefined;
var n: null = null;

