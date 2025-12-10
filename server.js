import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send-email', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const mailOptions = {
        from: '"SMEC Global Innovators Conclave" <' + process.env.EMAIL_USER + '>',
        to: email, // Send to the user who subscribed
        subject: 'Welcome to the SMEC Global Innovators Conclave!',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h1 style="color: #d4a853;">Thank You for Subscribing!</h1>
                <p>Dear Innovator,</p>
                <p>We are thrilled to have you interested in the <strong>SMEC Global Innovators Conclave 2026</strong>.</p>
                <p>Attached to this email, please find the event brochure containing all the details about the sessions, speakers, and agenda.</p>
                <p><strong>Date:</strong> Feb 27-28, 2026<br>
                <strong>Location:</strong> Hyderabad, India</p>
                <p>We look forward to seeing you there!</p>
                <br>
                <p>Best Regards,<br>
                The SMEC Conclave Team</p>
                <hr>
                <small>You received this email because you subscribed on our website.</small>
            </div>
        `,
        attachments: [
            {
                filename: 'SMEC_Conclave_Brochure.pdf',
                path: path.join(__dirname, 'public', 'brochure.pdf'), // Ensure this file exists
                contentType: 'application/pdf'
            }
        ]
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to:', email);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
