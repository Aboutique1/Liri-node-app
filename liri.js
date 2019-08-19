require("dotenv").config();

var Spotify = require('node-spotify-api');

var keys = require("./keys")
var spotify = new Spotify(keys.spotify);


var functionToRun = process.argv[2]
var commandToRun = process.argv[3]

if(functionToRun=='concert-this'){
    var command = commandToRun
    function concertThis(command){
        console.log("You want me to find concerts for this song:", command)
        
    }
    concertThis(command)
}

if(functionToRun=='spotify-this'){
    var command = commandToRun
    function sportifyThis(command){
        console.log("You want me to spotify this:", command)
    }
    spotifyThis(command)
}

if(functionToRun=='movie-this'){
    var command = commandToRun
    function movieThis(command){
        console.log("You want me to find a movie for:", command)
    }
    movieThis(command)
}

if(functionToRun=='do-what-it-says'){
    var command = commandToRun
    function doThis(command){
        console.log("You want me to do:", command)
    }
    doThis(command)
}