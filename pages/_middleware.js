import { NextResponse } from "next/server";

export async function middleware(request) {
  const country = request.geo.country || "US";

  console.log("body:", await request.text());
  console.log(`hit on ${request.url} from ${country}`);
  return NextResponse.next();
}
