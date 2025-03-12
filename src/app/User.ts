/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const messageSchema: Schema<Message> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpires: Date;
    isAcceptingMessages: boolean;
    messages: Message[];
  }

  const userSchema: Schema<User> = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verifyCode: { type: String, required: true },
    verifyCodeExpires: { type: Date, required: true },
    isAcceptingMessages: { type: Boolean, required: true, default: true },
    messages: [messageSchema],
  });


