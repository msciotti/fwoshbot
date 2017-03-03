var tmi = require('tmi.js');

var options = {
	options:{
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "fwobot",
		password: "oauth:s7fz7kbz20zmp1ifue6ykeir1wet8f"
	},
	channels: ["fwoshy"]
};

var client = new tmi.client(options);
client.connect();

var uptime = 0;


//egml04iz0jxg6mj2vpnjfprejkgoiq
//example of API request: https://api.twitch.tv/kraken/users/fwoshy?client_id=egml04iz0jxg6mj2vpnjfprejkgoiq
//EVENTS
//https://tmi.twitch.tv/group/user/fwoshy/chatters

client.api({
    url: "https://api.twitch.tv/kraken/",
    headers: {
        "Client-ID": "egml04iz0jxg6mj2vpnjfprejkgoiq"
    }
}, function(err, res, body) {
    console.log(body);
});


client.on('ban', function(channel, username, reason){
	client.action("fwoshy", "get rekt " + user['display-name']);
});

client.on('chat', function(channel, user, message, self){
	if(message === "!mmr"){
		var mmr = Math.floor(Math.random() * (9000));
		var emote;
		if (mmr >= 4000){
			emote = "PogChamp";
		}
		else emote = "LUL";
	
		if (user['display-name'] == null){
			client.action ("fwoshy", user['username'] + ", your true mmr is " + mmr + " " + emote);
		}
		else {
			client.action ("fwoshy", user['display-name'] + ", your true mmr is " + mmr + " " + emote);
			console.log (user);
		}
	}

	if(message === "!crush"){
		client.action ("fwoshy", "I-I have a crush on weebot uguuu");
	}
	//client.action("fwoshy", user['display-name'] + " you're lookin' so hot today Kreygasm" );
	
	if(message === "!piano"){
		client.action("fwoshy", "Fwosh plays on a Yamaha P115");
	}

	if(message === "!uptime"){
		client.action("fwoshy", "Fwosh has been live for " + uptime);
	}

});

client.on('cheer', function(channel, userstate, message){
	if(userstate.bits >= 100){
		client.action ("fwoshy", "Thanks for the cheer! :3");
	}
});

client.on('connected', function(address, port){
	//console.log ("Address: " + address + " Port:" + port);
	client.action("fwoshy", "I'M ALIVE PogChamp");
	
	function startTimer(){

	}

	startTimer();
	var messages_sent = 0;
	function sendMessage(){
		client.action("fwoshy", "i have a pulse SeemsGood");
	}

	if (messages_sent % 10) sendMessage(); // every 10th message call the function to send a message
	setInterval(sendMessage, 60000); // every minute send a message


});

client.on('disconnected', function(reason){
	//console.log ("Address: " + address + " Port:" + port);
	client.action("fwoshy", "bye everyone~ BibleThump");
});

client.on("resub", function (channel, username, months, message) {
	if (months == 3 || months == 6 || months == 12 || months == 24){
 	client.action("fwoshy", + username + ", you've served The Legion for " + months + " years! You've received a promotion! PogChamp");
	}
	else{
    client.action("fwoshy", "Thanks " + username + " for your " + months + " years of service to The Legion!");
    }
});

client.on("subscription", function (channel, username, method) {
    client.action("fwoshy", "A new recruit has joined The Legion! Welcome, " + username + "! PogChamp");
});