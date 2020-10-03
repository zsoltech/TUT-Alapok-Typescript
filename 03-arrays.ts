var stringTomb: string[] = ['1'];
var stringTomb2: Array<string> = [''];
var numberTomb2: Array<number> = [1];

var tupleTest: [string, number, boolean, boolean];
tupleTest = ['hello', 10, true, true];

tupleTest[0].substring(1); // OK
tupleTest[1].substring(1); // ERROR

console.log();