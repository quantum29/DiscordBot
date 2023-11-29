const fs = require('fs')
const path = require('path')
const { Client, Collection, GatewayIntentBits } = require('discord.js')
const { token } = require('./config.json')

// Initialize a new Discord.js client with specified intents
const client = new Client({
  intents: [
    // Enable the discord bot to receive information
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
})

// Create a Collection to store commands
client.commands = new Collection()

// Load commands from the 'commands' directory
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)

  // Check if the command has 'data' and 'execute' properties
  if ('data' in command && 'execute' in command) {
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command)
  } else {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
    )
  }
}

// Load events from the 'events' directory
const eventsPath = path.join(__dirname, 'events')
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith('.js'))

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file)
  const event = require(filePath)

  // Attach events to the client
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args))
  } else {
    client.on(event.name, (...args) => event.execute(...args, client))
  }
}

// Log in to Discord using the bot token from config.json
client.login(token)





// config.json
// {
//     // Bot token provided by Discord for authentication
//     "token": "MTA2MTU0NzU5MjMzMDI1NjQwNA.GV6fv5.1ak9nxdzRuImm3gAlIfl7yOICe9vVHgNcINrIc",

//     // Client ID of the Discord bot (unique identifier)
//     "clientId": "1061547592330256404",

//     // ID of the Discord server (guild) where the bot will operate
//     "guildId": "1061550174855495730",

//     // ID of the channel where log messages will be sent
//     "logChannelId": "1075164324093497515"
// }
