import React from 'react';
import nodemailer from "nodemailer";
import { Mailer } from 'nodemailer-react'
const yourEmail = "yourEmail@gmail.com";
const yourPass = "yourEmailPasswrd";
const mailHost = "smpt.gmail.com";
const mailPort = 587;
const senderEmail = "senderEmail@gmail.com"

const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // use SSL - TLS
    auth: {
      user: 'carey.bailey68@ethereal.email',
      pass: 'FJDBEjuM1gjpxAWrTu',
    },
  });
  const defaults = {
    from: 'carey.bailey68@ethereal.email',
    to: 'carey.bailey68@ethereal.email',
    subject: 'carey.bailey68@ethereal.email',
    html: '<div>Hello</div>',
  };
const WelcomeEmail = (firstName:any) => ({
    subject: `👋 ddd ${firstName}`,
    body: <div>dsdsdsd</div>
  })
 export const mailer = Mailer({ transport, defaults }, { WelcomeEmail })
