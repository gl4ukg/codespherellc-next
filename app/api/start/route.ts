import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { types, scale, budget, timeline, name, email, company, description } = body;

  try {
    await resend.emails.send({
      from: "Codesphere <noreply@codespherellc.com>",
      to: ["glauk@codespherellc.com"],
      subject: `New project inquiry from ${name} — ${company || "No company"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1a; color: #e8eaf0; padding: 40px; border-radius: 12px;">
          <h1 style="color: #5ee2ff; font-size: 24px; margin: 0 0 8px;">New Project Inquiry</h1>
          <p style="color: #6b7280; margin: 0 0 32px;">Submitted via codespherellc.com</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1e2538; color: #6b7280; width: 140px;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #1e2538;">${name}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1e2538; color: #6b7280;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #1e2538;"><a href="mailto:${email}" style="color: #5ee2ff;">${email}</a></td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1e2538; color: #6b7280;">Company</td><td style="padding: 12px 0; border-bottom: 1px solid #1e2538;">${company || "—"}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1e2538; color: #6b7280;">Project type</td><td style="padding: 12px 0; border-bottom: 1px solid #1e2538;">${types.join(", ")}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1e2538; color: #6b7280;">Scale</td><td style="padding: 12px 0; border-bottom: 1px solid #1e2538;">${scale}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1e2538; color: #6b7280;">Budget</td><td style="padding: 12px 0; border-bottom: 1px solid #1e2538;">${budget}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid #1e2538; color: #6b7280;">Timeline</td><td style="padding: 12px 0; border-bottom: 1px solid #1e2538;">${timeline}</td></tr>
          </table>

          ${description ? `<div style="margin-top: 24px;"><p style="color: #6b7280; margin: 0 0 8px;">Description</p><p style="background: #111827; padding: 16px; border-radius: 8px; margin: 0; line-height: 1.6;">${description}</p></div>` : ""}
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
