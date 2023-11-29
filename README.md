# GetEm Discord Bot

## Description

- Developed a dynamic Discord Bot to prevent spam across multiple channels.
– Implemented regex-based message validation to assess the severity and take corresponding actions.
– Provided admins with user management(expulsion and ban) and regex pattern customization commands.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Events](#events)
- [Configuration](#configuration)

### Installation

To use and run this Discord bot, you need to follow these steps:

1. **Clone the Repository:**
   ```bash
  git clone https://github.com/your-username/your-bot-repo.git
  npm install
  node index.js

How to Create a Discord Bot
To create a Discord bot, follow these steps:

Create a Discord Account:
If you don't have one, create a Discord account.

Create a New Application:

Go to the Discord Developer Portal.
Click on "New Application" to create a new application.
Give your application a name.
Create a Bot User:

In your application settings, navigate to the "Bot" tab.
Click on "Add Bot" to convert your application into a bot.
You can also customize your bot's username and profile picture here.
Get Token:

In the "Bot" tab, under the "Token" section, click "Copy" to copy your bot token.
Do not share your token publicly.
Invite the Bot to Your Server:

In the "OAuth2" tab, select the "bot" scope.
Below, select the permissions your bot needs.
Copy the generated OAuth2 URL and open it in your browser to invite the bot to your server.
Configure Your Bot:

Create a config.json file in your bot's directory.
Add the following configuration with your bot token:
json
Copy code
{
    "token": "your-bot-token",
    "clientId": "your-client-id",
    "guildId": "your-guild-id",
    "logChannelId": "your-log-channel-id"
}
Run Your Bot:

Open a terminal in your bot's directory.
Run the bot using node index.js.
Ensure that your bot is online and responding to commands.




### Usage

1. **Invite Your Bot:**
   - Use the [OAuth2 URL](https://discord.com/developers/applications/YOUR_APPLICATION_ID/oauth2) generated in the Discord Developer Portal to invite your bot to a server.
   - Ensure that your bot has the necessary permissions for the commands it will execute.

2. **Command Prefix:**
   - The bot uses slash commands build using the slashCommandBuilderObject provided by Discord.Js.


### Commands

3. **Available Commands:**

   - **Add Regex Command**
     - *Description:* Adds a new regular expression check.
     - *Usage:* `/addrgx <regex> <severity>`
     - *Example:* `/addrgx \bexample\b 2`

   - **Ban Command**
     - *Description:* Bans a specified member from the server.
     - *Usage:* `/ban <@member> [reason]`
     - *Example:* `/ban @JohnDoe Spamming`

   - **Delete Regex Command**
     - *Description:* Deletes a regular expression check.
     - *Usage:* `/deletergx <regex>`
     - *Example:* `/deletergx \bexample\b`


### Events

4. **Custom Events:**

   - **Interaction Create Event**
     - *Description:* Handles slash commands and chat input commands.
     - *Example:* When a user triggers a slash command or a chat input command, the corresponding action is executed.

   - **Message Create Event**
     - *Description:* Monitors messages for matches with predefined regular expressions and takes actions based on severity levels.
     - *Example:* If a message matches a severity 2 regular expression, the bot sends a warning to the user and logs the event.

5. **Additional Information:**
   - Adjust the bot settings as needed.
   - Ensure that the bot has the required permissions in the server to perform actions like banning members.
   - Customize the regular expressions and severity levels based on your server's needs.




### Configuration 

/config.json 
{
    "token": "YOUR_BOT_TOKEN_GOES_HERE",
    "clientId": "YOUR_BOT_CLIENT_ID",
    "guildId": "YOUR_DISCORD_SERVER_ID",
    "logChannelId": "YOUR_LOG_CHANNEL_ID"
}

Replace the placeholder values:

Replace "YOUR_BOT_TOKEN_GOES_HERE" with the actual token for your Discord bot.
Replace "YOUR_BOT_CLIENT_ID" with the client ID of your Discord bot.
Replace "YOUR_DISCORD_SERVER_ID" with the ID of the Discord server (guild) where your bot will operate.
Replace "YOUR_LOG_CHANNEL_ID" with the ID of the channel where you want log messages and notifications to be sent.



