"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#tools', label: 'Tools' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg'
      )}
    >
      <div
        className={cn(
          'container mx-auto flex items-center justify-between px-4 h-16'
        )}
      >
        <Link href="#about" className="font-headline text-2xl font-bold text-foreground">
          N.
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/10 px-4 py-2 rounded-lg">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right">
                <div className="flex justify-between items-center mb-8">
                    <Link href="#about" className="font-headline text-2xl font-bold text-foreground" onClick={() => setIsMenuOpen(false)}>
                        N.
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                        <X />
                    </Button>
                </div>
                <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-lg font-medium text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                        {link.label}
                    </a>
                    ))}
                </nav>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
