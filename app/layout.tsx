import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import "./styles/globals.css";
import ThemeProvider from "./context/ThemeProvider";
import TanstackProvider from "./context/TanstackProvider";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>
        <TanstackProvider>
          <AntdRegistry>
            <ThemeProvider>{children}</ThemeProvider>
          </AntdRegistry>
        </TanstackProvider>
      </body>
    </html>
  );
}
