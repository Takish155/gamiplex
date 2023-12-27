import { NextRequest, NextResponse } from "next/server";
import { fetchGenres } from "./fetchGenres";

export async function GET(req: NextRequest) {
  try {
    const data = await fetchGenres();
    return NextResponse.json({ response: data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Response failed!" }, { status: 400 });
  }
}
