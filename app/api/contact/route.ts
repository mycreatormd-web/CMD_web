// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter with your email credentials
    // For Gmail: Enable "Less secure app access" or use App Password
    // For other providers: Use their SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or 'outlook', 'yahoo', etc.
      // Or use custom SMTP:
      // host: 'smtp.yourprovider.com',
      // port: 587,
      // secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email to you (the site owner)
    const mailToOwner = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // Where you want to receive emails
      replyTo: email, // So you can reply directly to the sender
      subject: `[CreatorMD Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ef4444 0%, #a855f7 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                  <a href="mailto:${email}" style="color: #ef4444;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Subject:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${subject}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
              <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; color: #1f2937; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              This email was sent from the CreatorMD website contact form.
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from the CreatorMD website contact form.
      `,
    };

    // Optional: Auto-reply to the sender
    const mailToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting CreatorMD!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ef4444 0%, #a855f7 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <p style="color: #1f2937; font-size: 16px; line-height: 1.6;">
              Hi ${name},
            </p>
            <p style="color: #1f2937; font-size: 16px; line-height: 1.6;">
              Thank you for contacting CreatorMD! We've received your message and will get back to you within 24 hours.
            </p>
            <p style="color: #1f2937; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to explore our community and resources.
            </p>
            <p style="color: #1f2937; font-size: 16px; line-height: 1.6; margin-top: 20px;">
              Best regards,<br>
              <strong>The CreatorMD Team</strong>
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              This is an automated response. Please do not reply to this email.
            </div>
          </div>
        </div>
      `,
    };

    // Send email to owner
    await transporter.sendMail(mailToOwner);
    
    // Send auto-reply to sender (optional - comment out if not needed)
    await transporter.sendMail(mailToSender);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
