const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://testbot938.glitch.me/`);
}, 280000);

const { Client, RichEmbed } = require("discord.js");
const db = require("quick.db");
var { Util } = require('discord.js');
const {prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const Enmap = require('enmap');
const cd = require('countdown');
const totime = require('to-time');
const dbg = new Enmap({ name: 'Giveaway' });
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAS7wf2XAtvPrARefNgPR7pkUcNye9fhWc');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyAS7wf2XAtvPrARefNgPR7pkUcNye9fhWc";
const pretty = require("pretty-ms");
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
const pref = require("./settings.json");
const d_languge = 1; // اللغة الإفتراضية
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}
Servers ${client.guilds.size}
Users ${client.users.size}
Channels ${client.channels.size}
Enjoy ;)`);
});

//========={External commands}=========//

// بروفايل البوت
client.on('ready', () => {
client.user.setStatus('online')
})
client.on('ready', () => {
client.user.setActivity(`| ${prefix}help | ${prefix}inv |`)
})

// البريفيكس واللغة
client.on('message', message => {
    var args = message.content.split(" ")
    var findprefix;
    var findlang;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix,
         lang: d_languge
        };

     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
        findlang = pref[message.guild.id].lang;
    }
    if (args[0] === findprefix + "setprefix") { // سيت بريفكس 
   
        if (!args[1]){
            if (findlang==1) {
                message.channel.send("لم تقم بإدراج البريفكس");
            } else if(findlang==2) {
                message.channel.send("insert a new prefix");
            }
        }else if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
            pref[message.guild.id].prefix = args[1];
        fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
        if (findlang==1) {
            message.channel.send("تم التعديل !");
           message.channel.send("البرفكس الجديد هو : `" + args[1] +"`");
        } else if(findlang==2) {
            message.channel.send("Changed !");
           message.channel.send("Your new Prefix : `" + args[1] +"`");
        }
    } else {
              if (findlang==1) {
        message.channel.send("**<:pp714:744872678992773160> | ليس لديك صلاحيات !**");
              }  else if (findlang==2) {
        message.channel.send("**<:pp714:744872678992773160> | You do not have permissions !**");
              }
    }
}
       if (args[0] === findprefix + "setlang") { // سيت لانجوتش
  
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
              if (findlang==1) {
        message.channel.send("**<:pp714:744872678992773160> | ليس لديك صلاحيات !**");
              }  else if (findlang==2) {
        message.channel.send("**<:pp714:744872678992773160> | You do not have permissions !**");
              }
        }else if(args[1]=="en"){
            message.channel.send("**The language has changed to : English !**");
            pref[message.guild.id].lang = 2;
            fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4)); 
        }else if(args[1]=="ar"){
            message.channel.send("**تم تغيير اللغة الى : العربية !**");
            pref[message.guild.id].lang = 1;
            fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
        }else {
message.channel.send("```"+findprefix+"setlang ar\n"+findprefix+"setlang en```");
}
}
});

client.on("message", message => {
var findprefix;
    var findlang;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix,
         lang: d_languge
        };
     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
        findlang = pref[message.guild.id].lang;
    }
if (message.author.bot) return;
if(message.content === prefix + "prefix"){
message.channel.send(`prefix : **__${findprefix}__**`)
}
});

// كود البنق
client.on('message', message =>{
   var args = message.content.split(" ")
    var findprefix;
    var findlang;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix,
         lang: d_languge
        };

     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
        findlang = pref[message.guild.id].lang;
    }

  if(message.content === findprefix +  'ping'){

let start = Date.now(); message.channel.send('pong').then(message => {

message.edit(`\`\`\`js

Time taken: ${Date.now() - start} ms

Discord API: ${client.ping.toFixed(0)} ms\`\`\``);

  });
  }
});

// كود رتبة الخاص
client.on('guildMemberUpdate', (dm, alharthi, ) => {
  if (dm.roles.size < alharthi.roles.size) {
    let role = alharthi.roles.filter(r => !dm.roles.has(r.id)).first();
    let embed = new Discord.RichEmbed()
      .setThumbnail(dm.guild.iconURL)
      .setColor('RANDOM')
      .setDescription(
        `**New Role !**
 
**> Role Name:** ( ${role.name} )
 
**> Server:** ${alharthi.guild.name}`)
      .setTimestamp()
      .setFooter(`Server ID : ${dm.guild.id}`)
    alharthi.user.send(embed);
  }
});

//========================//

