// BASIC TYPES

let id: number = 5
let company: string = "West Inc"
let isPublished: boolean = true
let x: any = "Hello"

let ids: number[] = [1,2,3,4,5] /* Accepts Only an Array of Numbers */
let arr: any[] = [1, true, 'Hello']

// TUPLE

let person: [number, string, boolean] = [1, 'Brad', true] /* Order Matters */

// TUPLE ARRAY

let employee:[number, string][]
employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill']
]

// UNION

let productId: string | number = 22
productId = '22';

// ENUM

enum Direction1 {
  Up,
  Down,
  Left,
  Right
}
// console.log(Direction1.Up)  /* Default Value of 0 */

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right
}
// console.log(Direction2.Left) /* Equals 3 *** Up = 1, Down = 2, Left = 3, Right = 4 */

enum Direction3 {
  Up  = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
// console.log(Direction3.Left)

// OBJECTS