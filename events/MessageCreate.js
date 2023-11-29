// Import necessary modules and files
const { Events } = require('discord.js')
const getData = require('../regexData/data.js')
const { logChannelId } = require('../config.json')

// Get severity arrays from data.js
const severity_1 = getData.severity_1
const severity_2 = getData.severity_2
const severity_3 = getData.severity_3

// Define the module to be exported
module.exports = {
  // Define the event name
  name: Events.MessageCreate,

  // Define the execute function for the event
  async execute(message, client) {
    // Skip messages from a specific user
    if (message.author.username == 'CreepySanta') return

    // Extract relevant information from the message
    const content = message.content
    const username = message.author.username
    const guild = message.guild.name
    const channel = message.channel.name
    const member = message.member
    const user = message.author

    console.log(
      `name: ${username} content: ${content} guild : ${guild} channel: ${channel}`
    )

    let severity = 0

    // Check if the message matches severity levels
    severity_1.map((regex) => {
      if (regex.test(message.content)) {
        severity = 1
      }
    })

    severity_2.map((regex) => {
      if (regex.test(message.content)) {
        severity = 2
      }
    })

    severity_3.map((regex) => {
      if (regex.test(message.content)) {
        severity = 3
      }
    })

    // If a severity level is found
    if (severity) {
      console.log(`Match found`, severity)

      const logChannel = client.channels.cache.get(logChannelId)

      // Actions based on severity level
      if (severity === 1) {
        await logChannel.send(
          `name: ${username} content: ${content} guild : ${guild} channel: ${channel} severityLevel : ${severity} action: MESSAGE DELETED`
        )
      }
      if (severity === 2) {
        // Secret message
        // Send an ephemeral message to the user who triggered the command
        message.reply({ content: 'YOU USED A BANNED WORD', ephemeral: true })
        await logChannel.send(
          `name: ${username} content: ${content} guild : ${guild} channel: ${channel} severityLevel : ${severity} action: MESSAGE DELETED and USER WARNED`
        )
      }
      if (severity === 3) {
        // Send a direct message to the user
        await user.send(
          'YOU ARE KICKED FROM THE SERVER BECAUSE YOUR MESSAGE CONTAINED BAD WORDS. '
        )

        // Kick the member
        await member
          .kick()
          .then((kickedMember) => {
            message.reply(`Successfully kicked ${kickedMember.user.tag}`)
          })
          .catch((error) => {
            console.error(error)
            message.reply('Failed to kick the member.')
          })

        await logChannel.send(
          `name: ${username} content: ${content} guild : ${guild} channel: ${channel} severityLevel : ${severity} action: MESSAGE DELETED and USER KICKED from the server`
        )
      }

      // Delete the original message
      await message.delete()
    }
  },
}
