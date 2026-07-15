import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Invalid secret" },
      { status: 401 }
    );
  }

  revalidatePath("/");

  return NextResponse.json({
    revalidated: true,
  });
}