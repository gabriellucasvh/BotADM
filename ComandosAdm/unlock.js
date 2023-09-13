const Discord = require('discord.js')

module.exports = {
    name: 'unlock',
    description: 'Destranca o atual canal de texto.',
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'canal',
            description: 'Mencione um canal para ser destrancado.',
            type: Discord.ApplicationCommandOptionType.Channel,
            required: true
        }
    ],

    run: async(client, interaction) => {
        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) {
            interaction.reply({ ephemeral: true, content: `Você não possui a permissão \`Gerenciar Canais\` para utilizar este comando.` })
        } else {
            const channel = interaction.options.getChannel('canal')
            channel.permissionOverwrites.edit(interaction.guild.id, {
                    SendMessages: true
                }).then( () => {
                    interaction.reply({ content: `🔓 Este canal foi destrancado com sucesso.` })
                }).catch(err => {
                    interaction.reply({ content: `❌ Não foi possível destrancar este canal.` })
                })
        }
    }
}