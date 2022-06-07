import { NextResponse } from 'next/server'

export async function middleware(request) {
  console.log('middleware url:', request.url)
  const response = NextResponse.next()
  response.headers.set('x-raw-url', request.url)
  return response
}
