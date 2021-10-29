/*# Copyright (C) 2021 The OwenProjects Company LLC.
#
# Licensed under the OwenProjects Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#

# Thanks github.com/spechide for creating inline bot support.
# WhatsOwen - Ber4tbey - Erdewbey*/
var config = require('./config');
var Commands = [];

function indexCommand(main_event) {
    var types = ['photo', 'image', 'text', 'message'];
    var check_off = Commands[main_event] === undefined ? false : true
    if (!check_off) {
        return null;
    }
    var recreation = Commands.indexOf(main_event)
    if (recreation !== 1) {
        return null;
    }
    var backpoint = Commands.filter(item => item !== main_event)
    // No backup
    Commands = []
    Commands.push(backpoint)
}
module.exports = {
    indexCommand: indexCommand
}
