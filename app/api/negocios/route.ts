import { NextResponse } from "next/server";
import { negocios } from "@/db/db";

export async function GET() {
  return NextResponse.json(negocios);
}
