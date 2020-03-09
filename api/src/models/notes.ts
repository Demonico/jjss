import mongoose from 'mongoose'
const { Schema } = mongoose

export const noteSchema = new Schema({
  author: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
},
  createdAt: Date,
  modifiedAt: Date,
})

export const note = mongoose.model('Note', noteSchema)
