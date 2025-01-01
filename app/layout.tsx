import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from '@/components/footer';
import Sidebar from "@/components/sidebar";
import localFont from 'next/font/local'
import LayoutWithSidebar from '@/components/layout-with-sidebar';

const myCustomFont = localFont({
  src: [
    {
      path: '../public/fonts/LXGWWenKai-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/fonts/LXGWWenKai-Medium.woff2',
      weight: '400',
      style: 'medium',
    },
    {
      path: '../public/fonts/LXGWWenKai-Regular.woff2',
      weight: '500',
      style: 'regular',
    }
  ],
  variable: '--font-custom' 
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased w-full",
          fontSans.variable,
          myCustomFont.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <div className="w-full">
              <div className="container mx-auto max-w-7xl px-6">
                <Navbar />
              </div>
            </div>
            <LayoutWithSidebar>
              {children}
            </LayoutWithSidebar>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}