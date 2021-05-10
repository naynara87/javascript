let str = `
010-1234-5678
thesecon@gmail.com
http://dfdfd.co.kr
The quick brown fox jumps over the lazy dog
agbbdcccddd the lazy dog.fox
https://localhost:1234
동해물과 백두산이 마르고 닳도록
`


// const regexp = new RegExp('the','gi')
// const regexp = /the/gi
// console.log(str.match(regexp))
// console.log(str.match(/the/gi))
console.log(str.match(/\./gim))

const regexp2 = /fox/gi
console.log(regexp2.test(str),'---')

str = str.replace(regexp2,'aaa')
console.log(str)


console.log(
    str.match(/d$/gm),
    str.match(/^t/gim)
)

console.log(
    str.match(/dog|fox/gm)
)

console.log(
    str.match(/https?/gm)
)

console.log(
    str.match(/\b\w{2,3}\b/g)
)

console.log(
    str.match(/[0-9]{1,}/g),
    str.match(/[가-힣]{1,}/g),
)

console.log(
    str.match(/\bf\w{1,}\b/g)
)

const h = ` the hello world    !  
`
console.log(
    h.replace(/\s/g,'')
)

console.log(
    str.match(/.{1,}(?=@)/g),
    str.match(/(?<=@).{1,}/g)
)