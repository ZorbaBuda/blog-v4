import "./globals.scss";
import type { Metadata } from "next";
import { ThemeProviders } from "./theme-providers";
import TwSizeIndicator from "@/components/helpers/TwSizeIndicator";

export const metadata: Metadata = {
  title: "Neuro Primal",
  description: "Resúmenes, ideas, textos...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="font-roboto antialiased"
      lang="es"
      suppressHydrationWarning
    >
      <body>
        <ThemeProviders>
          <TwSizeIndicator />
          <main className=" bg-white dark:bg-[#121212] text-black dark:text-white">
            {children}
          </main>
        </ThemeProviders>
      </body>
    </html>
  );
}
