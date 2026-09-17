import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { POSTS } from "@/lib/posts";

export const dynamic = 'force-dynamic';

const DATA_DIR = path.join(process.cwd(), ".data");

// Seed straight from the site's single source of truth so a seed can never
// reintroduce superseded copy.
const existingPosts = POSTS.map((post) => ({
  ...post,
  createdAt: new Date().toISOString(),
}));

export async function POST() {
  try {
    // Ensure the data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    const filePath = path.join(DATA_DIR, "admin_blogs_v2.json");
    
    // Check if blogs already exist
    let existingData: any[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, "utf-8");
        existingData = JSON.parse(raw);
      } catch {
        existingData = [];
      }
    }

    // Only seed if no posts exist yet
    if (Array.isArray(existingData) && existingData.length > 0) {
      return NextResponse.json({ 
        success: true, 
        message: `Blog posts already exist (${existingData.length} posts). No seeding needed.`,
        count: existingData.length 
      });
    }

    // Write the seed data
    fs.writeFileSync(filePath, JSON.stringify(existingPosts, null, 2), "utf-8");

    return NextResponse.json({ 
      success: true, 
      message: `Successfully seeded ${existingPosts.length} blog posts.`,
      count: existingPosts.length 
    });
  } catch (error) {
    console.error("Error seeding blog posts:", error);
    return NextResponse.json({ error: "Failed to seed blog posts" }, { status: 500 });
  }
}
