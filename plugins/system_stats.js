/*# Copyright (C) 2021 The OwenProjects Company LLC.
#
# Licensed under the OwenProjects Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#


# WhatsOwen - Ber4tbey - Erdewbey*/

const Owen = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');


if (!Config.ALIVEMSG == 'default') {
Owen.addCommand({pattern: 'alive', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
await message.sendMessage(Config.ALIVEMSG);

 }));
}


if (Config.ALIVEMSG == 'default') {
Owen.addCommand({pattern: 'alive', fromMe: false,dontAddCommandList: true}, (async (message, match) => {
    
    var r_text = new Array ();    
r_text[0] = "Userbotunuz çalışıyor ve sana bişey demek istiyor.. Seni seviyorum ❤️\n";
r_text[1] = "Endişelenme! Seni yanlız bırakmam. WhatsOwen çalışıyor.";
r_text[2] = "⛈️ Elimden gelenin en iyisini yapmaya hazırım.";
r_text[3] = "✨ WhatsOwen sahibinin emirlerine hazır...";
r_text[4] = "Şuan en gelişmiş userbotun gönderdiği mesajı okuyor olmalısın.";
r_text[5] = "Benimi Aramıştın ❓ Ben Buradayım Merak Etme. Dynom Bitene kadar yanındayım ";
var i = Math.floor(5*Math.random())

await message.sendMessage(r_text[i]);
}))};
    
    


    
    







   
	 
	   

       









