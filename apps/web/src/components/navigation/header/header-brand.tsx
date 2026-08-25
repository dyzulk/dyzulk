import Link from "next/link";
import { Logo } from "@dyzulk/ui/components/logo";
import { PATHS } from "@/constants/navigation";

export function HeaderBrand() {
  return (
    <Link href={PATHS.home} className="flex items-center gap-2.5 font-bold tracking-tight text-lg shrink-0">
      <Logo className="size-8" />
      <span>
        Dyzulk <span className="text-primary font-normal">Cloud</span>
      </span>
    </Link>
  );
}
