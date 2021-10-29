/*# Copyright (C) 2021 The OwenProjects Company LLC.
#
# Licensed under the OwenProjects Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#

# Thanks github.com/spechide for creating inline bot support.
# WhatsOwen - Ber4tbey - Erdewbey*/
const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Owen = require('../events');
const Config = require('../config');
const WhatsOwenStack = require('whatssiri-npm');

var CLR_DESC = ''
if (Config.LANG == 'TR') CLR_DESC = 'Sohbetteki tüm mesajları siler.'
if (Config.LANG == 'AZ') CLR_DESC = 'Söhbətdəki bütün mesajları silir.'
if (Config.LANG == 'EN') CLR_DESC = 'Clears all the messages from the chat.'
if (Config.LANG == 'PT') CLR_DESC = 'Limpa todas as mensagens do chat.'
if (Config.LANG == 'RU') CLR_DESC = 'Удаляет все сообщения из чата.'
if (Config.LANG == 'HI') CLR_DESC = 'चैट से सभी संदेशों को साफ़ करता है।'
if (Config.LANG == 'ES') CLR_DESC = 'Forigas ĉiujn mesaĝojn de la babilejo.'
if (Config.LANG == 'ML') CLR_DESC = 'ചാറ്റിൽ നിന്നുള്ള എല്ലാ സന്ദേശങ്ങളും മായ്‌ക്കുന്നു.'
if (Config.LANG == 'ID') CLR_DESC = 'Menghapus semua pesan dari obrolan.'

Owen.addCommand({pattern: 'clear ?(.*)', fromMe: true, desc: CLR_DESC, usage: '.clear // .clear 9055xxx // .clear 9055xxx-12345@g.us'}, (async (message, match) => {
    if (message.reply_message) {
        var client_id = message.reply_message.data.participant
        var payload = await WhatsOwenStack.clear(Config.LANG, message.client.user.jid)
        await message.client.sendMessage(client_id, payload.Action, MessageType.text);
        await message.client.modifyChat(client_id, ChatModification.delete);
        await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
    } else {
        if (match[1] == '') {
            var client_id = message.jid
            var payload = await WhatsOwenStack.clear(Config.LANG, message.client.user.jid)
            await message.client.sendMessage(client_id, payload.Action, MessageType.text);
            await message.client.modifyChat(client_id, ChatModification.delete);
            await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
        } else if (match[1] !== '') {
            let if_group = message.jid.includes('-') ? '' : '@s.whatsapp.net'
            var client_id = match[1] + if_group
            var payload = await WhatsOwenStack.clear(Config.LANG, message.client.user.jid)
            await message.client.sendMessage(client_id, payload.Action, MessageType.text);
            await message.client.modifyChat(client_id, ChatModification.delete);
            await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
        }
    }
}));
