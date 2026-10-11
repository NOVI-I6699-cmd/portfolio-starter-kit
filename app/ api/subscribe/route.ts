import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    
    const resend = new Resend(apiKey);
    const body = await req.json();
    
    // handle both old and new form shapes
    const email = body.email || body.customerEmail || "no-email";
    const store = body.store || body.storeUrl || "";
    const revenue = body.revenue || body.monthlyRevenue || "";

    // TEMP: send to YOUR Resend account email for test mode
    // CHANGE THIS to your gmail you used for Resend.com signup
    const to = "YOUR_GMAIL_HERE@gmail.com"; 

    const result = await resend.emails.send({
      from: "Novi LLC <onboarding@resend.dev>",
      to: to,
      subject: `New Lead: ${store} - ${email}`,
      html: `<p><b>Store:</b> ${store}</p><p><b>Revenue:</b> ${revenue}</p><p><b>Email:</b> ${email}</p><pre>${JSON.stringify(body, null, 2)}</pre>`,
    });

    if (result.error) {
      console.error("RESEND ERROR:", result.error);
      return NextResponse.json({ error: result.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("SUBSCRIBE ERROR:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
