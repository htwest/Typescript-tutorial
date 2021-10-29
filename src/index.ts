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

const user:{
  id: number,
  name:string
} = {
  id: 1,
  name: 'John',
}

type User = {
  id: number,
  name: string
}
const user2: User = {
  id: 1,
  name: 'John',
}

// TYPE ASSERTION

let cid: any = 1

// let customerId = <number>cid
let customerId = cid as number

// FUNCTIONS

function addNum(x: number, y: number): number {  /* After params is expected return */
  return x + y
}

function log(message: string | number): void {  /* Void type means no expected return */
  console.log(message)
}
// log('hello world')

// INTERFACES

interface UserInterface {  /* Interfaces cannot be used with primitives or unions */
  readonly id: number /*  specifies a read only property */
  name: string
  age?: number /*  ? marks an optional property */
}
const user1: UserInterface = {
  id: 1,
  name: 'John,'
}

interface MathFunc {
  (x: number, y: number) : number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// CLASSES
