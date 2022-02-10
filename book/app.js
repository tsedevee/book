const express = require('express');
const {books} = require('./book.json');
const app = express();

app.get('/', function(req, res) {
    res.send('Tsedevdorj');
})

// app.get('/api/books', function(req, res) {
//     res.json(books);
// });ç

app.get('/random/books', function(req, res) {
    
    const randomBooks = {
        "9781593279509": "Eloquent JavaScript, Third Edition",
        "9781491943533": "Practical Modern JavaScript",
        "9781593277574": "Understanding ECMAScript 6",
        "9781449365035": "Speaking JavaScript",
        "9781449331818": "Learning JavaScript Design Patterns",
        "9798602477429": "You Don't Know JS Yet",
    }
    const values = Object.values(randomBooks)
    const randomValue = values[parseInt(Math.random(1, 3, 8) * values.length)]
   
    console.log(randomValue);
    res.json(randomValue);
});

app.get('/sorted/books', function(req, res) {
    // date eer sort hii 
    res.json(sorted_books);
});

app.listen(3000, ()=>{
    console.log("Hello world");
    console.log("Server is running on port 3000");
});
