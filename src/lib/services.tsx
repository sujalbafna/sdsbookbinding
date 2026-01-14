
import { BookText, Book, Wrench, BookCopy, BookCheck } from 'lucide-react';

export type Service = {
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  imageId: string;
  useCases: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: 'record-binding',
    icon: <BookCopy className="h-8 w-8 text-primary" />,
    title: 'Record Binding',
    description: 'Professional binding for official records, ensuring longevity and a formal presentation for all your important documents.',
    imageId: 'record-binding',
    useCases: ['Official archives', 'Legal documents', 'Historical records', 'Government reports'],
    benefits: ['Archival quality', 'Tamper-resistant', 'Professional appearance', 'Long-term preservation'],
  },
  {
    slug: 'book-binding',
    icon: <BookText className="h-8 w-8 text-primary" />,
    title: 'Book Binding',
    description: 'Classic and durable book binding for various needs, from personal projects to commercial publications.',
    imageId: 'hardcover-binding',
    useCases: ['Novels', 'Photo albums', 'Theses', 'Portfolios'],
    benefits: ['High durability', 'Premium look and feel', 'Custom cover options', 'Protects pages effectively'],
  },
  {
    slug: 'spiral-binding',
    icon: <Book className="h-8 w-8 text-primary" />,
    title: 'Spiral Binding',
    description: 'A practical choice for documents that need to lie flat, perfect for manuals, reports, and notebooks.',
    imageId: 'spiral-binding',
    useCases: ['Presentations', 'Training manuals', 'Notebooks', 'Cookbooks'],
    benefits: ['Lies flat for easy use', 'Pages can turn 360 degrees', 'Durable and flexible', 'Cost-effective solution'],
  },
  {
    slug: 'serailling',
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: 'Serailling',
    description: 'Specialized serailling services for a unique and secure finish on your documents.',
    imageId: 'custom-book',
    useCases: ['Special certificates', 'Unique invitations', 'Custom projects', 'Decorative documents'],
    benefits: ['Unique decorative edge', 'Adds a level of sophistication', 'Customizable patterns', 'Enhances visual appeal'],
  },
  {
    slug: 'binding-record-keeping',
    icon: <BookCheck className="h-8 w-8 text-primary" />,
    title: 'Binding & Record Keeping',
    description: 'Comprehensive service combining professional binding with systematic record keeping for easy management.',
    imageId: 'record-keeping',
    useCases: ['Financial reports', 'Medical records', 'Corporate archives', 'Log books'],
    benefits: ['Organized and accessible records', 'Secure and durable binding', 'Streamlines document management', 'Ensures long-term integrity'],
  },
];
