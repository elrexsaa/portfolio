import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portofolio | Elga Rexsa',
  description: 'Dirancang untuk menampilkan proyek inovatif, desain imersif, dan pengalaman web modern melalui platform portofolio yang bersih dan responsif.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
