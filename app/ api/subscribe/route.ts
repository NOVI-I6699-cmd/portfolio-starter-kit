import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    }
    const resend = new Resend(apiKey);
    const body = await req.json();
    
    const email = body.email || body.customerEmail || "no-email";
    const store = body.store || body.storeUrl || "";
    const revenue = body.revenue || body.monthlyRevenue || "";

    const result = await resend.emails.send({
      from: "Novi LLC <info@novi-llc.com>",
      to: ["eveilsaint6699@gmail.com"],
      cc: ["info@novi-llc.com"],
      subject: `New Lead: ${store} - ${email} - ${revenue}`,
      replyTo: email,
      html: `
        <h2>New Lead from novi-llc.com 🔥</h2>
        <p><b>Store:</b> ${store}</p>
        <p><b>Revenue:</b> ${revenue}</p>
        <p><b>Email:</b> ${email}</p>
        <hr>
        <pre>${JSON.stringify(body, null, 2)}</pre>
      `,
    });

    if (result.error) {
      console.error("RESEND ERROR:", result.error);
      return NextResponse.json({ error: result.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: result.data?.id });
  } catch (e: any) {
    console.error("SUBSCRIBE ERROR:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
