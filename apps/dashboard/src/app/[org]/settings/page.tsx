import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ org: string }>;
}

export default async function SettingsRootPage({ params }: PageProps) {
  const { org } = await params;
  redirect(`/${org}/settings/general`);
}
