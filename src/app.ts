import express, { Application , Request, Response} from 'express';
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'email',
    pass: 'password',
  },
  logger: true
});

const app: Application = express();

const port = 8000

app.get('/', async (req: Request, res: Response) => {
  const info = await transporter.sendMail({
    from: '"Sender Name" <from@example.net>',
    to: "email.address@gmail.com",
    subject: "Hello from node",
    text: "Hello world?",
    html: "<strong>Hello world?</strong>",
    headers: { 'x-myheader': 'test header' }
  });

  console.log("Message sent: %s", info.response);
  res.send('Hello world!')
})

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`)
})