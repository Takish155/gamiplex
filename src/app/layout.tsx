import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/context/QueryProviderContext";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "@/styles/themeOptions";
import Header from "@/Header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

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
        <body className={poppins.className}>
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
