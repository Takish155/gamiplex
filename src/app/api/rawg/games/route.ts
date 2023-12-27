import { NextRequest, NextResponse } from "next/server";
import { fetchGames } from "./fetchGames";

export async function GET(request: NextRequest) {
  const pageNumber = request.nextUrl.searchParams.get("page");
  const genre = request.nextUrl.searchParams.get("genre");
  const query = request.nextUrl.searchParams.get("query");
  const sort = request.nextUrl.searchParams.get("sort");
  const type = request.nextUrl.searchParams.get("type");

  try {
    const data = await fetchGames(
      parseInt(pageNumber!),
      genre,
      query,
      sort,
      type
    );
    return NextResponse.json({ response: data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Response failed!" }, { status: 400 });
  }
}
