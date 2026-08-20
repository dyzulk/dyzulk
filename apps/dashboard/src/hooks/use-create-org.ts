import { useState } from "react";
import { useRouter } from "next/navigation";
import { createOrganizationAction } from "@/actions/organization";

export function useCreateOrg() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || name.trim().length < 2) {
      setError("Nama organisasi minimal 2 karakter");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const res = await createOrganizationAction(name);
      if (res.success && res.slug) {
        // Redirect directly to the new organization workspace homepage
        router.push(`/${res.slug}`);
      } else {
        setError(res.error || "Gagal membuat organisasi.");
        setIsLoading(false);
      }
    } catch (err) {
      setError("Terjadi kesalahan yang tidak terduga.");
      setIsLoading(false);
    }
  };

  return {
    name,
    setName,
    isLoading,
    error,
    handleSubmit,
  };
}
