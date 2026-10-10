import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, store } = await req.json()
    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 })

    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) return NextResponse.json({ error: 'BREVO_API_KEY missing' }, { status: 500 })

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json', 'accept': 'application/json' },
      body: JSON.stringify({
        email,
        attributes: { SHOPIFY_URL: store || 'unknown' },
        updateEnabled: true
      })
    })

    const data = await res.json()
    console.log('Brevo response:', res.status, data)

    if (!res.ok) {
      return NextResponse.json({ error: data.message || JSON.stringify(data) }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (e: any) {
    console.error('API error:', e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
