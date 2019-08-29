require("dotenv").config();

const axios = require('axios')
var player = require('play-sound') (opts = {})

var Spotify = require('node-spotify-api');

var keys = require("./keys")
var spotify = new Spotify(keys.spotify);

var possible_arguments= ['concert-this','spotify-this','movie-this','do-what-it-says',]


var functionToRun = process.argv[2]
var commandToRun = process.argv[3]

if(functionToRun=='concert-this'){
    var command = commandToRun
    function concertThis(command){
        //make variable equal to generated url like so https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp
        var url = "https://rest.bandsintown.com/artists/" + command + "/events?app_id=codingbootcamp"
        //make a post or get requet to the url above using jquery and ajax

        //Get concert data and open it in your browser
        console.log("You want me to find concerts for this song:", command)
        
    }
    concertThis(command)
}

if(functionToRun=='spotify-this'){
    var command = commandToRun
    function spotifyThis(command){
        console.log("You want me to spotify this:", command)

        spotify.search({ type: 'track', query: command }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
            if (data.tracks.total==0){
                spotify.search({ type: 'track', query: 'The Sign by Ace of Base', limit:1 }, function(err, data) {
                    if (err) {
                      return console.log('Error occurred: ' + err);
                    }
                    console.log("Album: ", data.tracks.items[0].album.name ,"Song Title: ",data.tracks.items[0].name, "Preview: ",JSON.stringify(data.tracks.items[i].preview_url))
                    var artistArray = []
            for (var A=0;A<data.tracks.items[i].artists.length;A++){
                artistArray.push(data.tracks.items[i].artists[A].name)
            }
            console.log ("Artist(s) on this Album: ",JSON.stringify(artistArray) +"\n" )
                })
            }

          console.log(JSON.stringify(data,null,4)); 
          for ( var i =0;i<data.tracks.items.length;i++){
           var number = i+1   
            console.log ("Album "+number+":",JSON.stringify(data.tracks.items[i].album.name), "Song: ",JSON.stringify(data.tracks.items[i].name), "Preview: ",JSON.stringify(data.tracks.items[i].preview_url))
            var artistArray = []
            for (var A=0;A<data.tracks.items[i].artists.length;A++){
                artistArray.push(data.tracks.items[i].artists[A].name)
            }
            console.log ("Artist(s) on this Album: ",JSON.stringify(artistArray) +"\n" )

          }
          });
    }
    spotifyThis(command)
}

if(functionToRun=='movie-this'){
    var command = commandToRun
    function movieThis(command){
        const instance = axios.create({
            baseURL: 'http://www.omdbapi.com/?apikey=697e013a', 
            
        })
        instance.get('', {
            params:{
                t:command
            }
        })
        .then(function(response){
            console.log("Movie Response: ", response.data)
        })
        .catch(function(err){
            console.log(err)
        })
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

if(!possible_arguments.includes(functionToRun)){
    console.log ("Sorry")

    player.play ('foo.mp3' , function(err){
        if (err) throw err
    })

    var audio = player .play('foo.mp3',function(err){
        if (err && !err.killed) throw err    })

function stop(){
    setTimeout(function(){
    
        audio.kill()
    }, 1000 )
}

stop()

}


