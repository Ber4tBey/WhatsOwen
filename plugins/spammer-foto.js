/*# Copyright (C) 2021 The OwenProjects Company LLC.
#
# Licensed under the OwenProjects Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#

# Thanks github.com/spechide for creating inline bot support.
# WhatsOwen - Ber4tbey - Erdewbey*/

const Owen = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');

const Language = require('../language');
const Lang = Language.getString('spammer');

Owen.addCommand({pattern: 'foto spam$', fromMe: true, desc: Lang.FOTO_DESC}, (async (message, match) => {
    
    if (!message.reply_message) return await message.client.sendMessage(message.jid, Lang.FOTO_FOT, MessageType.text);

    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.png')
        .on('end', async () => {
            setInterval(async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.png});
            }, 200)
        });
}));
