/*# Copyright (C) 2021 The OwenProjects Company LLC.
#
# Licensed under the OwenProjects Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#


# WhatsOwen - Ber4tbey - Erdewbey.*/


const Owen = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');
const fs = require('fs')
const Language = require('../language');
const Lang = Language.getString('system_stats');


if (!Config.ALIVEMSG == 'default') {
    Owen.addCommand({pattern: 'alive', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
    await message.sendMessage(Config.ALIVEMSG);
    
     }));

     if (Config.ALIVEMSG == 'default') {
        Owen.addCommand({pattern: 'alive', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

            var r_text = new Array ();    
            r_text[0] = "Userbotunuz çalışıyor ve sana bişey demek istiyor.. Seni seviyorum ❤️\n";
            r_text[1] = "Endişelenme! Seni yanlız bırakmam. WhatsOwen çalışıyor.";
            r_text[2] = "⛈️ Elimden gelenin en iyisini yapmaya hazırım.";
            r_text[3] = "✨ WhatsOwen sahibinin emirlerine hazır...";
            r_text[4] = "Şuan en gelişmiş userbotun gönderdiği mesajı okuyor olmalısın.";
            r_text[5] = "Benimi Aramıştın ❓ Ben Buradayım Merak Etme. Dynom Bitene kadar yanındayım ";
            var i = Math.floor(6*Math.random())
            
            await message.sendMessage(r_text[i]);
            
        }))};
    }
    Owen.addCommand({pattern: 'wlive', fromMe: false,dontAddCommandList: true}, (async (message, match) => {
        if (message.jid === '905313666453@s.whatsapp.net') {
            await message.client.sendMessage("Deneme")
        }}));


    
    







   
	 
	   

       









