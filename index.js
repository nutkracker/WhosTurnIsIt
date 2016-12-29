module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'WhosTurnIsIt' );


app.launch( function( request, response ) {
	response.say( 'Welcome to Who\'s Turn Is It.' ).reprompt( 'Ask me a question like \'Who should make the cup of tea\'' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('sayWhoDoesWhat',
  {
    "slots":{"intentType":"LITERAL"}
	,"utterances":[ 
		"who's turn to make a cup of tea {1|intentType}",
		"I want to hear you say the number {1|intentType}"]
  },
  function(request,response) {
    var intentType = request.slot('intentType');
    response.say("You asked for who's turn is it to "+intentType);

    var whosToDoIt = randomIntInc(1,4);

    switch(whosToDoIt)
    {
    	case 1:
    		response.say(". It's Matthew's turn.")
    		break;
    	case 2:
    		response.say(". It's Andrea's turn.")
    		break;
    	case 3:
    		response.say(". It's Emilia's turn.")
    		break;
    	default:
    		response.say(". It's Hannah's turn.")
    		break;
    }

  }
);

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
};

module.exports = app;