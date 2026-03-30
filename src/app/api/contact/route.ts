import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import * as z from "zod";

// Initialize Supabase only if variables exist
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// Validation Schema matches frontend to ensure double validation
const formSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  websiteUrl: z.string().optional(),
  selectedPackage: z.string().min(1, "Package required"),
  utmSource: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validate data using Zod
    const validatedData = formSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Bad Request: Invalid data submitted.", details: validatedData.error.format() },
        { status: 400 }
      );
    }
    
    const { name, email, websiteUrl, selectedPackage, utmSource } = validatedData.data;

    // 2. Insert into Supabase logic (if keys present)
    if (supabase) {
      const { error: dbError } = await supabase.from("leads").insert([
        {
          name,
          email,
          website_url: websiteUrl,
          package: selectedPackage,
          utm_source: utmSource,
          created_at: new Date().toISOString()
        }
      ]);
      if (dbError) console.error("Supabase Error:", dbError);
    } else {
      console.log("Mock lead DB insertion:", validatedData.data);
      // Simulating network delay for realistic UX testing
      await new Promise(res => setTimeout(res, 1000));
    }

    // 3. Automation: Sending Email via Nodemailer 
    // This requires SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local to actually fire
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "465"),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Email template
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: email, // Auto-reply to user
        subject: "Welcome to AgencyPro - Let's scaling!",
        html: `
          <h3>Hi ${name},</h3>
          <p>We've received your inquiry regarding the <b>${selectedPackage}</b> package.</p>
          <p>Our team is reviewing your provided details and will be in touch within 24 hours.</p>
          <br>
          <p>Best Regards,</p>
          <p>The AgencyPro Team</p>
        `,
      };
      
      const adminMailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER, // Admin email
        subject: `New Lead: ${name} - ${selectedPackage}`,
        html: `
          <h3>New Lead Received</h3>
          <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Website: ${websiteUrl || "Not provided"}</li>
            <li>Package: ${selectedPackage}</li>
            <li>UTM Tracker: ${utmSource || "Direct"}</li>
          </ul>
        `
      };

      await transporter.sendMail(mailOptions);
      await transporter.sendMail(adminMailOptions);
    } else {
      console.log("Mock email sent. (SMTP credentials missing)");
    }

    return NextResponse.json({ success: true, message: "Lead captured successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
