var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function mygen(input) {
    return input;
}
var gen = mygen(1);
var gen2 = mygen('');
var MyGenClass = /** @class */ (function () {
    function MyGenClass() {
        this.lista = new Array();
    }
    MyGenClass.prototype.csinal = function (valami) { };
    ;
    return MyGenClass;
}());
var myGenClass = new MyGenClass();
myGenClass.lista.push('valami');
myGenClass.csinal(1);
console.log(myGenClass.lista);
// factory
var Allat = /** @class */ (function () {
    function Allat() {
    }
    Allat.prototype.fut = function () {
        console.log("Futas");
    };
    ;
    Allat.prototype.hangotAd = function () {
        console.log(this.hang);
    };
    return Allat;
}());
var Ember = /** @class */ (function (_super) {
    __extends(Ember, _super);
    function Ember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ember.prototype.Alszik = function () {
        console.log('alszik...');
    };
    return Ember;
}(Allat));
function create(myClass) {
    return new myClass();
}
function create2(myClass) {
    var c = new myClass();
    c.fut();
    return c;
}
var emb = create2(Ember);
emb.Alszik();
