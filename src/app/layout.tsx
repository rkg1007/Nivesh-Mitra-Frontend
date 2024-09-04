import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
