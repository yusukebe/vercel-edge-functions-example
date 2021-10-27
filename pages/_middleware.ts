import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.url
  const res = NextResponse.next()
  res.headers.append("X-Meesage-By-Middleware", "Hello! from " + url)
  return res
}
