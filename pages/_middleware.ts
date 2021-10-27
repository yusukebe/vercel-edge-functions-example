import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const message = req.nextUrl.searchParams.get("message") || " NOTHING "
  const res = NextResponse.next()
  res.headers.append("X-Meesage-From-Middleware", "Message: " + message)
  return res
}
