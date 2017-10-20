const mongoose = require('mongoose');

const Note = mongoose.model('Note');

module.exports = {
    index: function(req, res) {
        Note.find({}, (err, notes) => {
            res.json({'notes': notes});
        })
    },

    create: function(req, res) {
        console.log('express create method');
        console.log(req.body);
        let note = new Note({
            content: req.body.content,
            created_at: new Date()
        });
        note.save( (err) => {
            if (err) {
                console.log("create method, note.save error");
                let errors = [];
                for (var key in err.errors){
                    errors.push(err.errors[key].message);
                }
                res.json({message: 'Error', error: errors});
            }
            else {
                res.json({message: "Success", note: note});
            }           
        })
    }
}