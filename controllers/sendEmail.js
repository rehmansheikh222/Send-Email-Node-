const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

const sendEmailEtherial = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount()
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'rashad99@ethereal.email',
      pass: 'rr1NWR6hXKbuP2YwJy',
    },
  })
  let info = await transporter.sendMail({
    from: 'Rehman Sheikh <sh.rehman222@gmail.com>',
    to: 'bcsf20a020@pucit.edu.pk',
    subject: 'Hello',
    html: '<h2>Sending Emails with Node.js</h2>',
  })
  res.json(info)
}

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'bcsf20a020@pucit.edu.pk',
    from: process.env.FROM_EMAIL,
    subject: 'Hello',
    text: 'Hello world?',
  }
  const info = await sgMail.send(msg)
  res.json(info)
}

module.exports = sendEmail
