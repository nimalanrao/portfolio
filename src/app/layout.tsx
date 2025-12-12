import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { Inter, Space_Grotesk, Great_Vibes } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { CustomCursor } from '@/components/custom-cursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk'
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes'
});


export const metadata: Metadata = {
  title: 'Nithyanantha Nimalan Rao | Creative Developer',
  description: 'Portfolio of Nithyanantha Nimalan Rao - Digital Creative, Front-End Developer, and Marketing Tech enthusiast.',
  authors: [{ name: 'Nithyanantha Nimalan Rao' }],
  keywords: ['Digital Creative', 'Front-End Developer', 'Marketing Tech', 'Portfolio', 'Nyxcore', 'Nithyanantha Nimalan Rao'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${greatVibes.variable} font-body antialiased`}>
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="nyxfolio-theme"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
