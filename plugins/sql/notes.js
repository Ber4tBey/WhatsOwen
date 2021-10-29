/*# Copyright (C) 2021 The OwenProjects Company LLC.
#
# Licensed under the OwenProjects Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#

# Thanks github.com/spechide for creating inline bot support.
# WhatsOwen - Ber4tbey - Erdewbey*/

const config = require('../../config');
const { DataTypes } = require('sequelize');

const NotesDB = config.DATABASE.define('notes', {
    note: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});


async function getNotes() {
    const Notes = await NotesDB.findAll()

    return Notes
}

async function saveNote(note) {
    return await NotesDB.create({ note });
}

async function deleteAllNotes() {
    return await NotesDB.destroy({
        where: {},
        truncate: true
    })
}

module.exports = {
    NotesDB,
    getNotes,
    saveNote,
    deleteAllNotes
};
