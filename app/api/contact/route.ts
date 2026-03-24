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

        const logoUrl = 'https://flexymarkets.com/hd_logo.webp';

        // 1. Support Notification Email
        const supportEmailHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="${logoUrl}" alt="Flexy Markets Logo" style="height: 50px; width: auto;">
                </div>
                <h2 style="color: #0f4941; margin-bottom: 20px; text-align: center;">New Contact Form Submission</h2>
                
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
                
                <p style="margin-top: 20px; color: #6b7280; font-size: 12px; text-align: center;">
                    This email was sent from the Flexy Markets contact form.
                </p>
            </div>
        `;

        // 2. User Confirmation Email
        const userEmailHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="${logoUrl}" alt="Flexy Markets Logo" style="height: 50px; width: auto;">
                </div>
                <h2 style="color: #0f4941; margin-bottom: 20px; text-align: center;">Message Received</h2>
                
                <p>Hello ${name},</p>
                <p>Thank you for contacting Flexy Markets. We have received your message regarding "<strong>${subject}</strong>" and our support team will get back to you shortly.</p>
                
                <div style="background: #f8fcfb; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid #e5e7eb;">
                    <p style="margin: 0; color: #6b7280; font-style: italic;">"We are committed to providing you with the best trading experience. Our team is available 24/7 to assist you."</p>
                </div>
                
                <p style="margin-top: 30px;">Best regards,<br>The Flexy Markets Team</p>
                
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                
                <p style="color: #6b7280; font-size: 11px; text-align: center;">
                    This is an automated response. Please do not reply directly to this email.
                </p>
            </div>
        `;

        // Send to Support
        await transporter.sendMail({
            from: '"Flexy Markets Support" <support@flexymarkets.com>',
            to: 'support@flexymarkets.com',
            subject: `Contact Form: ${subject} - from ${name}`,
            html: supportEmailHTML,
            replyTo: email
        });

        // Send to User
        await transporter.sendMail({
            from: '"Flexy Markets Support" <support@flexymarkets.com>',
            to: email,
            subject: `Thanks for contacting Flexy Markets!`,
            html: userEmailHTML
        });

        return NextResponse.json(
            { message: 'Emails sent successfully' },
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
