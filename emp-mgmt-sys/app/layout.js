import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
// import ThemeRegistry from "@/theme/ThemeRegistry";

export default function RootLayout({ children }) {
  // Can wrap ThemeRegistry instead of NextUIProvider if i want MUI
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body>
        <NextUIProvider>
          <main>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
