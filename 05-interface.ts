function interFunc(input: { id: string }): void {
    console.log(input.id);
}

var myInput = { id: 'xyz12' };

interface Input {
    id: string;
}

function interFunc2(input: Input): void {
    console.log(input.id);
}

var myInput2: Input = { id: '10' };

interFunc2(myInput2);
interFunc2(myInput);

interface Point {
    readonly x: number;
    readonly y: number;
}

var p1: Point = { x: 10, y: 20 };
//p1.x = 5;

let ro: ReadonlyArray<number> = [1, 2, 3];
// ro[0] = 12; //ERROR
// ro.push(12);
// ro.length = 100;

var normalArray: Array<number>;
normalArray = ro as number[];

// Function Type
interface MyFunc {
    (id: string, value: number): boolean;
}

var myFuncImp: MyFunc = function (id: string, value: number): boolean { return true }
var myFuncImp2: MyFunc = (id: string, value: number): boolean => true;

myFuncImp2('1', 10)

// Class type

interface MyClassInterface {
    id: string;
    getId(): string;
}

class MyClass implements MyClassInterface {       
    id: string;

    getId = () => this.id;
}

class MyClass2 implements MyClassInterface {       
    id: string;

    getId = () => this.id + '1';
}

var mc: MyClassInterface = new MyClass2();
mc.getId();
mc.id = '';


// Extends

interface MyNextClassIf extends MyClassInterface {
    value: number;
}

var nextIf: MyNextClassIf;
