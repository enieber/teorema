const elevado2 = function(n){
  return n * n
}

const elevado3 = function(n){
  return n * n * n
}

const elevado4 = function(n){
  return n * n * n * n
}

const elevado5 = function(n){
  return n * n * n * n * n
}

const elevado6 = function(n){
  return n * n * n * n * n * n
}                            

console.log('\nElevado por 2\n')

for(i=0; i <=10; i++){
  console.log(i + ' => '+ elevado2(i))
}

const elevado7 = function(n){
  return n * n * n * n * n * n * n
} 

console.log('\nElevado por 3\n')

for(i=0; i <=10; i++){
  console.log(i + ' => '+ elevado3(i))
}

const elevado8 = function(n){
  return n * n * n * n * n * n * n * n
}                           

console.log('\nElevado por 4\n')

for(i=0; i <=10; i++){                              
  console.log(i + ' => '+ elevado4(i))
}

const elevado9 = function(n){
  return n * n * n * n * n * n * n * n * n
}                            

console.log('\nElevado por 5\n')

for(i=0; i <=10; i++){
  console.log(i + ' => '+ elevado5(i))
}

console.log('\nElevado por 6\n')

for(i=0; i <=10; i++){
  console.log(i + ' => '+ elevado6(i))
}

console.log('\nElevado por 7\n')

for(i=0; i <=10; i++){
  console.log(i + ' => '+ elevado7(i))
}

console.log('\nElevado por 8\n')

for(i=0; i <=10; i++){
  console.log(i + ' => '+ elevado8(i))
}

console.log('\nElevado por 9\n')

for(i=0; i <=10; i++){
  console.log(i + ' => '+ elevado9(i))
}
