// JSON (javascript Object Notation)
// 자바스크립트의 객체 표기법
import myDate from './myData.json'

console.log(myDate) //data 가져옴

const user = {
    name: 'HEROPY',
    age: 85,
    emails: [
        'thesecon@gmail.com',
        'neo@gmail.com',
    ]
}

console.log('user',user)

const str = JSON.stringify(user) //문자데이터로 관리
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str) // 객체로 관리
console.log('obj', obj)

