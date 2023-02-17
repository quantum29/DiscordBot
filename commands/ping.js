const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({content:'Pong!',ephemeral:true});
		await interaction.followUp({ content: 'Pong foll+owup!', ephemeral: true });
		await wait(2000);
		await interaction.editReply('Pong again!');
		
		// const message = await interaction.fetchReply();
		// console.log(message);

		// const locales = {
		// 	pl: 'Witaj Świecie!',
		// 	de: 'Hallo Welt!',
		// };
		// interaction.reply(locales[interaction.locale] ?? 'Hello World (default is english)');
	},
};