const nodemailer = require('nodemailer');

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nalawademanali6@gmail.com', // Your Gmail email address
    pass: 'Manali#6010' // Your Gmail password or app-specific password
  }
});

// Define a function to send email
function sendEmail(stream, year, subject) {
  // Email content
  const mailOptions = {
    from: 'nalawademanali6@gmail.com', // Your Gmail email address
    to: 'goreaniket100@gmail.com', // Recipient's email address
    subject: 'Slot Booking Information',
    text: `Stream: ${stream}\nYear: ${year}\nSubject: ${subject}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = sendEmail;
