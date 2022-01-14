const { Message } = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'verify',
    category : 'Utility',
    description : 'Verify a target!',
    run : async(client, message, args) => {
        const target = message.mentions.members.first(); //target = mentions
        const user = message.mentions.members.first();

        let mainRole = message.guild.roles.cache.find(r => r.id === "931175871849566228");
        let secRole = message.guild.roles.cache.find(r => r.id === "931185411399761970");


        if(!target) return message.channel.send({
            embed: {
                color: 16777201,
                description: 'Please Specify a member', //when no target is mentioned

            }
        })

        target.roles.remove(secRole); //removing the role 
        target.roles.add(mainRole); // adding the role to the user

        const embed1 = new MessageEmbed()
        .setAuthor('OG\'s Original G\'s')
        .setTitle('**Verification COMPLETED**')
        .setColor('RANDOM')
        .setDescription(`<@${target.user.id}> is now verified !`)
        .setThumbnail('https://cdn.discordapp.com/icons/921346552407142400/a_abb3f32c9e4d68260d962f51175f2db8.gif?size=4096')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Verified By :',       value: `<@${message.author.id}>`, inline: true },
            { name: 'Memeber ID',       value: `\`${target.user.id}\``, inline: true },
            { name: '\u200B', value: '\u200B' },
        )
        .addFields(
            { name: 'Joined Server :',       value: new Date(user.joinedTimestamp).toLocaleDateString(), inline: true },
            { name: 'Joiner Discord :',       value: new Date(user.user.createdAt).toLocaleDateString(), inline: true },
            { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp()
        message.channel.send(embed1)
    }
}
