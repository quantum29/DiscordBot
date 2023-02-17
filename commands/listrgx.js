const { SlashCommandBuilder, CommandInteraction } = require('discord.js');
const getData = require('../regexData/data.js')
const {logChannelId} = require('../config.json');
// const logChannelId = '1075164324093497515';


const severity_1 = getData.severity_1
const severity_2 = getData.severity_2
const severity_3 = getData.severity_3

module.exports = {
	data: new SlashCommandBuilder()
		.setName('listrgx')
		.setDescription('lists all the regex checks'),

    async execute(interaction){
        const client = interaction.client;
        const logChannel = client.channels.cache.get(logChannelId);

        await interaction.reply({content:"Check the log channel for the list of all regex used for checks.",ephimeral:true})
        
        
        for(code of severity_1)
        await logChannel.send(`${code.toString()}  :1`)

        for(code of severity_2)
        await logChannel.send(`${code.toString()}  :2`)

        for(code of severity_3)
        await logChannel.send(`${code.toString()}  :3`)

        // console.log(interaction)

        // logChannelId.send('')
		// await logChannel.send(`name: ${username} content: ${content} guild : ${guild} channel: ${channel} severityLevel : ${severity} action: MESSAGE DELETED and USER KICKED from the server`);

    }
}



