"use client";
import React from "react";
import GenericManager from "./GenericManager";

export default function DonationManager() {
  const fields = [
    { name: "donorName", label: "Donor Name", type: "text" as const },
    { name: "email", label: "Email", type: "text" as const },
    { name: "amount", label: "Amount (USD)", type: "number" as const },
    { name: "campaign", label: "Campaign", type: "select" as const, options: ["General Fund", "Tree Planting", "Ocean Cleanup", "Education"] },
    { name: "date", label: "Date", type: "date" as const },
    { name: "status", label: "Status", type: "select" as const, options: ["Completed", "Pending", "Failed"] },
  ];

  return <GenericManager title="Donations Tracker" storageKey="admin_donations" fields={fields} />;
}
