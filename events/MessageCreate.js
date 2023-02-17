const { Events} = require('discord.js');
const getData = require('../regexData/data.js')
const {logChannelId} = require('../config.json');
// const logChannelId = '1075164324093497515';

const severity_1 = getData.severity_1
const severity_2 = getData.severity_2
const severity_3 = getData.severity_3

module.exports = {
	name: Events.MessageCreate,

	async execute(message,client) {

    	if(message.author.username == "CreepySanta")
        	return;
	
		// console.log(message)
		const content = message.content
		const username = message.author.username
		const guild = message.guild.name
		const channel = message.channel.name
		const member = message.member
		const user = message.author;

		console.log(`name: ${username} content: ${content} guild : ${guild} channel: ${channel}`)

		let severity = 0;
	
		severity_1.map((regex)=>{
			if(regex.test(message.content)){
				severity = 1
			}
		})

		severity_2.map((regex)=>{
			if(regex.test(message.content)){
				severity = 2
			}
		})
	
		severity_3.map((regex)=>{
			if(regex.test(message.content)){
				severity = 3
			}
		})


		if (severity) {
	  		console.log(`Match found`,severity)

			const logChannel = client.channels.cache.get(logChannelId);

			if(severity === 1){
				await logChannel.send(`name: ${username} content: ${content} guild : ${guild} channel: ${channel} severityLevel : ${severity} action: MESSAGE DELETED`);
			}
			if(severity === 2){
				//secret msg
				// Send an ephemeral message to the user who triggered the command
				message.reply({ content: "Naughty naughty.", ephemeral: true });		
				await logChannel.send(`name: ${username} content: ${content} guild : ${guild} channel: ${channel} severityLevel : ${severity} action: MESSAGE DELETED and USER WARNED`);
			}
			if(severity === 3){

				await user.send("YOUR MESSAGE CONTAINED OFFENSIVE MESSAGES. ")
				// Kick the member
				await member.kick()
				  .then((kickedMember) => {
					message.reply(`Successfully kicked ${kickedMember.user.tag}`);
				  })
				  .catch((error) => {
					console.error(error);
					message.reply('Failed to kick the member.');
				  });
	
				await logChannel.send(`name: ${username} content: ${content} guild : ${guild} channel: ${channel} severityLevel : ${severity} action: MESSAGE DELETED and USER KICKED from the server`);
				
			}
	
			await message.delete();
		}
	},
};