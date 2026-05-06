"use client";
import React from "react";
import GenericManager from "./GenericManager";

export default function PartnersManager() {
  const fields = [
    { name: "companyName", label: "Company/Organization", type: "text" as const },
    { name: "contactPerson", label: "Contact Person", type: "text" as const },
    { name: "email", label: "Email", type: "text" as const },
    { name: "partnershipType", label: "Partnership Type", type: "select" as const, options: ["Corporate", "NGO", "Government", "Media"] },
    { name: "message", label: "Proposal/Message", type: "textarea" as const },
  ];

  return <GenericManager title="Partners Applications" storageKey="admin_partners" fields={fields} />;
}
