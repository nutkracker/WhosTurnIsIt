module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'WhosTurnIsIt' );


app.launch( function( request, response ) {
	response.say( 'Welcome to Whos Turn Is It' ).reprompt( 'Ready.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('sayWhoMakesCuppa',
  {
    "slots":{"intentType":"LITERAL"}
	,"utterances":[ 
		"who's turn to make a cup of tea {1|intentType}",
		"I want to hear you say the number {1|intentType}"]
  },
  function(request,response) {
    var intentType = request.slot('intentType');
    response.say("You asked for "+intentType);
    response.say("It's Andrea's turn.")
  }
);

module.exports = app;