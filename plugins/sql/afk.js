/*# Copyright (C) 2021 The OwenProjects Company LLC.
#
# Licensed under the OwenProjects Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#

# Thanks github.com/spechide for creating inline bot support.
# WhatsOwen - Ber4tbey - Erdewbey*/

/*
const config = require('../../config');
const { DataTypes } = require('sequelize');

const AFKDB = config.DATABASE.define('AFK', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

async function getStatus(status) {
    var Msg = await AFKDB.findAll({
        where: {
            type: status
        }
    });

    if (Msg.length < 1) {
        return false;
    } else {
        if (Msg[0].dataValues == 'afk') {
            return true;
        } else {
            return false;
        }
    }
}

async function setStatus(setAFK) {
    var Msg = await AFKDB.findAll({
        where: {
            type: setAFK
        }
    });

    if (Msg.length < 1) {
        return await AFKDB.create({ type: setAFK });
    } else {
        return await Msg[0].update({ type: setAFK });
    }
}


module.exports = {
    AFKDB: AFKDB,
    getStatus: getStatus,
    setStatus: setStatus
};
*/

/*
Changed Status to Inactive
Some technical issues caused pool connection bugs.
It will be fixed in new versions.
*/
