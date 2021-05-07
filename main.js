import getType from './getType';
import _, { set } from 'lodash';

console.log('test');
console.log(_.camelCase('hello world'));
console.log(typeof 123);
console.log(typeof true);
console.log(typeof null);
console.log(typeof {});


console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))


//비교 연산자

const a = 1
const b = 3

console.log(a === b)
function isEqual(x, y){
    return x === y
}


import random from './getRendom';
// 조건문 (IF statement)

const dd = random()
switch(dd) {
    case 0:
        console.log('dd is 0')
        break
    case 2:
        console.log('dd is 2')
        break 
    case 4 :
        console.log('dd is 4')
        break
    default:
        console.log('rest...')
}

if (dd === 0) {
    console.log('dd is 0')
} else if (a === 2) {
  console.log('a is 2')
} else {
    console.log('rest...')
}

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i+=1){
   const li = document.createElement('li')
   li.textContent = `list-${i + 1}`
   if((i + 1) % 2 === 0){
    li.addEventListener('click', function(){
        console.log(li.textContent)
    })
   }
   ulEl.appendChild(li)
}

// 함수 복습

function sum(x, y){
    // console.log( x + y )
    return x + y
}

const aa = sum(1,3)
const bb = sum(45,3)

console.log(a)
console.log(b)
console.log(a+b)


//화살표 함수
// () => {} vs function (){}

const double = function (x) {
    return x *2
}
console.log('double:', double(8))
const doubleArrow = (x) => x * 2
console.log('doubleArrow', doubleArrow(7))


// 즉시 실행함수
// IIFE, Immediately-Invoked Function Expression

const aaa = 7
function double2() {
    console.log(aaa * 2)
}
double2();

(function () {
 console.log(aaa * 2)
})();

(function () {
    console.log(aaa * 2)
}());

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const bbb = 7

double3()

function double3(){
    console.log(bbb * 2)
}

//타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// const timer = setTimeout(() => {
//     console.log('hi')
// },3000)
const timer = setInterval(() => {
    console.log('hi')
},3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click',() =>{
    clearInterval(timer)
})

// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(cb){
    setTimeout(()=>{
        console.log('hi~')
        cb()
    },3000)
}
timeout(() =>{
    console.log('====== done ======')
});



const naynara = {
    firstName: 'naynara',
    lastName: 'nana',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}


// function user(first, last) {
//     this.firstName = first
//     this.lastName = last
// }
// user.prototype.getFullName = function (){
//     return `${this.firstName} ${this.lastName}`
// }

// const heropy1 = new user('heropy1','park1')
// const heropy2 = new user('heropy2','park2')
// const heropy3 = new user('heropy3','park3')

// console.log(heropy1)
// console.log(heropy2.getFullName())
// console.log(heropy3.getFullName())

// const heropy = { } //리터럴 방식

// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// const nana = {
//     name: 'HEROPY',
//     normal: function () {
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }
// nana.normal()
// nana.arrow()





const timer2 = {
    name: 'hi!!!',
    timeout: function () {
        setTimeout(() => {
            console.log(this.name)
        }, 2000)
    }
}
timer2.timeout()


// ES6 Classes

const nana2 = {
    name: 'nana2',
    normal(){
        console.log(this.name)
    },
    arrow(){
        console.log(this.name)
    }
}

// function user(first, last) {
//     this.firstName = first
//     this.lastName = last
// }
// user.prototype.getFullName = function (){
//     return `${this.firstName} ${this.lastName}`
// }
class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


const heropy1 = new User('heropy1','park1')
const heropy2 = new User('heropy2','park2')
const heropy3 = new User('heropy3','park3')

console.log(heropy1)
console.log(heropy2.getFullName())
console.log(heropy3.getFullName())
