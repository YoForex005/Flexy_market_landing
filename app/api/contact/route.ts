import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Create transporter with Hostinger SMTP settings
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'support@flexymarkets.com',
                pass: 'Support@464587',
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Email HTML template
        const emailHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
                <h2 style="color: #0f4941; margin-bottom: 20px;">New Contact Form Submission</h2>
                
                <div style="background: #f8fcfb; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #0f4941; margin-top: 0;">Contact Information</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                </div>
                
                <div style="background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
                    <h3 style="color: #0f4941; margin-top: 0;">Message</h3>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
                
                <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
                    This email was sent from the Flexy Markets contact form.
                </p>
            </div>
        `;

        // Email options - Sending to BOTH addresses
        const mailOptions = {
            from: 'support@flexymarkets.com',
            to: 'support@flexymarkets.com, financewithyoforex@gmail.com', // Both recipients
            subject: `Contact Form: ${subject} - from ${name}`,
            html: emailHTML,
            replyTo: email // Allow direct reply to the sender
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully to both addresses' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send email', error: String(error) },
            { status: 500 }
        );
    }
}
