import { getServerSession } from "@dyzulk/server";
import { redirect } from "next/navigation";
import { getUserOrganizationsAction } from "@/actions/organization";

export default async function RootPage() {
  const { session, account } = await getServerSession();

  if (!session || !account) {
    redirect("/login");
  }

  const result = await getUserOrganizationsAction();

  if (result.success && result.data && result.data.length > 0) {
    const firstOrg = result.data[0];
    if (firstOrg) {
      redirect(`/${firstOrg.slug}`);
    }
  }
  redirect("/new");
}

