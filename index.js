const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});

client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  client.user.setActivity('Master joker | 7890 users with 34 server!!', { type: "streaming" })

});

client.on("message", async (message) => {
	
	let prefix = "!";
	
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
    const input = message.content.slice(prefix.length).split(' ');

    const cmd = input.shift();

if(cmd === `ping`) {

message.channel.send(`Hoold on!`).then(m => {


    m.edit(`🏓 Wew, made it over the ~waves~ ! **Pong!** (Roundtrip took: ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Heartbeat: ` + Math.round(client.ping) + `ms.)`);


    });

 }

if(cmd === `newcommand`) {

message.channel.send(`My new command`)

}

if(cmd === `anothercommand`) {

message.channel.send(`My another command`)

}

if(cmd === `yobot`) {
	
	message.channel.send(`hello sir=!`)
	
}

if(cmd === `supbot`) {
	
	message.channel.send(`fine what about you`)
	
}

if(cmd === `rainbow`) {

let help = message.content.split(' ').slice(1)

if(!help[0] || help[0 === 'help']) return message.channel.send('**Usage: !rainbow <role>**')
	
let colors = ['RANDOM'];

let role = message.mentions.roles.first();

if(!role) return message.channel.send(`You didn't metion a valid role or that role does not exist.`)

setInterval(function() {

role.setColor(colors[Math.floor(Math.random() * colors.length)])
 
  }, 3000)

}

if(cmd === `help`) {
	
	message.channel.send(`Help List
	
 ***prefix : !help

	1.master play - type !invite1
	2.master play V2 - type !invite2
	3.master play V3 - type !invite3 (new launch)
	4.master music - !invite4 (new launch)
	5.Master play V4 - !invite5 (new launch)
	
	Too see more command type !commandlist
	
	 NOTE:- IF YOU LEAVE THE SUPPORT CHANNEL YOU WILL BE BAN • Bot creator / Developer :- Master Joker***`)
	
	}
	
	if(cmd === `invite2`) {
		
		message.channel.send(`Send you dm📨 with invite link <@${message.author.id}>`)
		
		message.author.send(`Here the link of Master play V2: https://discordapp.com/oauth2/authorize?client_id=519964551475626017&permissions=8&scope=bot`)
		
	}
	
	if(cmd === `invite1`) {
		
		message.channel.send(`Send you dm📨 with invite link <@${message.author.id}>`)
		
	message.author.send(`Here the link of Master play : https://discordapp.com/oauth2/authorize?client_id=517242588525232129&permissions=8&scope=bot`)
	
	}
	
	if(cmd === `invite3`) {
		
		message.channel.send(`Send you dm📨 with invite link <@${message.author.id}>`)
	
message.author.send(`Here the link of Master play V3 : https://discordapp.com/api/oauth2/authorize?client_id=522422075399602210&permissions=8&scope=bot`)

 }

 if(cmd === `invite4`) {
 	
 			message.channel.send(`Send you dm📨 with invite link <@${message.author.id}>`)
 			
 			message.author.send(`Here the link of Master Music : https://discordapp.com/oauth2/authorize?client_id=523516063590252586&scope=bot&permissions=2146958847`)
 			
 }
 
 if(cmd ===`invite5`) {
 	
 	message.channel.send(`Send you dm📨 with invite link <@${message.author.id}>`)
 			
 			message.author.send(`Here the link of Master play V4 : https://discordapp.com/api/oauth2/authorize?client_id=525316974255931421&permissions=8&scope=bot`)
 					
 }
 
 
 
 if(cmd === `startrainbow`) {
 	
 	message.channel.send(`***START RAINBOW COLOR***  
 	
 	         ___NOTE__ :- ***All MP BOT NEED HIGHER ROLE ABOVE OWNER***
 	
 	 ***1.Master play :- type !master & mention the role which you want  to do rainbow color . like :- !master @rolename*** •
 	 
 	 ***2. Master play V2 :- type r!rainbowcolor & mention the role which you want to do rainbow color . like :- r!rainbowcolor @rolename*** •
 	 
 	 ***3. Master play V3 :- type !rainbow & mention the role which  you want to do rainbow color***  like :- !rainbow @rolename
 	 
 	 ***4.Master play V4 :- mp!color1 or mp!color2 @role name`)
 	 
 }
 
 if (cmd ===`commandlist`) {
 	
 	message.channel.send(`***Commandlist
 	
 	         ___CommandList___
 	
 	1. !startrainbow     [to see how to start rainbow in MP bots] 
 	
 	2. !help        [to see all help list]
 	
 	3.!rainbow        [to start the rainbow color on Master V3]
 
 4. !master     [to start the rainbow color on Master play]
 
 5. r!rainbowcolor        [to start the rainbow color on Master play V2]
 
 6.+help     [to see the help list of Master music]***
 
 7. mp!help   [to see the command to how to start the rainbow]`)
 
 }
 
 
    
  
 
});

client.login("Token");
