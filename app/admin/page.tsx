"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BlogManager from "@/components/admin/BlogManager";
import NewsletterManager from "@/components/admin/NewsletterManager";
import ContactManager from "@/components/admin/ContactManager";
import PartnersManager from "@/components/admin/PartnersManager";
import VolunteerManager from "@/components/admin/VolunteerManager";
import DonationManager from "@/components/admin/DonationManager";
import SEOManager from "@/components/admin/SEOManager";
import FrontendEditor from "@/components/admin/FrontendEditor";
import DashboardOverview from "@/components/admin/DashboardOverview";

function AdminContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "dashboard";

  const renderContent = () => {
    switch (tab) {
      case "blog": return <BlogManager />;
      case "newsletter": return <NewsletterManager />;
      case "contacts": return <ContactManager />;
      case "partners": return <PartnersManager />;
      case "volunteers": return <VolunteerManager />;
      case "donations": return <DonationManager />;
      case "seo": return <SEOManager />;
      case "editor": return <FrontendEditor />;
      case "dashboard":
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 min-h-[80vh]">
        {renderContent()}
      </div>
    </div>
  );
}

export default function AdminPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-gray-500">Loading modules...</div>}>
      <AdminContent />
    </Suspense>
  );
}
