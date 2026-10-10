import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, store } = await req.json()
    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 })
    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) return NextResponse.json({ error: 'BREVO_API_KEY missing in Vercel' }, { status: 500 })
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json', 'accept': 'application/json' },
      body: JSON.stringify({ email, attributes: { STORE: store || '' }, listIds: [6], updateEnabled: true })
    })
    const data = await brevoRes.json()
    if (!brevoRes.ok) return NextResponse.json({ error: data.message || 'Brevo failed' }, { status: 400 })
    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
