import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "@dyzulk/ui/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { cn } from "@dyzulk/ui/lib/utils";
import { TooltipProvider } from "@dyzulk/ui/components/tooltip";
import { TopLoader } from "@dyzulk/ui/custom/top-loader";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", plusJakartaSans.variable)}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <ThemeProvider>
          <TopLoader />
          <TooltipProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
