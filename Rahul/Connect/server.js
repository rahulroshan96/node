/**
 * Created by RAHUL on 02-06-2016.
 */
var http = require('http');
var connect = require('connect');

var app = connect();


function profile(request, response, next) {
    console.log("user requested profile page");
}

function forum(request, response, next) {
    console.log("user requested forum page");
}

app.use('/profile', profile); // this will execute function profile when profile page is requested
app.use('/forum', forum);  // same as profile page

/*
function profile(request, response, next) {
    console.log("user requested profile page");
    //next(); // this will automatically let execute function forum
    // commenting this next will not let execute forum function
}

function forum(request, response, next) {
    console.log("user requested forum page");
    next();
}

app.use(profile);
app.use(forum);
*/

// when the home app object is requested, it will automatically call 4
// profile and forum function
http.createServer(app).listen(8888);
console.log("server is now running....");

