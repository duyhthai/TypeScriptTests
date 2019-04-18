var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// Array destructuring
var fruits = ["banana", "apple", "pear", "strawberry", "cherry", "peach"];
var first, second, third;
first = fruits[0], second = fruits[1], third = fruits[2];
var newfirst = fruits[0], newsecond = fruits[1], newthird = fruits[2];
var fourth = fruits[3], sixth = fruits[5];
var rest;
first = fruits[0], second = fruits[1], rest = fruits.slice(3);
// Array spreads
var firstArray = ["a", "b", "c"];
var secondArray = ["f", "g", "h"];
var arraySpread = firstArray.concat(["d"], secondArray, ["i"]);
// Tuples destructuring
function stringToNumber1(s) {
    var res = parseFloat(s);
    if (isNaN(res))
        return [0, false];
    else
        return [res, true];
}
var _a = stringToNumber1("5.7"), toShow = _a[0], ok = _a[1];
if (ok)
    console.log(toShow);
else
    console.log("error");
var mary = {
    firstname: "mary",
    surname: "smith",
    address: "....."
};
var surname, secondname;
(surname = mary.surname, secondname = mary.secondname);
var newMarySurname = mary.surname, newMarySecondname = mary.secondname;
var maryName = mary.firstname, maryOthers = __rest(mary, ["firstname"]);
var laptop = {
    name: "surface pro",
    price: 400,
    description: "....."
};
var quantity = 2;
var sale = __assign({ quantity: quantity }, laptop, { totalPrice: quantity * laptop.price });
var saleDiscount = 0.8;
var discountedSale = __assign({ quantity: quantity }, laptop, { price: laptop.price * saleDiscount, totalPrice: quantity * laptop.price * saleDiscount });
// Object spread is the easiest way to clone objects:
var laptopClone = __assign({}, laptop);
// It can also be used to apply defaults
var optionsDefaults = {
    option1: "default1",
    option2: "default2"
};
var options = __assign({}, optionsDefaults, { option2: "custom value" });
//# sourceMappingURL=DestructuringAndSpread.js.map