import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest){
  try{
    const {store, revenue, email} = await req.json()
    console.log("LEAD:", store, revenue, email)
    
    if(process.env.RESEND_API_KEY){
      await resend.emails.send({
        from: "Novi LLC <onboarding@resend.dev>",
        to: process.env.CONTACT_TO || "hello@novi-llc.com",
        subject: `New Lead: ${store} - ${revenue}`,
        html: `<h2>New Shopify Lead</h2><p><b>Store:</b> ${store}</p><p><b>Revenue:</b> ${revenue}</p><p><b>Email:</b> ${email}</p>`
      })
    }
    return NextResponse.json({ok:true})
  }catch(e:any){
    console.error(e)
    return NextResponse.json({ok:true})
  }
}
