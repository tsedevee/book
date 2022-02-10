let a = [];
function randomIntFromInterval(min, max, count) {
var random = Math.floor(Math.random() * (max - min + 1) + min)
for(let i=1; i<=count; i++){
while(a.includes(random)>0){
random = Math.floor(Math.random() * (max - min + 1) + min)
}
a.push(random);
}
return a;
}
const rndInt = randomIntFromInterval(1,8,3)
console.log(rndInt)