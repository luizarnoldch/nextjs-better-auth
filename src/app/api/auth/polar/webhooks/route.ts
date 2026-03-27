// Next 15 app router route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Webhook headers:", req.headers);
    console.log("Webhook body:", body);
    return NextResponse.json({ message: "Webhook received", headers: req.headers, body });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ message: "Webhook error" }, { status: 500 });
  }
}