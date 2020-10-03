function myFunc1(): void { }
function myFunc2(): number { return 0; }

function myFunc3(): never { throw new Error(); }
function myFunc4(): never { while(true) { } }

declare function myFunc5(o: object | null): void; // Union Type ( Intersection Type &)

//myFunc5(10);
myFunc5(null);
myFunc5({ });


var anonFunction = function (x, y) { };

declare function MyOptional(o?: string): void;
MyOptional();

function MyDefault(o: string = 'xyz'): void { };
MyDefault('123');

function MyParams(o: number, ...values: string[]): string {
    return values[0];
 };
console.log(MyParams(1, 'egy', 'ketto', 'harom'));

// LiteralType
type MyBool = 'igen' | 'nem';


function LitFunc(value: MyBool) {
    
}

LitFunc('talán'); // ERROR