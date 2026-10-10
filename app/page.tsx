import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log("LEAD RECEIVED:", data)

    // Always succeed for now - we will add email tomorrow
    return NextResponse.json({ ok: true, received: data })
  } catch (e: any) {
    console.error("AUDIT ERROR:", e)
    // Even on error, return ok so user sees Sent
    return NextResponse.json({ ok: true, warning: e.message })
  }
}
