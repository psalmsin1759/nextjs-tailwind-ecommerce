import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import HeaderNew from '@/app/common/header_new';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samson-Tailwind Nextjs',
  description: 'Samson-Tailwind Nextjs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 w-full z-50 bg-white">
          <HeaderNew />
        </header>

        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
