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

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "/docs" },
  { name: "Changelog", href: "#changelog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight text-lg">
          <Logo className="size-8" />
          <span>
            Dyzulk <span className="text-primary font-normal">Cloud</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Suite */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="#login"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "font-medium"
            )}
          >
            Sign In
          </Link>

          <Link
            href="/docs"
            className={cn(
              buttonVariants({ size: "sm" }),
              "font-semibold shadow-sm"
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
                <Button variant="ghost" size="icon-sm">
                  <Menu className="size-5" />
                </Button>
              }
            />
            <SheetContent side="top" className="p-6">
              <SheetHeader className="p-0 mb-4">
                <SheetTitle className="flex items-center gap-2 text-base font-bold">
                  <Logo className="size-5" /> Dyzulk Cloud Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-3 font-medium text-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border/60 flex flex-col gap-2">
                  <Link
                    href="#login"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full justify-center text-sm font-medium"
                    )}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/docs"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full justify-center text-sm font-semibold shadow-md"
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
