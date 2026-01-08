import { BookMarked } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/gallery' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <BookMarked className="h-7 w-7" />
              <span className="font-bold font-headline text-xl">Boundless Books</span>
            </Link>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.slice(0, 4).map((item) => ( // Show first 4 items for brevity
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-primary-foreground/20 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/80 text-center md:text-left">
            &copy; {new Date().getFullYear()} Boundless Books. All rights reserved.
          </p>
           <p className="text-sm text-primary-foreground/80 mt-4 md:mt-0">
             Built by your friendly neighborhood AI.
           </p>
        </div>
      </div>
    </footer>
  );
}
