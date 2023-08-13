const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3001; // Replace with your desired port number

// Configure the Express server to parse JSON in the request body
app.use(express.json());

// Define the endpoint for sending emails
app.post("/api/sendEmail", (req, res) => {
  // Extract the form data from the request body
  const { fullName, email, phone, budget, message } = req.body;

  // Create a Nodemailer transporter with your email provider settings
  const transporter = nodemailer.createTransport({
    // Replace with your email provider settings (SMTP, API, etc.)
    service: "Gmail",
    auth: {
      user: "mpeluboy@gmail.com",
      pass: ".p3lum1_",
    },
  });

  // Create the email message
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "recipient-email@example.com",
    subject: "New contact form submission",
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Budget: ${budget}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("An error occurred while sending the email.");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully.");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
