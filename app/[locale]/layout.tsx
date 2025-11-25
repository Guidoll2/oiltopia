import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {CartProvider} from '@/contexts/CartContext';
import CartSidebar from '@/components/CartSidebar';
import {DemoProvider} from '@/contexts/DemoContext';
import DemoModal from '@/components/DemoModal';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oiltopía - Aceites de Oliva Premium",
  description: "Descubre los mejores aceites de oliva premium en Oiltopía. Calidad, sabor y tradición en cada gota.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DemoProvider>
          <CartProvider>
            <NextIntlClientProvider messages={messages}>
              <Header />
              {children}
              <Footer />
              <CartSidebar />
              <DemoModal />
            </NextIntlClientProvider>
          </CartProvider>
        </DemoProvider>
      </body>
    </html>
  );
}
