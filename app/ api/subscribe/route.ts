import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log("LEAD RECEIVED:", JSON.stringify(data))
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.log("ERROR but still returning ok:", err?.message)
    return NextResponse.json({ ok: true })
  }
}
