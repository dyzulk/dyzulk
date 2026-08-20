import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "@dyzulk/ui/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@dyzulk/ui/lib/utils";

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
      <body className="flex min-h-screen flex-col bg-background text-foreground rounded-none">
        <ThemeProvider>
          <div className="flex-1 rounded-none">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
