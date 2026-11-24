var express = require('express');
var path = require("path");
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.json());

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
        location: "Mill Hill",
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
    },
    {
        id: 1004,
        subject: "Chemistry",
        location: "Colindale",
        price: 28,
        image: "images/chemistryPic.jpg",
        imageAlt: "Images of lab Equipment",
        availability: 5
    },
    {
        id: 1005,
        subject: "Biology",
        location: "Colindale",
        price: 33,
        image: "images/biologyPic.jpg",
        imageAlt: "Image of a cell",
        availability: 5
    },
    {
        id: 1006,
        subject: "Art",
        location: "Colindale",
        price: 25,
        image: "images/artPic.jpg",
        imageAlt: "Image of the Mona Lisa",
        availability: 5
    },
    {
        id: 1007,
        subject: "History",
        location: "Mill Hill",
        price: 26,
        image: "images/historyPic.jpg",
        imageAlt: "Picture of The Colosseum",
        availability: 5
    },
    {
        id: 1008,
        subject: "Geography",
        location: "Finchley",
        price: 33,
        image: "images/geographyPic.jpg",
        imageAlt: "Image of a globe",
        availability: 5
    },
    {
        id: 1009,
        subject: "Music",
        location: "Finchley",
        price: 23,
        image: "images/musicPic.jpg",
        imageAlt: "Image of a musical note",
        availability: 5
    },
    {
        id: 1010,
        subject: "French",
        location: "Hendon",
        price: 24,
        image: "images/frenchPic.jpg",
        imageAlt: "Picture of the eiffel tower",
        availability: 5
    }
];

app.use(function(request, response, next) {
    console.log(request.method + " request to " + request.url);
    next();
});

var imagePath = path.resolve(__dirname, "images");
app.use("/images", express.static(imagePath));

app.use("/images", function(request, response) {
    response.status(404).send("Image not found!");
});

app.get("/lessons", function(request, response) {
    response.json(lessons);
});

app.post("/orders", function(request, response) {
    let order = request.body;
    console.log("New order: " + order.name + ", " + order.phone + ", lessons: " + order.lessonIDs + ", spaces: " + order.spaces);
    response.json({ message: "Order received" });
});

app.listen(3000, function() {
    console.log("App started on port 3000");
});