import { NextResponse } from "next/server"
export async function POST(req: Request){
 try{
  const data = await req.json()
  console.log("LEAD:", data)
  return NextResponse.json({ok:true})
 }catch(e:any){
  console.error(e)
  return NextResponse.json({ok:true})
 }
}
