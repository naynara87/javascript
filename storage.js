const user = {
    name: 'HEROPY',
    age: 85,
    emails: [
        'thesecon@gmail.com',
        'neo@gmail.com',
    ]
}
//로컬스토리지에 저장
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(str))

//로컬스토리지에 출력
// localStorage.setItem('user', JSON.stringify(user))
// console.log(localStorage.getItem('user'))
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')