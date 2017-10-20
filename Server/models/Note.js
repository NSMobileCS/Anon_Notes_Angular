const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    content: { type: String, required: true, minlength: 6},
    created_at: Date
});

mongoose.model('Note', NoteSchema);