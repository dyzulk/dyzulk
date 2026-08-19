import { ProductsHero } from "@/components/products/products-hero";
import { ProductsGrid } from "@/components/products/products-grid";
import { ProductsDx } from "@/components/products/products-dx";
import { ProductsFaq } from "@/components/products/products-faq";

export const metadata = {
  title: "Products - Dyzulk Cloud",
  description: "Explore the next generation cloud suite of Dyzulk: Edge Workers, Serverless Containers, Managed Databases, and Secure Global Networks.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-6 pb-12 space-y-16 sm:space-y-24">
      <ProductsHero />
      <ProductsGrid />
      <ProductsDx />
      <ProductsFaq />
    </main>
  );
}
