const mongoose = require('mongoose');

/* eslint-disable no-multi-spaces */
// const uploadsMetadataSchema = new mongoose.Schema({
//   // user: {
//   //   type: mongoose.Schema.ObjectId,
//   //   ref: 'User',
//   //   required: true,
//   // },
// }, {
//   timestamps: true,     // automatically create createdAt & updatedAt fields
//   strict: true,        // enforce a schema
//   originalFilename: { type: String, required: true },

//   userId: { type: String, required: true },
//   bucket: { type: String, required: true },
// });

const uploadsMetadataSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  filename: { type: String, required: true },
  bucket: { type: String, required: true },
}, {
  timestamps: true,
  strict: true,
});

export default uploadsMetadataSchema;
