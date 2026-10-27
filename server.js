var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

let lessons = [
    {
        id: 1001,
        subject: "Computer Science",
        location: "Hendon",
        price: 35,
        image: "images/compSciPic.jpg",
        imageAlt: "Students Coding",
        availability: 5
    },
    {
        id: 1002,
        subject: "Physics",
        location: "Hendon",
        price: 30,
        image: "images/physicsPic.jpg",
        imageAlt: "Image of a particle",
        availability: 5
    },
    {
        id: 1003,
        subject: "Maths",
        location: "Hendon",
        price: 25,
        image: "images/mathsPic.jpg",
        imageAlt: "Picture of algebra",
        availability: 5
    }
];

app.use(function(request, response) {
    console.log("In comes a request to: " + request.url);
    response.json(lessons);
});

app.listen(3000, function() {
    console.log("App started on port 3000");
});