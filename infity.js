const op = function(a, b){
  return a+b
}

const div = function(a, b){
  return a / b
}

const two = function(n){
  return n * 2
}

const compareMax = function(a, b){
  return a > b
}

console.log(div(4, 0))

console.log(new Date())

console.log(Infinity++)
console.log(compareMax(op(div(8, 0), div(8, 0)), div(4, 0)))
console.log(compareMax(div(4,0), op(div(8, 0), div(8, 0))))

const i = Infinity
const o = i + 1

console.log(i == o)//true

const u = i * i

console.log(u === i)

