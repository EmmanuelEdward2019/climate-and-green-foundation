"use client";
import React from "react";
import GenericManager from "./GenericManager";

export default function ContactManager() {
  const fields = [
    { name: "name", label: "Sender Name", type: "text" as const },
    { name: "email", label: "Sender Email", type: "text" as const },
    { name: "subject", label: "Subject", type: "text" as const },
    { name: "message", label: "Message", type: "textarea" as const },
    { name: "status", label: "Status", type: "select" as const, options: ["Unread", "Read", "Responded"] },
  ];

  return <GenericManager title="Contact Submissions" storageKey="admin_contacts" fields={fields} />;
}
