import { Github, Instagram, Mail, Phone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made by Nithyanantha Nimalan Rao with <Heart className="h-4 w-4 text-accent fill-current" />
        </p>
        
        <div className="flex gap-2">
            <Button asChild variant="ghost" size="icon">
              <a href="mailto:nithyananthanimalan@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <a href="https://wa.me/601128143096" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <Phone className="h-5 w-5" />
                </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com/nimalanrao" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://instagram.com/nyxcoreunderscore" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
        </div>
      </div>
    </footer>
  );
}
