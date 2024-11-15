import ThemeRegistry from "@/theme/ThemeRegistry";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <ThemeRegistry>
          <body>
            {children}
          </body>
        </ThemeRegistry>
    </html>
  );
}