//========={General commands}=========//

client.on('message', async (message) => {
    var findprefix;
    var findlang;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix,
         lang: d_languge
        };
     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
        findlang = pref[message.guild.id].lang;
    }
  if (!message.guild || message.author.bot) return false;
  switch (message.content.split(' ')[0]) {
    case findprefix + 'user':
      var user = message.guild.member(message.mentions.members.first() || message.author);
      var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
       if (findlang==1) {
embed.setDescription(`
**> الأسم : ** ${user.user.username}
**> الايدي : ** ${user.user.id}
**> تاريخ الدخول للديسكورد : ** ${require('moment')(user.user.createdAt).format("DD/MM/YYYY h:mm a")}
**> تاريخ الدخول للسيرفر : ** ${require('moment')(user.joinedAt).format("DD/MM/YYYY h:mm a")}
**> الحالة : ** ${user.presence.status}
`)
               } else if(findlang==2) {
embed.setDescription(`
**> Name : ** ${user.user.username}
**> ID : ** ${user.user.id}
**> Joined Discord :** ${require('moment')(user.user.createdAt).format("DD/MM/YYYY h:mm a")}
**> Joined Server : ** ${require('moment')(user.joinedAt).format("DD/MM/YYYY h:mm a")}
**> Status : ** ${user.presence.status}
`)
               }
 embed.setTimestamp()
 embed.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)
 embed.setThumbnail(user.user.avatarURL)
 message.channel.send(embed);

  }
});

//========================//

//========={Admins commands}=========//
 
//========================//

//========={Protection commands}=========//

const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));

client.on("message", message => {
  var findprefix;
    var findlang;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix,
         lang: d_languge
        };

     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
        findlang = pref[message.guild.id].lang;
    }
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find(r => r.name == room);
  if (message.content.startsWith(findprefix + "set-log")) {
    if (!message.channel.guild)
     if (findlang==2) { 
 return message.reply("**هذا الأمر فقط للسيرفرات**");
  
        } else if(findlang==1) { 
 return message.reply("**This is only for servers**");
  }
 if (!message.member.hasPermission("MANAGE_GUILD"))
     
     if (findlang==2) { 
 return message.channel.send(
        "**<:EROR:739441952667205684> | ليس لدي صلاحية !** `MANAGE_GUILD`"
      );
             } else if(findlang==1) { 
 return message.channel.send( "**<:EROR:739441952667205684> | You don't have a permutation !** `MANAGE_GUILD`" );

}
   if(!room) return message.channel.send(`**Example :
 > ${findprefix}set-log (Channel Name)
**`)
if(!findroom) return message.channel.send(`**Example :
 > ${findprefix}set-log (Channel Name)
**`)
    let embed = new Discord.RichEmbed()
      .setTitle("**تم عمل لوق بـنـجـاح**")
      .addField("اسم الشات:", `${room}`)
      .addField("بوسطة:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  var findprefix;
    var findlang;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix,
         lang: d_languge
        };

     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
        findlang = pref[message.guild.id].lang;
    }
  if(message.content.startsWith(findprefix + "toggle-log")) {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('MANAGE_GUILD'))
     if (findlang==2) { 
 return message.channel.send('**<:EROR:739441952667205684> | I do not have authority !** `MANAGE_GUILD`' );
         } else if(findlang==1) { 
return message.channel.send('**<:EROR:739441952667205684> | ليس لدي صلاحية !** `MANAGE_GUILD`' );

}
if(!log[message.guild.id]) log[message.guild.id] = {
          onoff: 'Off'
        }
    
          if(log[message.guild.id].onoff === 'Off')

if (findlang==2) { 
 return [message.channel.send(`**<:Ok:739476010831183993> | Log Is Actived !**`), log[message.guild.id].onoff = 'On']
         } else if(findlang==1) {
return [message.channel.send(`**<:Ok:739476010831183993> | اللوق مفعل !**`), log[message.guild.id].onoff = 'On']
         }
          if(log[message.guild.id].onoff === 'On') 
if (findlang==2) { 
return [message.channel.send(`**<:No:739476012722815217> | Log Is not Actived !**`), log[message.guild.id].onoff = 'Off']
                   } else if(findlang==1) {
return [message.channel.send(`**<:No:739476012722815217> | اللوق غير مفعل !**`), log[message.guild.id].onoff = 'Off']
                   }
fs.writeFile("./log.json", JSON.stringify(log), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
});

