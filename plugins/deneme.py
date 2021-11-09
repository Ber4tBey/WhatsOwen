const Owen = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

Owen.addCommand({pattern: 'wlivee', fromMe: true}, (async (message, match) => {

    var colors = ["red","blue","green","yellow"];
    var randomColor = colors[Math.floor(Math.random()*colors.length)];
    await message.client.sendMessage(randomColor)

}));   
