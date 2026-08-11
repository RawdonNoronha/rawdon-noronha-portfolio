import { NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const client = new BrevoClient({
      apiKey: process.env.BREVO_API_KEY || "",
    });

    await client.transactionalEmails.sendTransacEmail({
      htmlContent: `
        <html>
          <body>
            <h2>New message from your portfolio</h2>
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </body>
        </html>
      `,
      sender: {
        email: "hello@yourdomain.com",
        name: "Rawdon Noronha Portfolio",
      },
      subject: subject,
      to: [
        {
          email: "rawdonnoronha11@gmail.com",
          name: "Rawdon Noronha",
        },
      ],
      replyTo: {
        email: email,
      },
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Brevo error:", error);

    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}