import mongoose from 'mongoose'
import { noteSchema } from './notes'
import { linkSchema } from './links'
const { Schema } = mongoose

export const personSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  jobTitle: String,
  school: String,
  degree: String,
  company: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Company'
},
  notes: [noteSchema],
  webLinks: [linkSchema]
})

export const person = mongoose.model('Person', personSchema)
