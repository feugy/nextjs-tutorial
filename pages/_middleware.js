import { NextResponse } from "next/server";

export function middleware(request) {
  const country = request.geo.country || "US";

  console.log(`hit on ${request.url} from ${country}`);
  return NextResponse.next();
}
