"use client";
import React from "react";
import GenericManager from "./GenericManager";

export default function NewsletterManager() {
  const fields = [
    { name: "email", label: "Subscriber Email", type: "text" as const },
    { name: "status", label: "Status", type: "select" as const, options: ["Active", "Unsubscribed"] },
    { name: "subscribedAt", label: "Date Subscribed", type: "date" as const },
  ];

  return <GenericManager title="Newsletter Subscribers" storageKey="admin_newsletters" fields={fields} />;
}
