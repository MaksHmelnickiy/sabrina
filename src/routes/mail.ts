import express, { Application , Request, Response} from 'express';
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'gerardo.larson53@ethereal.email',
      pass: '8jkRcEwDyeXt9kP2ZR'
  }
});

// send email
setTimeout(() => {
  transporter.sendMail({
    from: 'gerardo.larson53@ethereal.email',
    to: 'gerardo.larson53@ethereal.email',
    subject: 'Test Email Subject',
    text: 'Example Plain Text Message Body'
  });
}, 2000);
