import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <NavbarComponent />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
