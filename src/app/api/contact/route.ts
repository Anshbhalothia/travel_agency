import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxxKtXWEP5lL2JbUZxyMze-PRllBaGjtdQKS5N2Fv7yW-g-QUT9eVQUbvxVH4zGR5HB/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    console.log("Google Sheet response:", text);

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}