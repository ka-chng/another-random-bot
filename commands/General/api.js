module.exports = {
	name: 'api',
	description: 'checks the bots api letancy ',
	aliases: ['api'],
	usage: '=api',
	cooldown: 5,
	execute(message, args, client) {
   message.channel.send(`boop <:MiyaRisaKiss:850726188208357466>`).then(abook =>{ 
   abook.edit(`my api letancy is ${abook.createdTimestamp - message.createdTimestamp}ms <:RamKiss1:849753280883851284><:owoRemKiss:849753626822049824>`)
     })
   }
};