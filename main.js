const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const fs = require('fs');
const token = 'NjkyNDQwMjE0NjE3OTgxNDA0.XnunhQ.7SlvCSi0mleAnlQ2vz0AOPYj4u8';
const PREFIX = '!';

var server = {};
client.on('ready', () =>{console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', async msg => {
    const message = msg.content;
    const i = message.startsWith(`${PREFIX}play`);
    if (i){
        const connection = await msg.member.voice.channel.join();
        connection.play(ytdl(message.slice(PREFIX.length+5), { filter: 'audioonly' }));
    }
    if(!msg.author.bot){
        msg.channel.send('ควย')
        return;
    }
});
client.login(token);
// bot.on('ready', () => {console.log('login as ${client.user.tags}');});
// bot.on('message', msg => {
//     let args = msg.content.substring(PREFIX.length).split(" ");

//     switch(args[0]){
//         case 'play':
//             function play(connection, msg){
//                 var servers = server[msg.guild.id];
//                 servers.dispatcher = connection.playStream(ytdl(servers.queue[0], {filter: "audioonly"}));
//                 servers.queue.shift();
//             }
//             if(!server[msg.guild.id]) {
//             server[msg.guild.id] = {queue: []};
//             }
//             var servers = server[msg.guild.id];

//             if(msg.guild.voice.channel){
//                msg.member.voice.channel.join().then(function(connection){play(connection, msg);})
//             }
//             server.dispatcher.on("end", function(){
//                 if
//             })
            
//         break;
//     }
//     if(!msg.author.bot){
//         msg.channel.send('ควย')
//         return;
//     }