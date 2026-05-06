"use client";
import React from "react";
import GenericManager from "./GenericManager";

export default function SEOManager() {
  const fields = [
    { name: "pageRoute", label: "Page Route", type: "text" as const },
    { name: "title", label: "Meta Title", type: "text" as const },
    { name: "description", label: "Meta Description", type: "textarea" as const },
    { name: "keywords", label: "Keywords (comma separated)", type: "textarea" as const },
    { name: "ogImage", label: "OpenGraph Image URL", type: "text" as const },
  ];

  return <GenericManager title="SEO Features Manager" storageKey="admin_seo" fields={fields} />;
}
