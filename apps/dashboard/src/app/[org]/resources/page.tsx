import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ org: string }>;
}

export default async function ResourcesRootPage({ params }: PageProps) {
  const { org } = await params;
  redirect(`/${org}/resources/databases`);
}
