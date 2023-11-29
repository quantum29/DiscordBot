// Import necessary modules
const { Events } = require('discord.js')

// Define the module to be exported
module.exports = {
  // Define the event name
  name: Events.ClientReady,

  // Specify that this event should only be executed once
  once: true,

  // Define the execute function for the event
  execute(client) {
    // Log a message when the client is ready
    console.log(`Ready! Logged in as ${client.user.tag}`)
  },
}
