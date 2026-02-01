import { NextRequest, NextResponse } from "next/server";

// Meta webhook verification
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (
    mode === "subscribe" &&
    token === process.env.WHATSAPP_VERIFY_TOKEN
  ) {
    return new NextResponse(challenge, { status: 200 });
  }

  return new NextResponse("Forbidden", { status: 403 });
}

// Incoming webhook events
export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log("WhatsApp webhook event:", body);

  return NextResponse.json({ ok: true });
}
