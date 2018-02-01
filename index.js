const Discord = require("discord.js");

const TOKEN = "YOU THOUGH WE WERE DUM XD";
const PREFIX = "-"


var crypto = require('crypto');

function randomValueHex(len){

	return crypto.randomBytes(Math.ceil(len/2)).
		   toString('hex').
		   slice(0,len);
		   
};


//...................................................................................
//								Random Outputs options
//...................................................................................

var fortunes = [
"Yes",
"No",
"**Jumps out window**",
"I duno ¯\_(ツ)_/¯",
"0% Meh",
]

//flip anwsers//
var flip = [
    "`Heads`",
    "`Tails`",
]
var bot = new Discord.Client();
var urank = "Guest";

bot.on("ready", function(on){
    console.log("Bot Ready");
    bot.user.setPresence({ game: { name: '-help | Test Bot', type: 0 } });

    bot.channels.find("name", "test-room").send("** :star2: <:online:354960523554455553> Bot Online! <:online:354960523554455553> :star2: \n Make Sure to check out ```-Help``` \n **Created and developed by **NinjaLabs #2564**");

});

bot.on("guildMemberAdd", function(member){
	member.guild.channels.find("name", "test-room").send("Hello!" + member.toString() + " and welcome to Mixx Radio! Make sure to check out our website : http://mixx-radio.uk");

	member.addRole(member.guild.roles.find("name", urank));
	member.guild.channels.find("name", "test-room");

	member.guild.channels.find("name", "test-room").send("We have a new member! This member is called **" + member.toString() + "** and there role has been set to **" +urank + "**");
});

bot.on("guildMemberRemove", function(member){
	member.guild.channels.find("name", "test-room").send("**RIP `" + member.toString() + "` See you around! **");

	member.addRole(member.guild.roles.find("name", urank));
	member.guild.channels.find("name", "test-room");

	member.guild.channels.find("name", "test-room").send("**`" + member.toString() + "` Has Left**");
});


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");


    switch(args[0]) {
        case "ping": //ping command
            message.channel.send("Pong!");
            break;
        case "info", "about": //info command
            message.channel.send("` Coming Soon! `");
            break;
        case "mixxball", "8ball": //8ball command
            if (args[1]) {
                message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            } else {
                message.channel.send("Can't Read  That! ¯\_(ツ)_/¯")
            }
            console.log("Command -8ball run by " + (message.author.toString()));
            break;
        case "author": //author
            var embed = new Discord.WebhookClient()
                .addField("Author", "NinjaLabs #2564", true)
                .addField("Commands", "Make sure to do `-help` to get all the commands!")
                .setColor(0x00FFFF)
                .setFooter("Bot made by NinjaLabs #2564")
                .setThumbnail("http://i.imgur.com/FloggY2.png")
            message.channel.sendEmbed(embed);
            break;
        case "help": //help
            var embed = new Discord.RichEmbed()
                .addField("-author", "Use this command to learn about my author!")
                .addField("-mixxball", "Use this command to ask a question!")
                .addField("-gearz", "Learn about Ninja Gear Corp!")
                .addField("-pizza", "Random Pizza `Updated`! `Updated`")
                .addField("-meme", "Random Meme!")
                .addField("-ping","See what happens :)")
                .addField("-getid","Get your discord id!")
                .addField("-flip","Flip a coin!")
                .addField("-noticeme","if your lonely")
                .addField("-marco","Find out!")
                .addField("-feedback"," send feedback!")
                .addField("-changelog","See what has changed! `Updated`")
                .addField("-website", "Not even going to try")
                .setColor(0x00FFFF)
                .setFooter("Bot made by NinjaLabs #2564")
                .setThumbnail("")
            message.author.sendEmbed(embed);
            message.channel.send("Message Sent to " + message.author.toString())
            break;
        case "marco": //marco - sends message to requested chat
            message.channel.send(message.author.toString() + " Polo!");
            console.log("Command -marco run by " + (message.author.toString()));
            break;
        case "noticeme": //noticeme - sends a message to channel of request tagging author
            message.channel.send(message.author.toString() + " Hello? I guess :upside_down:  ");
            console.log("Command -notice run by " + (message.author.toString()));
            break;
        case "getid": //Get ID command - sends message to requested chat and dms ID
            message.author.send(message.author.toString() + " Your id is " + message.author.id + "!")
            message.channel.send("Your ID has been sent to your private messages for security!")
            console.log("Command -getid run by " + (message.author.toString()));
            break;
        case "flip":
        if (args[0]) {
            message.channel.send(flip[Math.floor(Math.random() * flip.length)]);
        } else {
            message.author.send("What! Its head OR tails not anything else! Just do `-flip` simple for some!")
        };
        console.log("Command -flip run by " + (message.author.toString()));
        break;
		case "code":
		var value = randomValueHex(12);
		console.log(value);
		message.channel.send("Sending Auth Code!");
		message.channel.send(value);
		break;
		case "auth":
		let entered = args.slice(0);
		if (args[0] === value) {
			message.channel.send("verified");
		} else {
			message.channel.send("Error");
		}
		break;
	
        case "Update":
			if (message.author.id === "NOPE! LOL") {
				message.channel.send("OMG @everyone There has been a UPDATE! <:update:354960523504123904> Go check -changelog ")
			} else {
				message.channel.send("Opps! You can't do that! <:no:354960523395334145> <:reddit:354960524464881674>")
			}
			console.log("Command -update run by " + (message.author.toString()));
			break;
        var embed = new Discord.RichEmbed()
				.setTitle("Website!")
                .addField("-----------------------------------------------------------", "Oooooooo You want that!")
                .addField("So the website is *Drum Role!* ``", "#AnitClimatic")
                .addField("-----------------------------------------------------------", "Here are some more :)")
                .setColor(0xE5951C)
                .setFooter("Bot made and maintained by NinjaLabs#2564")
            message.channel.sendEmbed(embed);
            console.log("Command -website run by " + (message.author.toString()));
            break;
    }
});

bot.login(TOKEN);
