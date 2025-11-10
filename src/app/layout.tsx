import type { Metadata } from 'next';
import '../index.css';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'Bayer CloudFront Theme Demo',
  description: 'Bayer CloudFront Theme Demo with Dynamic Themes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
