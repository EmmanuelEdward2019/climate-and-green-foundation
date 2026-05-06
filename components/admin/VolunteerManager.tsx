"use client";
import React from "react";
import GenericManager from "./GenericManager";

export default function VolunteerManager() {
  const fields = [
    { name: "fullName", label: "Full Name", type: "text" as const },
    { name: "email", label: "Email", type: "text" as const },
    { name: "phone", label: "Phone", type: "text" as const },
    { name: "skills", label: "Skills/Expertise", type: "text" as const },
    { name: "availability", label: "Availability", type: "select" as const, options: ["Full-time", "Part-time", "Weekends Only", "Flexible"] },
    { name: "status", label: "Application Status", type: "select" as const, options: ["Pending", "Approved", "Rejected"] },
  ];

  return <GenericManager title="Volunteer Applications" storageKey="admin_volunteers" fields={fields} />;
}
