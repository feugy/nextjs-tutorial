import { NextResponse } from "next/server";

export async function middleware(request) {
  console.log(`raw url: ${request.url}, next url: ${request.nextUrl}`);

  const country = request.geo.country || "US";

  console.log("body:", await request.text());
  console.log(`hit on ${request.url} from ${country}`);
  return NextResponse.next();
}
