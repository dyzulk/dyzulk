import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PATHS } from "@/constants/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@dyzulk/ui/components/navigation-menu";
import {
  PRODUCT_MEGA_MENU,
  DEVELOPERS_MEGA_MENU,
  SOLUTIONS_MEGA_MENU,
  COMPANY_MEGA_MENU,
} from "@/constants/navigation";

export function HeaderDesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
      <NavigationMenu className="z-50">
        <NavigationMenuList className="gap-1">
          {/* Product */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-3.5 py-2 h-auto text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 data-[popup-open]:bg-primary data-[popup-open]:text-primary-foreground data-[open]:bg-primary data-[open]:text-primary-foreground bg-transparent transition-colors font-medium rounded-none shadow-xs">
              Product
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-[580px] border border-border bg-popover p-6 shadow-md text-foreground rounded-none">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <Link
                    href={PRODUCT_MEGA_MENU.platformOverview.href}
                    className="inline-flex items-center gap-1 font-bold text-sm hover:text-primary mb-3 text-foreground"
                  >
                    {PRODUCT_MEGA_MENU.platformOverview.title} <ArrowRight className="size-3.5" />
                  </Link>
                  <div className="flex flex-col gap-2">
                    {PRODUCT_MEGA_MENU.platformOverview.features.map((f) => (
                      <Link
                        key={f.name}
                        href={f.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {f.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground/80 mb-3">
                    {PRODUCT_MEGA_MENU.workflows.title}
                  </div>
                  <div className="flex flex-col gap-2">
                    {PRODUCT_MEGA_MENU.workflows.services.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Developers */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-3.5 py-2 h-auto text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 data-[popup-open]:bg-primary data-[popup-open]:text-primary-foreground data-[open]:bg-primary data-[open]:text-primary-foreground bg-transparent transition-colors font-medium rounded-none shadow-xs">
              Developers
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-[580px] border border-border bg-popover p-6 shadow-md text-foreground rounded-none">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-5">
                  <Link href={DEVELOPERS_MEGA_MENU.docs.href} className="group/item flex flex-col gap-1">
                    <span className="font-bold text-sm hover:text-primary inline-flex items-center gap-1 text-foreground">
                      {DEVELOPERS_MEGA_MENU.docs.title} <ArrowRight className="size-3.5" />
                    </span>
                    <span className="text-xs text-muted-foreground">{DEVELOPERS_MEGA_MENU.docs.description}</span>
                  </Link>
                  <Link href={DEVELOPERS_MEGA_MENU.agents.href} className="group/item flex flex-col gap-1">
                    <span className="font-bold text-sm hover:text-primary inline-flex items-center gap-1 text-foreground">
                      {DEVELOPERS_MEGA_MENU.agents.title} <ArrowRight className="size-3.5" />
                    </span>
                    <span className="text-xs text-muted-foreground">{DEVELOPERS_MEGA_MENU.agents.description}</span>
                  </Link>
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <div className="text-[10px] tracking-wider text-muted-foreground/80 font-bold mb-2">
                      {DEVELOPERS_MEGA_MENU.getStarted.title}
                    </div>
                    <div className="flex flex-col gap-2">
                      {DEVELOPERS_MEGA_MENU.getStarted.links.map((l) => (
                        <Link
                          key={l.name}
                          href={l.href}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-wider text-muted-foreground/80 font-bold mb-2">
                      {DEVELOPERS_MEGA_MENU.updates.title}
                    </div>
                    <div className="flex flex-col gap-2">
                      {DEVELOPERS_MEGA_MENU.updates.links.map((l) => (
                        <Link
                          key={l.name}
                          href={l.href}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Solutions */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-3.5 py-2 h-auto text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 data-[popup-open]:bg-primary data-[popup-open]:text-primary-foreground data-[open]:bg-primary data-[open]:text-primary-foreground bg-transparent transition-colors font-medium rounded-none shadow-xs">
              Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-[580px] border border-border bg-popover p-6 shadow-md text-foreground rounded-none">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-5">
                  <Link href={SOLUTIONS_MEGA_MENU.customers.href} className="group/item flex flex-col gap-1">
                    <span className="font-bold text-sm hover:text-primary inline-flex items-center gap-1 text-foreground">
                      {SOLUTIONS_MEGA_MENU.customers.title} <ArrowRight className="size-3.5" />
                    </span>
                    <span className="text-xs text-muted-foreground">{SOLUTIONS_MEGA_MENU.customers.description}</span>
                  </Link>
                  <Link href={SOLUTIONS_MEGA_MENU.migrationCredits.href} className="group/item flex flex-col gap-1">
                    <span className="font-bold text-sm hover:text-primary inline-flex items-center gap-1 text-foreground">
                      {SOLUTIONS_MEGA_MENU.migrationCredits.title} <ArrowRight className="size-3.5" />
                    </span>
                    <span className="text-xs text-muted-foreground">{SOLUTIONS_MEGA_MENU.migrationCredits.description}</span>
                  </Link>
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <div className="text-[10px] tracking-wider text-muted-foreground/80 font-bold mb-2">
                      {SOLUTIONS_MEGA_MENU.build.title}
                    </div>
                    <div className="flex flex-col gap-2">
                      {SOLUTIONS_MEGA_MENU.build.links.map((l) => (
                        <Link
                          key={l.name}
                          href={l.href}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-wider text-muted-foreground/80 font-bold mb-2">
                      {SOLUTIONS_MEGA_MENU.migrate.title}
                    </div>
                    <div className="flex flex-col gap-2">
                      {SOLUTIONS_MEGA_MENU.migrate.links.map((l) => (
                        <Link
                          key={l.name}
                          href={l.href}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Pricing */}
          <NavigationMenuItem>
            <Link
              href={PATHS.pricing}
              className="px-3.5 py-2 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors rounded-none"
            >
              Pricing
            </Link>
          </NavigationMenuItem>

          {/* Company */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-3.5 py-2 h-auto text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 data-[popup-open]:bg-primary data-[popup-open]:text-primary-foreground data-[open]:bg-primary data-[open]:text-primary-foreground bg-transparent transition-colors font-medium rounded-none shadow-xs">
              Company
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-[180px] border border-border bg-popover p-4 shadow-md text-foreground rounded-none">
              <div className="flex flex-col gap-2">
                {COMPANY_MEGA_MENU.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
