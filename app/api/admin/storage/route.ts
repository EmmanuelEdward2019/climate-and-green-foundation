import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".data");

// Ensure the data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");

  if (!key) {
    return NextResponse.json({ error: "Key is required" }, { status: 400 });
  }

  // Basic security to prevent path traversal
  if (key.includes("/") || key.includes("..")) {
    return NextResponse.json({ error: "Invalid key" }, { status: 400 });
  }

  const filePath = path.join(DATA_DIR, `${key}.json`);

  try {
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      return NextResponse.json(JSON.parse(fileData));
    }
    return NextResponse.json(null); // Return null if file doesn't exist
  } catch (error) {
    console.error(`Error reading data for key ${key}:`, error);
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { key, data } = await req.json();

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    // Basic security to prevent path traversal
    if (key.includes("/") || key.includes("..")) {
      return NextResponse.json({ error: "Invalid key" }, { status: 400 });
    }

    const filePath = path.join(DATA_DIR, `${key}.json`);
    
    // Write data to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error writing data:", error);
    return NextResponse.json({ error: "Failed to write data" }, { status: 500 });
  }
}
