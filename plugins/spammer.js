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
const Config = require('../config');
const Heroku = require('heroku-client');

const Language = require('../language');
const Lang = Language.getString('spammer');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


Owen.addCommand({pattern: 'killspam', fromMe: true, desc: Lang.STOP_SPAMDESC}, (async (message, match) => {

    await message.client.sendMessage(message.jid, Lang.STOP_SPAM, MessageType.text);

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid, error.message, MessageType.text);

    });
}));

Owen.addCommand({pattern: 'spam ?(.*)', fromMe: true, desc: Lang.SPAM_DESC}, (async (message, match) => {

    var fin = ''
    if (message.reply_message) {
        fin = message.reply_message.text
    } else {
        if (match[1] === '') {

            return await message.client.sendMessage(message.jid, Lang.NEED_WORD);
        } else {

            var spam = `${match[1]}`
            fin = spam.replace(/#/g, "\n");
        }
    }
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);

    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
}));
