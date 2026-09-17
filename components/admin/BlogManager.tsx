"use client";
import React from "react";
import GenericManager from "./GenericManager";

export default function BlogManager() {
  const fields = [
    { name: "title", label: "Post Title", type: "text" as const },
    { name: "excerpt", label: "Excerpt / Summary", type: "textarea" as const },
    { name: "category", label: "Category", type: "select" as const, options: ["Field Updates", "Founder's Notes", "Research & Learning", "Voices from the Community", "Press Releases"] },
    { name: "date", label: "Date (e.g. April 2025)", type: "text" as const },
    { name: "readTime", label: "Read Time (e.g. 5 min read)", type: "text" as const },
    { name: "image", label: "Featured Image URL", type: "text" as const },
    { name: "body", label: "Full Article Body", type: "textarea" as const },
  ];

  return <GenericManager title="Blog Posts Manager" storageKey="admin_blogs_v2" fields={fields} />;
}
