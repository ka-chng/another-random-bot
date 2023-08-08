const Discord = require("discord.js");
const prefix = '='

module.exports = {
	name: 'help',
	description: 'gives help',
	aliases: ['command'],
	usage: '=help',
	cooldown: 5,
	execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            const title = 'Here\'s a list of all my commands:';
            const description = data.push(commands.map(command => command.name).join('\n'));
                const helpEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(title)
                .setDescription(data)
                .setTimestamp()
            return message.author.send(helpEmbed)
               .then(() => {
                   if (message.channel.type === 'dm') return;
                   message.reply('hey');
               })
            }
        }
}
