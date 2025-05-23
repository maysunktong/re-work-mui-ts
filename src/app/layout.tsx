import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import NavigationBar from "../components/Navigation";

export const metadata: Metadata = {
  title: "Re-work",
  description: "Make Remote Work Possible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <NavigationBar />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
