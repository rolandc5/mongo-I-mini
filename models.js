const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* A schema is a description of the format of documents within a
 * collection. In this case, each Bear is a document of the form:
 *
 * {
 *   species: "American Black Bear",
 *   latinName: "Ursus americanus",
 *   createdAt: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT)
 * }
 *
 * Make createdAt default to the current date.
 */
const BearSchema = new Schema({
  species: {
    type: String,
  },
  latinName: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  /*
  status: {
    type: [{
      type: String,
      enum: ['pending', 'completed', 'future'],
    }],
    default: [ 'pending' ],
  }
  */
});

// {'species': 'Name', 'latinName': 'Latin', 'createdAt': 'Date'}

module.exports = mongoose.model('bears', BearSchema);
