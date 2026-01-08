

import { BookText, FileText, Star, Book, Notebook, Wrench, CircleHelpIcon } from 'lucide-react';

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
    slug: 'spiral-binding',
    icon: <Book className="h-8 w-8 text-primary" />,
    title: 'Spiral Binding',
    description: 'Ideal for reports, presentations, and notebooks. Pages can be folded back 360 degrees, allowing them to lie completely flat.',
    imageId: 'spiral-binding',
    useCases: ['Business Reports', 'Academic Papers', 'Training Manuals', 'Planners'],
    benefits: ['Lies flat when open for easy reading and writing', 'Durable and flexible plastic coil resists crushing', 'Available in a wide range of colors to match your branding'],
  },
  {
    slug: 'comb-binding',
    icon: <CircleHelpIcon className="h-8 w-8 text-primary" />,
    title: 'Comb Binding',
    description: 'A cost-effective and editable option for documents. The plastic comb spine allows you to add or remove pages after binding.',
    imageId: 'comb-binding',
    useCases: ['Cookbooks', 'Proposals', 'Internal Documents', 'Drafts'],
    benefits: ['Pages can be easily added or removed', 'Very affordable for both small and large batches', 'Lays flat for convenient use'],
  },
  {
    slug: 'hardcover-binding',
    icon: <BookText className="h-8 w-8 text-primary" />,
    title: 'Hardcover Binding',
    description: 'The gold standard for durability and a professional finish. Perfect for theses, dissertations, and special edition books requiring a lasting, premium feel.',
    imageId: 'hardcover-binding',
    useCases: ['Theses & Dissertations', 'Heirloom Photo Albums', 'Limited Edition Prints', 'Portfolios'],
    benefits: ['Maximum durability and protection for important documents', 'Premium, professional, and timeless appearance', 'Long-lasting and archival quality'],
  },
  {
    slug: 'softcover-binding',
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Softcover Binding',
    description: 'Also known as perfect binding, this flexible and lightweight option is great for novels, poetry collections, and catalogues.',
    imageId: 'softcover-binding',
    useCases: ['Novels & Poetry Books', 'Company Catalogues', 'Magazines', 'Trade Paperbacks'],
    benefits: ['Lightweight and portable', 'Cost-effective for larger quantities', 'Professional, bookstore-quality finish'],
  },
  {
    slug: 'notebook-binding',
    icon: <Notebook className="h-8 w-8 text-primary" />,
    title: 'Notebook Binding',
    description: 'Create custom notebooks tailored to your needs. Choose your preferred paper, cover design, and binding style for a truly personal product.',
    imageId: 'notebook-binding',
    useCases: ['Personal Journals', 'Branded Corporate Giveaways', 'Sketchbooks', 'Event Mementos'],
    benefits: ['Fully customizable from cover to cover', 'A unique and personal item', 'Excellent for gifts or promotional materials'],
  },
  {
    slug: 'repair-and-rebinding',
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: 'Repair & Rebinding',
    description: 'Breathe new life into old treasures. We carefully repair and rebind cherished books, preserving their history while restoring their function.',
    imageId: 'repair-binding',
    useCases: ['Antique Books', 'Damaged Family Bibles', 'Worn-out Favorite Novels', 'Library Books'],
    benefits: ['Preserves the sentimental and historical value of a book', 'Restores functionality to damaged books', 'Extends the life of the book for future generations'],
  },
  {
    slug: 'custom-binding',
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Custom Binding',
    description: 'Your vision, our craftsmanship. We work with you to create unique, one-of-a-kind books for any special occasion or project.',
    imageId: 'custom-book',
    useCases: ['Wedding Albums', 'Artist Portfolios', 'One-of-a-kind Art Books', 'Bespoke Gifts'],
    benefits: ['A truly unique product tailored to your exact specifications', 'Endless material, color, and style options', 'The perfect way to commemorate a special occasion'],
  },
];
