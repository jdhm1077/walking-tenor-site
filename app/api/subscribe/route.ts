import { Resend } from "resend";
import { NextResponse } from "next/server";

const AUDIENCE_ID = "8bc05d1a-e2ae-4de2-9429-4f74d6af2a72";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!process.env.RESEND_CONTACTS_API_KEY) {
    return NextResponse.json({ error: "Subscription service not configured." }, { status: 500 });
  }

  const { email } = await request.json();

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_CONTACTS_API_KEY);

  const { error } = await resend.contacts.create({
    email,
    unsubscribed: false,
    audienceId: AUDIENCE_ID,
  });

  if (error) {
    // Resend returns a conflict-style error when the contact already exists.
    // Treat that as success — they're already on the list.
    if ("statusCode" in error && (error as { statusCode: number }).statusCode === 409) {
      return NextResponse.json({ success: true });
    }
    console.error("Resend contacts error:", error);
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
