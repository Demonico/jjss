import mongoose from 'mongoose'
import { noteSchema } from './notes'
import { linkSchema } from './links'
const { Schema } = mongoose

export const companySchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  url: String,
  accelerator: String,
  acceleratorYear: Number,
  industry: String,
  techStack: [String],
  notes: [noteSchema],
  webLinks: [linkSchema]
})

export const company = mongoose.model('Company', companySchema)
