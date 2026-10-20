var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

let productsArray = [
       {
           id: 1004,
           title: "Scratch Post X-TREME",
           description: "The ultimate in high-end scratching posts",
           price: 6500,
           image: "images/catPost.jpg",
           availableInventory:3,
       },
       {
           id: 1005,
           title: "Luxury Cat Toy",
           description: "A delightful toy that your cat will adore",
           price: 7000,
           image: "images/catToy.jpg",
           availableInventory:10,
       }
   ];

app.use(function(request, response) {
    console.log("In comes a request to: " + request.url);
    response.json(productsArray);
});

app.listen(3000, function() {
    console.log("App started on port 3000");
});