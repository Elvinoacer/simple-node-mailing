const router = require("express").Router();
const nodemailer = require("nodemailer");
const htmlAppreciationTemplate = require("../templates/mail-appreciate");

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "omondielvin@gmail.com",
    pass: "wzcrxzykemdfikeo",
  },
});

async function sendEmailTo(mailOptions) {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });
}

// Create a transporter object using SMTP
async function sendEmail(req, res) {
  const { to, subject, body } = await req.body;
  console.log(to, subject, body);
  try {
    const mailOptions1 = {
      from: to,
      to: "omondielvin@gmail.com",
      subject,
      html: body,
      // You can still include text for clients that don't display HTML
      text: "Thank you for checking out my projects. I appreciate your interest in my services. Please view this email in an HTML-enabled client to see the full message.",
    };
    const mailOptions2 = {
      from: "omondielvin@gmail.com",
      to,
      subject: "Thank you for checking out my portfolio",
      html: htmlAppreciationTemplate,
      // You can still include text for clients that don't display HTML
      text: "Thank you for checking out my projects. I appreciate your interest in my services. Please view this email in an HTML-enabled client to see the full message.",
    };
    await sendEmailTo(mailOptions2);
    await sendEmailTo(mailOptions1);

    console.log("Sending email to:", to);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}

router.post("/send-email", sendEmail);
router.get("/send-email", (req, res) => {
  res.status(200).send(htmlAppreciationTemplate);
});

module.exports = router;
