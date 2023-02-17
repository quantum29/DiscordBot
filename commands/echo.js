const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
// const { setTimeout } = require('timers');
module.exports = {
	data: new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option
		.setName('input')
		.setDescription('The input to echo back')
		.setRequired(true))
	.addChannelOption(option =>
		option.setName('channel')
			.setDescription('The channel to echo into')
			.setRequired(true)),
    
	async execute(interaction) {
		const input = interaction.options.getString('input');	
		const channel = interaction.options.getChannel('channel');
		// const input = interaction.options.getString('input');
			// console.log(instruction);
			// await(2000);
            await channel.send(`${input} echoed back`);
	},
};



