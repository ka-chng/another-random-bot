const avatarEmbed = require('discord.js-avatar'); 

module.exports = {
	name: 'avatar',
	description: 'shows mentioned user/s avatar',
	aliases: ['av'],
	usage: '=avatar',
	cooldown: 5,
	execute(message) {
        avatarEmbed(message, language = 'english');
    }
}
