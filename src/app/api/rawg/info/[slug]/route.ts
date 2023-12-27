import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import fetchInfo from "./fetchInfo";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const data = await fetchInfo(params.slug);
    return NextResponse.json({ response: data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "An error occured!" }, { status: 400 });
  }
}
