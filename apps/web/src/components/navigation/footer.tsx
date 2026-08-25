import { Separator } from "@dyzulk/ui/components/separator";
import { FooterBrand } from "./footer/footer-brand";
import { FooterLinks } from "./footer/footer-links";
import { FooterSocialBar } from "./footer/footer-social-bar";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-card/60 backdrop-blur-sm text-card-foreground">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 pt-16 pb-12">
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12">
          <FooterBrand />
          <FooterLinks />
        </div>

        <Separator className="my-6 opacity-60" />

        {/* Lower Legal & Social Bar */}
        <FooterSocialBar />
      </div>
    </footer>
  );
}

export { FooterBrand, FooterLinks, FooterSocialBar };
