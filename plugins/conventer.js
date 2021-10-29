/*# Copyright (C) 2021 The OwenProjects Company LLC.
#
# Licensed under the OwenProjects Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#

# Thanks github.com/spechide for creating inline bot support.
# WhatsOwen - Ber4tbey - Erdewbey*/

const Owen = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const cheerio = require('cheerio')
const FormData = require('form-data')
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('conventer');

function webp2mp4File(path) {
    return new Promise(async (resolve, reject) => {
        const bodyForm = new FormData()
        bodyForm.append('new-image-url', '')
        bodyForm.append('new-image', fs.createReadStream(path))
        await Axios({
            method: 'post',
            url: 'https://s6.ezgif.com/webp-to-mp4',
            data: bodyForm,
            headers: {
                'Content-Type': `multipart/form-data boundary=${bodyForm._boundary}`
            }
        }).then(async ({ data }) => {
            const bodyFormThen = new FormData()
            const $ = cheerio.load(data)
            const file = $('input[name="file"]').attr('value')
            const token = $('input[name="token"]').attr('value')
            const convert = $('input[name="file"]').attr('value')
            const gotdata = {
                file: file,
                token: token,
                convert: convert
            }
            bodyFormThen.append('file', gotdata.file)
            bodyFormThen.append('token', gotdata.token)
            bodyFormThen.append('convert', gotdata.convert)
            await Axios({
                method: 'post',
                url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                data: bodyFormThen,
                headers: {
                    'Content-Type': `multipart/form-data boundary=${bodyFormThen._boundary}`
                }
            }).then(({ data }) => {
                const $ = cheerio.load(data)
                const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                resolve({
                    status: true,
                    message: "Made by WhatsOwen",
                    result: result
                })
            }).catch(reject)
        }).catch(reject)
    })
}

if (Config.WORKTYPE == 'private') {

    Owen.addCommand({pattern: 'mp4audio$', fromMe: true, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.MP4TOAUDİO,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Owen.addCommand({pattern: 'imagesticker$', fromMe: true, desc: Lang.STİCKER_DESC}, (async (message, match) => {   
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.STİCKER_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.STİCKER,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('output.png')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.png'), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by WhatsOwen'});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Owen.addCommand({pattern: 'vsticker$', desc: Lang.ANİM_STİCK, fromMe: true}, (async (message, match) => {
        const mid = message.jid
        if (message.reply_message === false) return await message.sendMessage(Lang.STİCKER_NEEDREPLY);
        await message.client.sendMessage(mid, Lang.ANİMATE, MessageType.text)
        const savedFilename = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await webp2mp4File(savedFilename).then(async (rest) => {
            await Axios({ method: "GET", url: rest.result, responseType: "stream"}).then(({ data }) => {
                const saving = data.pipe(fs.createWriteStream('/root/WhatsOwen/stweb.mp4'))
                saving.on("finish", async () => {
                    await message.client.sendMessage(mid, fs.readFileSync('/root/WhatsOwen/stweb.mp4'), MessageType.video, { mimetype: Mimetype.mp4, caption: 'Made by WhatsOwen', quoted: message.data })
                    if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
                    if (fs.existsSync('/root/WhatsOwen/stweb.mp4')) fs.unlinkSync('/root/WhatsOwen/stweb.mp4')
                })
            })
        })
    }));
}
else if (Config.WORKTYPE == 'public') {

    Owen.addCommand({pattern: 'mp4audio$', fromMe: false, desc: Lang.MP4TOAUDİO_DESC}, (async (message, match) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.MP4TOAUDİO_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.MP4TOAUDİO,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)    
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Owen.addCommand({pattern: 'imagesticker$', fromMe: false, desc: Lang.STİCKER_DESC}, (async (message, match) => {    
        const mid = message.jid
        if (message.reply_message === false) return await message.client.sendMessage(mid, Lang.STİCKER_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(mid,Lang.STİCKER,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fromFormat('webp_pipe')
            .save('output.png')
            .on('end', async () => {
                await message.client.sendMessage(mid, fs.readFileSync('output.png'), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by WhatsOwen'});
            });
        return await message.client.deleteMessage(mid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Owen.addCommand({pattern: 'vsticker$', desc: Lang.ANİM_STİCK, fromMe: false}, (async (message, match) => {
        const mid = message.jid
        if (message.reply_message === false) return await message.sendMessage(Lang.STİCKER_NEEDREPLY);
        await message.client.sendMessage(mid, Lang.ANİMATE, MessageType.text)
        const savedFilename = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await webp2mp4File(savedFilename).then(async (rest) => {
            await Axios({ method: "GET", url: rest.result, responseType: "stream"}).then(({ data }) => {
                const saving = data.pipe(fs.createWriteStream('/root/WhatsOwen/stweb.mp4'))
                saving.on("finish", async () => {
                    await message.client.sendMessage(mid, fs.readFileSync('/root/WhatsOwen/stweb.mp4'), MessageType.video, { mimetype: Mimetype.mp4, caption: 'Made by WhatsOwen', quoted: message.data })
                    if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
                    if (fs.existsSync('/root/WhatsOwen/stweb.mp4')) fs.unlinkSync('/root/WhatsOwen/stweb.mp4')
                })
            })
        })
    }));
}
    
