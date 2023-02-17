const { SlashCommandBuilder, CommandInteraction } = require('discord.js');
const getData = require('../regexData/data.js')
const {appendData,deleteData} = require('../regexData/modifyData.js')
const {logChannelId} = require('../config.json');
// const logChannelId = '1075164324093497515';



module.exports = {
	data: new SlashCommandBuilder()
		.setName('addrgx')
		.setDescription('Adds a new regex to the existing check.')
		.addStringOption(option =>
			option
				.setName('regex')
                .setDescription('new regex to add')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('severity')
                .setDescription('defines the severity_level')
                .setRequired(true)
                .addChoices(
                    { name: 'level_1', value: '1' },
				    { name: 'level_2', value: '2' },
				    { name: 'level_3', value: '3' }
                ))
		.setDMPermission(false),

        async execute(interaction) {
           console.log("addrgx triggered")
           console.log(interaction.options.getString('regex'))
           console.log(interaction.options.getString('severity'))

           const client = interaction.client;
           const logChannel = client.channels.cache.get(logChannelId);
           const patternString =  interaction.options.getString('regex')
           const severity = parseInt(interaction.options.getString('severity'))

           const regex = new RegExp(patternString, "i");
           appendData(regex,severity)

           await logChannel.send(`added ${regex} of severity ${severity}`)
            // await interaction.reply(`Banning ${target.username} for reason: ${reason}`);
        },
};








// module.exports = {
// 	data: new SlashCommandBuilder()
// 		.setName('listrgx')
// 		.setDescription('lists all the regex checks'),

//     async execute(interaction){
        
//         await interaction.reply({content:"following are the regex codes used for spam detection.",ephimeral:true})
        
//         for(code of severity_1)
//         await interaction.followUp({content:code.toString(),ephimeral:true})
//         console.log(interaction)

//         // logChannelId.send('')

//     }
// }



