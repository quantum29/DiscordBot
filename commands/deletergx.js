// Import necessary modules and files
const { SlashCommandBuilder, CommandInteraction } = require('discord.js')
const getData = require('../regexData/data.js')
const { appendData, deleteData } = require('../regexData/modifyData.js')
const { logChannelId } = require('../config.json')
// const logChannelId = '1075164324093497515';
// const {modId} = require('../config.json'')

// Define the module to be exported
module.exports = {
  // Define the command data using SlashCommandBuilder
  data: new SlashCommandBuilder()
    .setName('deletergx')
    .setDescription('Adds a new regex to the existing check.')
    .addStringOption((option) =>
      option
        .setName('regex')
        .setDescription('new regex to add')
        .setRequired(true)
    )
    .setDMPermission(false), // write the modId of your channel for only the mods to use the command

  // Define the execute function for the command
  async execute(interaction) {
    console.log('deletergx triggered')
    console.log(
      interaction.options.getString('regex'),
      interaction.options.getString('severity')
    )

    // Get necessary data from the interaction
    const client = interaction.client
    const logChannel = client.channels.cache.get(logChannelId)
    const patternString = interaction.options.getString('regex')
    const regex = new RegExp(patternString, 'i')

    // Call the deleteData function to remove the regex from the checks list
    deleteData(regex)

    // Send a message to the log channel confirming the deletion
    await logChannel.send(`deleted ${regex} from the checks list`)
    // await interaction.reply(`Banning ${target.username} for reason: ${reason}`);
  },
}
