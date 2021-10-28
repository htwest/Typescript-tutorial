"use strict";
// BASIC TYPES
let id = 5;
let company = "West Inc";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5]; /* Accepts Only an Array of Numbers */
let arr = [1, true, 'Hello'];
// TUPLE
let person = [1, 'Brad', true]; /* Order Matters */
// TUPLE ARRAY
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];
// UNION
let productId = 22;
productId = '22';
// ENUM
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Up)  /* Default Value of 0 */
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
// console.log(Direction2.Left) /* Equals 3 *** Up = 1, Down = 2, Left = 3, Right = 4 */
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
// console.log(Direction3.Left)
// OBJECTS
