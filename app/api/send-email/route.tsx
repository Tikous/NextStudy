import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// How to send a email
export async function POST() {
  await resend.emails.send({
    // There need a domain of our owns
    from: "xxxx",
    to: "saikou123@456.com",
    subject: "xxx",
    react: <WelcomeTemplate name="Saikou" />,
  });

  return NextResponse.json({});
}
