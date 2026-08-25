import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@dyzulk/ui/components/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@dyzulk/ui/components/sheet";
import { Logo } from "@dyzulk/ui/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@dyzulk/ui/lib/utils";
import { PATHS } from "@/constants/navigation";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@dyzulk/ui/components/accordion";
import {
  PRODUCT_MEGA_MENU,
  DEVELOPERS_MEGA_MENU,
  SOLUTIONS_MEGA_MENU,
  COMPANY_MEGA_MENU,
} from "@/constants/navigation";

export function HeaderMobileSheet() {
  return (
    <div className="flex md:hidden items-center gap-2">
      <ThemeToggle />
      <Sheet>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon-sm" className="rounded-none">
              <Menu className="size-5" />
            </Button>
          }
        />
        <SheetContent side="top" className="p-6 max-h-[85vh] overflow-y-auto rounded-none">
          <SheetHeader className="p-0 mb-4">
            <SheetTitle className="flex items-center gap-2 text-base font-bold">
              <Logo className="size-5" /> Dyzulk Cloud Navigation
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-3 font-medium text-xs">
            <Accordion className="w-full">
              {/* Product */}
              <AccordionItem value="product" className="border-b border-border/40">
                <AccordionTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground py-3 rounded-none hover:no-underline">
                  Product
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="flex flex-col gap-4 pl-3 pt-2">
                    <div>
                      <div className="font-bold text-xs text-foreground mb-2">
                        {PRODUCT_MEGA_MENU.platformOverview.title}
                      </div>
                      <div className="flex flex-col gap-2 pl-2">
                        {PRODUCT_MEGA_MENU.platformOverview.features.map((f) => (
                          <Link key={f.name} href={f.href} className="text-xs text-muted-foreground hover:text-foreground py-1">
                            {f.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xs text-foreground mb-2">
                        {PRODUCT_MEGA_MENU.workflows.title}
                      </div>
                      <div className="flex flex-col gap-2 pl-2">
                        {PRODUCT_MEGA_MENU.workflows.services.map((s) => (
                          <Link key={s.name} href={s.href} className="text-xs text-muted-foreground hover:text-foreground py-1">
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Developers */}
              <AccordionItem value="developers" className="border-b border-border/40">
                <AccordionTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground py-3 rounded-none hover:no-underline">
                  Developers
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="flex flex-col gap-4 pl-3 pt-2">
                    <Link href={DEVELOPERS_MEGA_MENU.docs.href} className="flex flex-col gap-0.5">
                      <span className="font-bold text-xs text-foreground">{DEVELOPERS_MEGA_MENU.docs.title}</span>
                      <span className="text-[10px] text-muted-foreground">{DEVELOPERS_MEGA_MENU.docs.description}</span>
                    </Link>
                    <Link href={DEVELOPERS_MEGA_MENU.agents.href} className="flex flex-col gap-0.5">
                      <span className="font-bold text-xs text-foreground">{DEVELOPERS_MEGA_MENU.agents.title}</span>
                      <span className="text-[10px] text-muted-foreground">{DEVELOPERS_MEGA_MENU.agents.description}</span>
                    </Link>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground/80 mb-2">
                        {DEVELOPERS_MEGA_MENU.getStarted.title}
                      </div>
                      <div className="flex flex-col gap-2 pl-2">
                        {DEVELOPERS_MEGA_MENU.getStarted.links.map((l) => (
                          <Link key={l.name} href={l.href} className="text-xs text-muted-foreground hover:text-foreground py-1">
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground/80 mb-2">
                        {DEVELOPERS_MEGA_MENU.updates.title}
                      </div>
                      <div className="flex flex-col gap-2 pl-2">
                        {DEVELOPERS_MEGA_MENU.updates.links.map((l) => (
                          <Link key={l.name} href={l.href} className="text-xs text-muted-foreground hover:text-foreground py-1">
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Solutions */}
              <AccordionItem value="solutions" className="border-b border-border/40">
                <AccordionTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground py-3 rounded-none hover:no-underline">
                  Solutions
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="flex flex-col gap-4 pl-3 pt-2">
                    <Link href={SOLUTIONS_MEGA_MENU.customers.href} className="flex flex-col gap-0.5">
                      <span className="font-bold text-xs text-foreground">{SOLUTIONS_MEGA_MENU.customers.title}</span>
                      <span className="text-[10px] text-muted-foreground">{SOLUTIONS_MEGA_MENU.customers.description}</span>
                    </Link>
                    <Link href={SOLUTIONS_MEGA_MENU.migrationCredits.href} className="flex flex-col gap-0.5">
                      <span className="font-bold text-xs text-foreground">{SOLUTIONS_MEGA_MENU.migrationCredits.title}</span>
                      <span className="text-[10px] text-muted-foreground">{SOLUTIONS_MEGA_MENU.migrationCredits.description}</span>
                    </Link>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground/80 mb-2">
                        {SOLUTIONS_MEGA_MENU.build.title}
                      </div>
                      <div className="flex flex-col gap-2 pl-2">
                        {SOLUTIONS_MEGA_MENU.build.links.map((l) => (
                          <Link key={l.name} href={l.href} className="text-xs text-muted-foreground hover:text-foreground py-1">
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground/80 mb-2">
                        {SOLUTIONS_MEGA_MENU.migrate.title}
                      </div>
                      <div className="flex flex-col gap-2 pl-2">
                        {SOLUTIONS_MEGA_MENU.migrate.links.map((l) => (
                          <Link key={l.name} href={l.href} className="text-xs text-muted-foreground hover:text-foreground py-1">
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Pricing (Direct Link in Accordion Item list) */}
              <div className="border-b border-border/40 py-3">
                <Link href={PATHS.pricing} className="text-sm font-medium text-muted-foreground hover:text-foreground block">
                  Pricing
                </Link>
              </div>

              {/* Company */}
              <AccordionItem value="company" className="border-b border-border/40">
                <AccordionTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground py-3 rounded-none hover:no-underline">
                  Company
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="flex flex-col gap-2 pl-3 pt-2">
                    {COMPANY_MEGA_MENU.map((item) => (
                      <Link key={item.name} href={item.href} className="text-xs text-muted-foreground hover:text-foreground py-1 block">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="pt-4 border-t border-border/60 flex flex-col gap-2">
              <Link
                href={PATHS.login}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full justify-center text-xs font-medium rounded-none"
                )}
              >
                Sign In
              </Link>
              <Link
                href={PATHS.login}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full justify-center text-xs font-semibold shadow-md rounded-none"
                )}
              >
                Start Deploying Free <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
