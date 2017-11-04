var fs= require('fs');
var twitter = require('twitter');
var spot = require('node-spotify-api');
var request = require('request');
var args = process.argv;
var liriCL = args[2];

var mykeys = require('./keys.js')
var accessKeys = mykeys.twitterKeys
//determing which process to run based on command entered
switch(liriCL){
	case 'spotify-this-song':
	spotSong();
	break;

	case 'movie-this':
	omdbRetrieve();
    break;

    case 'my-tweets':
    myActualTweets();
    break;

    case 'do-what-it-says':
    doAsCommanded();
    break;

}
function omdbRetrieve(){
  var queryUrl = 'http://www.omdbapi.com/?t=' + args[3]
  request(queryUrl + function(error, response){
   if(error){
      	console.log('Whoops! Couldn\'t get the tweets,')
      }
   else {
   	console.log ('\n' + JSON.parse(response.Title))
   	console.log('\n' + JSON.parse(response.Rating))
   	console.log('\n' + JSON.parse(response.Year))
   }
}
}

function spotSong(){
	var query = args[3]
   if(error){
      	console.log('There was an error')
      }
   else {
    //spotify.search
    //retrieve values
    //console.log values
    }            
   }
  }
}


function myActualTweets(){
	//making a twitter object keeps saying not defined
	var forTwitAccess = new Twitter(accessKeys);
	// creating parameters to use with the twitter object to get my data
	var accessMyAccount = {screen_name:just4holdin, count: 20};
	//getting needed stuff from twitter object
	forTwitAccess.get('statuses/usertimeline', accessMyAccount, function(error, response){
      if(error){
      	console.log('Whoops! Couldn\'t get the tweets,')
      }
	
	else{
      var tweetsArray = accessMyAccount.count
      for (var i = 0; i < tweetsArray.length; i++) {
      	console.log('creation date:' + tweetsArray[i].created_at);
      	console.log('\n' + 'What\'s in the tweet' + tweetsArray[i].text);
      }
	}
  }
)}

function doAsCommanded(){
	fs.readFile('./random.text', 'utf-8', function(error, data){
      if error{
      	console.log(error)
      }
	}
}

