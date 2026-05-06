"use client";
import React from "react";
import GenericManager from "./GenericManager";

export default function BlogManager() {
  const fields = [
    { name: "title", label: "Post Title", type: "text" as const },
    { name: "author", label: "Author", type: "text" as const },
    { name: "category", label: "Category", type: "select" as const, options: ["News", "Events", "Reports", "Announcements"] },
    { name: "content", label: "Content", type: "textarea" as const },
    { name: "imageUrl", label: "Featured Image URL", type: "text" as const },
  ];

  return <GenericManager title="Blog Posts Manager" storageKey="admin_blogs" fields={fields} />;
}
