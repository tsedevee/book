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

// var jsonContent = {
//     "featured": [
//         {
//             "id": "111",
//             "title": "post title 111",
//             "desc": "This is a test desc 111"
//         },
//         {
//             "id": "222",
//             "title": "post title 222",
//             "desc": "This is a test desc 222"
//         },
//         {
//             "id": "333",
//             "title": "post title 333",

//             "desc": "This is a test desc 333"
//         }
//     ]
// }

// var random = jsonContent.featured[Math.floor(Math.random() * jsonContent.featured.length)];
// console.log(random)