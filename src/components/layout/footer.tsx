import { BookMarked, Mail, Phone, MapPin } from 'lucide-react';
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
    <footer className="bg-gray-900 text-gray-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BookMarked className="h-7 w-7 text-primary" />
              <span className="font-bold font-headline text-xl">Boundless Books</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Crafting Legacies, One Page at a Time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 shrink-0" />
                <span>123 Bookbinders Lane,<br />Storyville, BK 12345</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(123) 456-7890</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:contact@boundlessbooks.com" className="hover:text-primary">
                  contact@boundlessbooks.com
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Business Hours</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Monday - Friday: 9am - 5pm</p>
              <p>Saturday: 10am - 3pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Boundless Books. All rights reserved.
          </p>
           <p className="text-sm text-gray-500 mt-4 md:mt-0">
             Built by your friendly neighborhood AI.
           </p>
        </div>
      </div>
    </footer>
  );
}
