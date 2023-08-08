module.exports = {
	name: 'ping',
	description: 'Responds with pong',
	aliases: ['ping'],
	usage: '=ping',
	cooldown: 5,
	execute(message, args) {
		message.channel.send('Pong');
	},
};