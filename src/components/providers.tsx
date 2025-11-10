'use client';

import { CloudFrontThemeProvider } from '@/hooks/use-cloudfront-theme';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CloudFrontThemeProvider defaultTheme="bayer">
      {children}
    </CloudFrontThemeProvider>
  );
}
