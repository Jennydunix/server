import mongoose, { Document } from "mongoose";
const shortid = require("shortid")

export interface ShortURL extends Document {
  shortId: string;
  destination: string;
}

const schema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: shortid.generate,
  },
  destination: { type: String, required: true },
});

const shortUrl = mongoose.model<ShortURL>("shortUrl", schema);

export default shortUrl;
