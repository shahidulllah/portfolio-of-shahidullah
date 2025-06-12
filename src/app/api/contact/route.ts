import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: `📬 New Portfolio Contact – ${name}`,
      html: `
    <div style="font-family: 'Segoe UI', sans-serif; background-color: #f4f4f4; padding: 30px;">
      <div style="max-width: 640px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05); overflow: hidden;">
        
        <header style="background: linear-gradient(to right, #ddcb9f, #599cb7); padding: 20px 30px;">
          <h1 style="margin: 0; font-size: 22px; color: #fff;">📨 New Contact Message from Portfolio</h1>
        </header>

        <section style="padding: 30px;">
          <p style="font-size: 16px; margin-bottom: 20px;">
            Hello 👋, you just received a new message via your portfolio contact form.
          </p>

          <table style="width: 100%; margin-bottom: 20px; font-size: 15px;">
            <tr>
              <td style="padding: 6px 0;"><strong>👤 Name:</strong></td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0;"><strong>📧 Email:</strong></td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #007bff;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0;"><strong>📅 Date:</strong></td>
              <td style="padding: 6px 0;">${new Date().toLocaleString()}</td>
            </tr>
          </table>

          <p style="font-size: 15px; font-weight: 600; margin-bottom: 10px;">💬 Message:</p>
          <div style="background-color: #f9f9f9; padding: 15px 20px; border-left: 4px solid #599cb7; border-radius: 6px; white-space: pre-wrap; font-size: 14px;">
            ${message}
          </div>

          <div style="margin-top: 30px;">
            <a href="mailto:${email}" style="display: inline-block; background-color: #599cb7; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-size: 14px;">
              📥 Reply to ${name}
            </a>
          </div>

          <hr style="margin: 30px 0;" />

          <footer style="font-size: 12px; color: #999; text-align: center;">
            This message was sent from your personal portfolio. Please do not reply directly to this automated message.
          </footer>
        </section>
      </div>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}
