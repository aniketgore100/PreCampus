const nodemailer = require('nodemailer');

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'goreaniket100@gmail.com', // Your Gmail email address
    pass: 'oezg iexq ksrd jbfy' // Your Gmail password or app-specific password
  }
});

// Define a function to send email
function sendEmail(stream, year, subject, note) {
  // Email content
  const mailOptions = {
    from: 'goreaniket100@gmail.com', // Your Gmail email address
    to: 'Rajvardhan.precampus@gmail.com', // Recipient's email address
    subject: 'Slot Booking Information',
    text: `Stream: ${stream}\nYear: ${year}\nSubject: ${subject}\nnote: ${note}`
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
