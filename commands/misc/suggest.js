const { Command } = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const { MessageEmbed } = require('discord.js');

module.exports = class SuggestCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'suggest',
            group: 'misc',
            memberName: 'suggest',
            description: 'Allows you to suggest new features to the bot!',
            details: oneLine`
                Allows you to suggest new features to the bot!
            `,
            examples: ['suggest make me a cake!'],
            throttling: {
                usages: 1,
                duration: 180,
            },
            args: [
                {
                    key: 'suggestion',
                    prompt: 'What are you suggesting we add to the bot?',
                    type: 'string',
                },
            ],
        });
    }

    async run(msg, args) {
        msg.reply("Thank you for your suggestion, I have sent it over to my Developers!");
        const suggestion = new MessageEmbed()
        .setAuthor(`Suggestion from ${msg.author.tag} | ${msg.author.id}`, msg.author.displayAvatarURL)
        .addField("Suggestion", args.suggestion)
        .setColor("AQUA")
        .setTimestamp();
        this.client.channels.get('637457372603875328').send(suggestion);
    }
};