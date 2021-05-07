//구조 분해 할당
// 비구조화 할당

const user = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com',
}

//구조 분해 할당
const { name, age, email, address='korea' } = user

console.log(`사용자의 이름은 ${name} 입니다.`)
console.log(`${name}의 나이는 ${age}세입니다.`)
console.log(`${name}의 이메일 주소는 ${email}세입니다.`)
console.log(address)

const fruits =['apple','banana','cherry','orange']
const toObject = (a, b, ...c) =>  ({a,b,c})
console.log(toObject(...fruits))



// 데이터 불변성

let a = 1
let b = 4

console.log(a, b, a === b)
b = a
console.log(a, b, a === b)
a = 7
console.log(a, b, a === b)
let c = 1
console.log(b, c, b === c)




import _ from 'lodash'
//얕은 복사 , 깊은 복사

const user2 = {
    name: 'Heropy',
    age: 85,
    emails: 'thesecon@gmail.com',
}
// const copyUser = Object.assign({},user2)
// const copyUser = {...user2} //얋은 복사
const copyUser = _.cloneDeep(user2) //깊은 복사
console.log(copyUser === user2)

user2.age = 22
console.log('user', user2)
console.log('copyUser', copyUser)

console.log('------')
console.log('------')

user2.emails.push('dddd@gmail.com')
// console.log(user.emails === copyUser.emails)
console.log('user', user2)
console.log('copyUser', copyUser)
