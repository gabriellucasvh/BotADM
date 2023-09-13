const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Informa o ping do bot.',
    type: Discord.ApplicationCommandType.ChatInput,

    run: async(client, interaction) => {
        const ping = client.ws.ping
        interaction.reply({ content: ` Admin: **${interaction.user.username}**, o meu ping está em \`${ping}ms\`.` })
    }
}