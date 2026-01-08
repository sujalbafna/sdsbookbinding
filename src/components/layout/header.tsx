import Link from 'next/link';
import { BookMarked } from 'lucide-react';

export function Header() {
  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/gallery' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2">
          <BookMarked className="h-7 w-7 text-primary" />
          <span className="font-bold font-headline text-xl">Boundless Books</span>
        </Link>
        <nav className="ml-auto hidden items-center space-x-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
