"use client";

import { HeaderBrand } from "./header/header-brand";
import { HeaderDesktopNav } from "./header/header-desktop-nav";
import { HeaderActions } from "./header/header-actions";
import { HeaderMobileSheet } from "./header/header-mobile-sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-6">
          <HeaderBrand />
          <HeaderDesktopNav />
        </div>
        <HeaderActions />
        <HeaderMobileSheet />
      </div>
    </header>
  );
}

export { HeaderBrand, HeaderDesktopNav, HeaderActions, HeaderMobileSheet };