client.on("messageDelete", message => {
 var findprefix;
    var findlang;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix,
         lang: d_languge
        };
     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
        findlang = pref[message.guild.id].lang;
    } 

if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
     if (findlang==2) {
 messageDelete.setTitle("「 Deleted Message 」")
        } else if(findlang==1) {
     messageDelete.setTitle("**「 تم حذف رسالة 」**")
    }
     messageDelete.setColor("RED")
    .setThumbnail(message.author.avatarURL)
       if (findlang==2) {
    messageDelete.addField("**Name chat :**", message.channel, true)
          } else if(findlang==1) {
    messageDelete.addField("**اسم الشات :**", message.channel, true)
          }
         if (findlang==2) {
    messageDelete.addField("**Deleted By :**", `<@${message.author.id}>`, true)
         } else if(findlang==1) {
    messageDelete.addField("**تم الحذف بواسطة :**", `<@${message.author.id}>`, true)
         }
         if (findlang==2) {
    messageDelete .addField("**Content of the message :**", message, true)
         } else if(findlang==1) {
    messageDelete .addField("**محتوى الرسالة :**", message, true)

         }
     messageDelete.setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;
  if (oldMessage.content.startsWith("https://")) return;
  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**「 تم تعديل رسالة 」**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("GREEN")
    .addField("**اسم الشات :**",oldMessage.channel.name , true)
    .addField("**تم التعديل بواسطة :**",`<@${oldMessage.author.id}>` , true)
    .addField("**الرسالة القديمة :**",oldMessage , true)
    .addField("**الرسالة الجديدة :**",newMessage , true)

    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);
  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
   var findprefix;
    var findlang;
    if(role.channel.guild && !pref[role.guild.id]) {
        pref[role.guild.id] = { 
         prefix: prefix,
         lang: d_languge
        };
     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(role.channel.guild && pref[role.guild.id]){
        findprefix = pref[role.guild.id].prefix;
        findlang = pref[role.guild.id].lang;
    } 
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**「 تم انشاء رتبة 」**")
      .setThumbnail(userAvatar)
      .addField("**اسم الرتبة :**",role.name , true)
      .addField("**بوسطة :**",`<@${userID}>` , true)

      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**「 تم حذف رتبة 」**")
      .setThumbnail(userAvatar)
      .addField("**اسم الرتبة :**",role.name , true)
      .addField("**بوسطة :**",`<@${userID}>` , true)
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**「 تم التعديل على رتبة 」**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
       .addField("**الأسم القديم :**",oldRole.name , true)
       .addField("**لأسم الجديد :**",newRole.name , true)
       .addField("**بواسطة :**",`<@${userID}>` , true)

        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
   if(oldRole.hexColor !== newRole.hexColor) {
			if(oldRole.hexColor === '#000000') {
				var oldColor = '`Default`';
			}else {
				var oldColor = oldRole.hexColor;
			}
			if(newRole.hexColor === '#000000') {
				var newColor = '`Default`';
			}else {
				var newColor = newRole.hexColor;
            }
            if(log[oldRole.guild.id].onoff === 'Off') return;
			let roleUpdateColor = new Discord.RichEmbed()
			.setTitle("**「 تم التعديل على رتبة 」**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
       .addField("**الأسم الرتبة :**",oldRole.name , true)
       .addField("**اللون القديم :**",oldColor , true)
       .addField("**اللون الجديد :**",newColor , true)
       .addField("**بواسطة :**",`<@${userID}>` , true)
      .setTimestamp()
			.setFooter(oldRole.guild.name, oldRole.guild.iconURL)

			logChannel.send(roleUpdateColor);
		}
	})
});

