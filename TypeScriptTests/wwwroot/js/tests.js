var firstName = "Francesco";
var surName = "Abbruzzese";
function fullName(x, y, spaces) {
    return x + Array(spaces + 1).join(' ') + y;
}
var label = fullName(firstName, surName, 3);
var aString = "this is a " + firstName + " string", aNumber, anInteger = 1;
var untypedVar;
untypedVar = 1.2;
var test1 = untypedVar + 2;
var nullCheck = null;
var undefinedCheck = undefined;
var myDice = 5; //Right
function wrongNumer(x) {
    if (x > 0)
        return x;
}
//# sourceMappingURL=tests.js.map