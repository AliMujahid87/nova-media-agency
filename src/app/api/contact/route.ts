import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

// Validation schema — matches the frontend form
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(2, "Subject must be at least 2 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate incoming data
    const result = formSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid data", details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, company, phone, email, subject, message } = result.data;

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log("⚠️ SMTP not configured. Form submission received:");
      console.log({ name, company, phone, email, subject, message });
      return NextResponse.json(
        { success: true, message: "Message received (email not configured)" },
        { status: 200 }
      );
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Send notification to admin/owner
    await transporter.sendMail({
      from: `"NOVA Media Agency" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `🔔 New Inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 24px 32px;">
            <h1 style="margin: 0; font-size: 22px; color: #000;">📩 New Contact Form Submission</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #f59e0b; font-weight: bold; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #e5e5e5;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #f59e0b; font-weight: bold;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #e5e5e5;">${company || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #f59e0b; font-weight: bold;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #e5e5e5;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #f59e0b; font-weight: bold;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #e5e5e5;"><a href="mailto:${email}" style="color: #f59e0b;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #f59e0b; font-weight: bold;">Subject</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #333; color: #e5e5e5;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background: #1a1a1a; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0 0 8px 0; color: #f59e0b; font-weight: bold; font-size: 14px;">Message:</p>
              <p style="margin: 0; color: #d4d4d4; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #666;">You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    // 2. Send auto-reply to the user
    await transporter.sendMail({
      from: `"NOVA Media Agency" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting NOVA Media Agency ✨",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 24px 32px;">
            <h1 style="margin: 0; font-size: 22px; color: #000;">NOVA Media Agency</h1>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #f59e0b; margin-top: 0;">Hi ${name}! 👋</h2>
            <p style="color: #d4d4d4; line-height: 1.8; font-size: 15px;">
              Thank you for reaching out to us! We've received your message and our team will review it promptly.
            </p>
            <p style="color: #d4d4d4; line-height: 1.8; font-size: 15px;">
              We typically respond within <strong style="color: #f59e0b;">24 hours</strong>. In the meantime, feel free to explore our services.
            </p>
            <div style="margin: 28px 0; padding: 20px; background: #1a1a1a; border-radius: 8px;">
              <p style="margin: 0; color: #888; font-size: 13px;">Your inquiry:</p>
              <p style="margin: 8px 0 0 0; color: #e5e5e5; font-weight: bold;">${subject}</p>
            </div>
            <p style="color: #888; font-size: 13px; margin-bottom: 0;">
              Best Regards,<br>
              <strong style="color: #f59e0b;">The NOVA Media Agency Team</strong><br>
              📧 info@novamediaagency.com | 📞 +971 58 624 0820
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
