import "./globals.css";
import type { Metadata } from "next";
import ThemeWrapper from "../components/ThemeWrapper";

export const metadata: Metadata = {
  title: "Re-work",
  description: "Make Remote Work Possible",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
