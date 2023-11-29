// Import necessary modules
const { Events } = require('discord.js')

// Define the module to be exported
module.exports = {
  // Define the event name
  name: Events.InteractionCreate,

  // Define the execute function for the event
  async execute(interaction) {
    // Check if the interaction is a chat input command
    if (!interaction.isChatInputCommand()) return

    // Get the command associated with the interaction commandName
    const command = interaction.client.commands.get(interaction.commandName)

    // If no command is found, log an error and return
    if (!command) {
      console.error(`No command matching ${interaction.commandName} was found.`)
      return
    }

    // Try executing the command, catch any errors
    try {
      await command.execute(interaction)
    } catch (error) {
      console.error(`Error executing ${interaction.commandName}`)
      console.error(error)
    }
  },
}
