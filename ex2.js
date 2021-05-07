//JS 데이터

// string: '',"",``
// Number
// Boolean: truem false
// undefined
// null
// Array: []
// Object: {}


const result = 'hello world!'.indexOf('world')
console.log(result)



const a = ' hello world! ' 
console.log(a.length)
console.log(a.indexOf('HEROPY') !== -1)
console.log(a.slice(6,11))
console.log(a.replace('world','heropy'))
console.log(a.trim())


const pi = 3.14159265
console.log(pi)

const str = pi.toFixed(2) //소수점 2자리만 남기고 제거
console.log(str)
console.log(typeof str)

const integer = parseInt(str) //전역함수 숫자로 출력 (정수만 출력)
const float = parseFloat(str) //전역함수 소수점 문자를 숫자로 출력
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)



console.log('abs: ', Math.abs(-12)) //특정한 숫자 절대값 |a|
console.log('min: ', Math.min(2, 8)) //가장 작은 값
console.log('max: ', Math.max(2, 8)) //가장 큰 값
console.log('ceil: ', Math.ceil(3.14)) //정수올림
console.log('floor: ', Math.floor(3.14)) //정수내림
console.log('round: ', Math.round(3.14)) //반올림
console.log('random: ', Math.random(3.14)) //랜덤 난수

console.log(Math.floor(Math.random() * 10))

const array1 = [5,12,4,11,23]
const fruits = ['Apple','Banana','Cherry']



const array2 = fruits.forEach((fruit,index) => {
    console.log(`${fruit}-${index}`)
})
console.log(array2)

const array3 = fruits.map((fruit, index) => ({
    id: index,
    name: fruit
    })
)
console.log(array3)



const a1 = array1.map(number => {
    return number < 11
})
console.log(a1)

const b1 = array1.filter(number => {
    return number < 11
})
console.log(b1)

const c1 = fruits.find(fruit => {
    return /^B/.test(fruit)   //B로 시작하는 
})
console.log(c1)

const d1 = fruits.findIndex(fruit => /^B/.test(fruit))   //B로 시작하는 

console.log(d1)


const userAge = {
    name: 'heropy',
    age: 85
}
const userEmail = {
    name: 'heropy',
    email: 'heropy@gmail.com'
}

const target = Object.assign({}, userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)
//참조형 데이터

const a2 = { k:123 }
const b2 = { k:123 }
console.log(a2 === b2) 


