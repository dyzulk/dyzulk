"use client";

import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@workspace/ui/components/sheet";
import { Logo } from "@workspace/ui/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@workspace/ui/lib/utils";
import { PATHS } from "@/constants/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@workspace/ui/components/navigation-menu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@workspace/ui/components/accordion";
import {
  PRODUCT_MEGA_MENU,
  DEVELOPERS_MEGA_MENU,
  SOLUTIONS_MEGA_MENU,
  COMPANY_MEGA_MENU,
} from "@/constants/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-6">
          {/* Brand Logo */}
          <Link href={PATHS.home} className="flex items-center gap-2.5 font-bold tracking-tight text-lg shrink-0">
            <Logo className="size-8" />
            <span>
              Dyzulk <span className="text-primary font-normal">Cloud</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <NavigationMenu className="z-50">
              <NavigationMenuList className="gap-1">
                {/* Product */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3.5 py-2 h-auto text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 data-[popup-open]:text-primary data-[popup-open]:bg-primary/10 data-[open]:text-primary data-[open]:bg-primary/10 bg-transparent transition-colors font-medium rounded-none">
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
                  <NavigationMenuTrigger className="px-3.5 py-2 h-auto text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 data-[popup-open]:text-primary data-[popup-open]:bg-primary/10 data-[open]:text-primary data-[open]:bg-primary/10 bg-transparent transition-colors font-medium rounded-none">
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
                  <NavigationMenuTrigger className="px-3.5 py-2 h-auto text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 data-[popup-open]:text-primary data-[popup-open]:bg-primary/10 data-[open]:text-primary data-[open]:bg-primary/10 bg-transparent transition-colors font-medium rounded-none">
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
                  <NavigationMenuTrigger className="px-3.5 py-2 h-auto text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 data-[popup-open]:text-primary data-[popup-open]:bg-primary/10 data-[open]:text-primary data-[open]:bg-primary/10 bg-transparent transition-colors font-medium rounded-none">
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
        </div>

        {/* Desktop Right Suite */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <Link
            href={PATHS.login}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "font-medium rounded-none"
            )}
          >
            Sign In
          </Link>

          <Link
            href={PATHS.docs}
            className={cn(
              buttonVariants({ size: "sm" }),
              "font-semibold shadow-sm rounded-none"
            )}
          >
            Deploy Free <ArrowRight className="ml-1.5 size-3.5" />
          </Link>
        </div>

        {/* Mobile Nav using Shadcn Sheet Component */}
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
                    href={PATHS.docs}
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
      </div>
    </header>
  );
}
