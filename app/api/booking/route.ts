import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, details } = await request.json();

  if (!name || !email || !details) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "admin@thewalkingtenor.com",
    replyTo: email,
    subject: `Booking inquiry from ${name}`,
    text: `New booking inquiry\n\nName: ${name}\nEmail: ${email}\n\nEvent details:\n${details}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
