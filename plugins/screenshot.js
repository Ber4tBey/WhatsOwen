/*# Copyright (C) 2021 The OwenProjects Company LLC.
#
# Licensed under the OwenProjects Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#

# Thanks github.com/spechide for creating inline bot support.
# WhatsOwen - Ber4tbey - Erdewbey*/
const Owen = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const WhatsOwenStack = require('whatssiri-npm')
const Language = require('../language');
const Lang = Language.getString('webss');
let wk = Config.WORKTYPE == 'public' ? false : true

Owen.addCommand({pattern: 'ss ?(.*)', fromMe: wk, desc: Lang.SS_DESC}, (async (message, match) => {
  if (match[1] == '') return await message.client.sendMessage(message.jid,Lang.LİNK, MessageType.text);
  var bufferdata = ''
  try {
    var enc = await WhatsOwenStack.shot(match[1])
    bufferdata = enc
  } catch {
    return await message.client.sendMessage(message.jid,'*❌ Error!*', MessageType.text);
  }
  await message.sendMessage(Buffer.from(bufferdata), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by WhatsOwen'})
}));
