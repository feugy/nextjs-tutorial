import { NextResponse } from 'next/server'
import mql from '@microlink/mql/lightweight'

export async function middleware(request) {
  const response = NextResponse.next()
  // mql('http://example.com')
  response.headers.set('x-from-middleware', 'true')
  return response
}

export const config = { matcher: '/' }
