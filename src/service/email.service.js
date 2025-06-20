import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

function sendEmail(email, bookTitle, dueDate) {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Reminder: Book dua date approaching",
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #f60;">Community Library Reminder</h2>
    <p>Dear User,</p>
    <p>This is a reminder that the book <strong>"${bookTitle}"</strong> is due on
    <strong>"${dueDate}"</strong>.</p>
    <p>Plese make sure to return or renew it on time.</p>
    <p>Best regards,<br>Your community Library</p>
    </div>
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email:", err);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

export default sendEmail;
