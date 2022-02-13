
import React from 'react';
import { Mailer } from 'nodemailer-react'
import nodemailer from 'nodemailer';
const transport = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'carey.bailey68@ethereal.email',
      pass: 'FJDBEjuM1gjpxAWrTu'
  }
});

const defaults = {
  from: "carey.bailey68@ethereal.email",
}

// eslint-disable-next-line react/prop-types
const WelcomeEmail = (firstName: any) => ({
  subject: `👋 ${firstName}`,
  body: (
    <div>
      <p>Hello {firstName}!</p>
      <p>Hope youll enjoy the package!</p>
    </div>
  )
})


export const mailer = Mailer(
  { transport, defaults },
  { WelcomeEmail }
)