client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**「 تم انشاء قناة 」**")
      .setThumbnail(userAvatar)
      .addField("**الأسم الروم :**",channel.name , true)
      .addField("**بواسطة :**",`<@${userID}>` , true)
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**「 تم حذف قناة 」**")
      .setThumbnail(userAvatar)
      .addField("**الأسم الروم :**",channel.name , true)
      .addField("**بواسطة :**",`<@${userID}>` , true)
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**「 تم تعديل قناة 」**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .addField("**الأسم القديم :**",oldChannel.name , true)
        .addField("**الأسم الجديد :**",newChannel.name , true)
        .addField("**بواسطة :**",`<@${userID}>` , true)

        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**「 باند 」**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(`**\n**:airplane: تم تبنيد : **${user.username}** من السيرفر !`)
      .addField("**المبند :**",`<@${user.id}>` , true)
      .addField("**بواسطة :**",`<@${userID}>` , true)
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**「 تم فك الباند 」**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(`**\n**:unlock: تم فك الباند :**${user.username} من السيرفر !**`)
      .addField("**اسم الشخص :**",`<@${user.id}>` , true)
      .addField("**بواسطة :**",`<@${userID}>` , true)
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`اسمه الاصلي`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اسمه الاصلي`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**「 تم تغيير اسم الشخص 」**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .addField("**اسم الشخص :**",oldMember , true)
        .addField("**الأسم القديم :**",oldNM , true)
        .addField("**الأسم الجديد :**",newNM , true)
        .addField("**تم التغيير بواسطة :**",`<@${userID}>` , true)
      
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**「 تم اعطاء شخص رتبة 」**")
        .setColor("GREEN")
        .setDescription(`**\n**:white_check_mark: تم اعطاء هذا الشخص رتبه **${oldMember.user.username}**`)
        .addField("**اسم الشخص :**",`<@${oldMember.id}>` , true)
        .addField("**اسم الرتبة :**",role.name , true)
        .addField("**بواسطة :**",`<@${userID}>` , true)
        .setThumbnail(oldMember.guild.iconURL)
      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**「 تم سحب من شخص رتبة 」**")
        .setColor("RED")
        .setDescription(`**\n**:negative_squared_cross_mark: تم سحب من هذا الشخص رتبه **${oldMember.user.username}**`)
        .addField("**اسم الشخص :**",`<@${oldMember.id}>` , true)
        .addField("**اسم الرتبة :**",role.name , true)
        .addField("**بواسطة :**",`<@${userID}>` , true)
       .setThumbnail(oldMember.guild.iconURL)
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});

client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[voiceOld.guild.id])
    log[voiceOld.guild.id] = {
      onoff: "Off"
    };
  if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
  var logChannel = voiceOld.guild.channels.find(
    c => c.name === `${log[(voiceOld, voiceNew.guild.id)].channel}`
  );
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**「 تم اعطاء شخص ميوت صوتي 」**")
        .setColor("RED")
        .addField("**اسم الشخص :**",voiceOld , true)
        .addField("**اسم الروم :**",voiceOld.voiceChannel.name , true)
        .addField("**بواسطة :**",`<@${userID}>` , true)
        .setThumbnail("https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png")
        .setTimestamp()
	      .setFooter(userTag, userAvatar);

      logChannel.send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**「 تم فك عن شخص ميوت صوتي 」**")
        .setColor("GREEN")
        .addField("**اسم الشخص :**",voiceOld , true)
        .addField("**اسم الروم :**",voiceOld.voiceChannel.name , true)
        .addField("**بواسطة :**",`<@${userID}>` , true)
        .setThumbnail("https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png")
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**「 تم اعطاء شخص ديفن صوتي 」**")
        .setColor("RED")
        .addField("**اسم الشخص :**",voiceOld , true)
        .addField("**اسم الروم :**",voiceOld.voiceChannel.name , true)
        .addField("**بواسطة :**",`<@${userID}>` , true)
        .setThumbnail("https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png")
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      if (!log[voiceOld.guild.id])
        log[voiceOld.guild.id] = {
          onoff: "Off"
        };
      if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**「 تم فك عن شخص ديفن صوتي 」**")
        .setColor("GREEN")
        .addField("**اسم الشخص :**",voiceOld , true)
        .addField("**اسم الروم :**",voiceOld.voiceChannel.name , true)
        .addField("**بواسطة :**",`<@${userID}>` , true)
        .setThumbnail("https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png")
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(serverUndeafv);
    }
  });

  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    if (!log[voiceOld.guild.id])
      log[voiceOld.guild.id] = {
        onoff: "Off"
      };
    if (log[(voiceOld, voiceOld.guild.id)].onoff === "Off") return;
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**「 تم انتقال شخص من روم 」**")
      .setColor("GREEN")
      .addField("**الروم السابق :**",voiceOld.voiceChannel.name , true)
      .addField("**الروم الجديد :**",voiceNew.voiceChannel.name , true)
      .addField("**اسم الشخص :**",voiceOld , true)
      .setThumbnail(voiceOld.user.avatarURL)
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);

   logChannel.send(voiceLeave);
  }
});

//========================//

//========={Test commands}=========//


//========={TOKEN N.T SYSTEM}=========//

client.login(process.env.TOKEN)

//========================//