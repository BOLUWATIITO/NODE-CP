const nodemailer = require('nodemailer');
const https = require('https');

// Create a transporter using your email service provider's SMTP settings

const ca = https.globalAgent.options.ca;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'o@gmail.com',
    pass: '#A123',
  },
  tls: {
    ca,
  },
});

// Define the email options
const mailOptions = {
  from: 'o@gmail.com',
  to: '@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
