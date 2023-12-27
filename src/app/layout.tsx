import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/context/QueryProviderContext";
import Header from "@/Header/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "@/styles/themeOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamiplex",
  description:
    "Discover new games to play on Gamiplex. Find new games to play by browsing through our list of games.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={themeOptions}>
      <html lang="en">
        <body className={inter.className}>
          <QueryProvider>
            <Header />
            {children}
            <SpeedInsights />
          </QueryProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
