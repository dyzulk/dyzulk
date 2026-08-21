import React from "react";
import { getServerSession } from "@dyzulk/server";
import { redirect } from "next/navigation";
import { CreateOrgSection } from "@/components/org/new/create-org-section";

export default async function NewOrgPage() {
  const { session, account } = await getServerSession();

  if (!session || !account) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <CreateOrgSection />
    </main>
  );
}
