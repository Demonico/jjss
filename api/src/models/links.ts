import mongoose from 'mongoose'
const { Schema } = mongoose

export const linkSchema = new Schema({
  label: { type: String, required: true },
  url: { type: String, required: true },
})

export const link = mongoose.model('LInk', linkSchema)
