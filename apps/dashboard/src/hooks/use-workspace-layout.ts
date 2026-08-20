import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserOrganizationsAction } from "@/actions/organization";

interface Organization {
  id: string;
  name: string;
  slug: string;
  role: string;
}

export function useWorkspaceLayout(activeSlug: string) {
  const router = useRouter();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function loadOrgs() {
      try {
        const res = await getUserOrganizationsAction();
        if (res.success && res.data) {
          setOrganizations(res.data);
        }
      } catch (error) {
        console.error("Failed to load organizations in layout:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadOrgs();
  }, []);

  const handleSelectOrg = (slug: string) => {
    setIsOpen(false);
    router.push(`/${slug}`);
  };

  const handleCreateOrgClick = () => {
    setIsOpen(false);
    router.push("/new");
  };

  const activeOrg = organizations.find((o) => o.slug === activeSlug);

  return {
    organizations,
    activeOrg,
    isLoading,
    isOpen,
    setIsOpen,
    handleSelectOrg,
    handleCreateOrgClick,
  };
}
