import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { BookText, FileText, Star, Book, Notebook, Wrench, CircleHelpIcon, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <Book className="h-8 w-8 text-primary" />,
    title: 'Spiral Binding',
    description: 'Ideal for reports, presentations, and notebooks. Pages can be folded back 360 degrees.',
    imageId: 'spiral-binding',
    useCases: ['Business Reports', 'Academic Papers', 'Training Manuals'],
    benefits: ['Lies flat when open', 'Durable and flexible', 'Wide range of colors'],
  },
  {
    icon: <CircleHelpIcon className="h-8 w-8 text-primary" />,
    title: 'Comb Binding',
    description: 'A cost-effective option for manuals and documents that may need pages added or removed.',
    imageId: 'comb-binding',
    useCases: ['Cookbooks', 'Proposals', 'Internal Documents'],
    benefits: ['Pages can be easily added or removed', 'Affordable', 'Lays flat'],
  },
  {
    icon: <BookText className="h-8 w-8 text-primary" />,
    title: 'Hardcover Binding',
    description: 'The gold standard for durability and a professional finish, perfect for theses and special editions.',
    imageId: 'hardcover-binding',
    useCases: ['Theses & Dissertations', 'Heirloom Photo Albums', 'Limited Edition Prints'],
    benefits: ['Maximum durability and protection', 'Premium, professional appearance', 'Long-lasting'],
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Softcover Binding',
    description: 'A flexible and lightweight option, great for novels, poetry collections, and catalogues.',
    imageId: 'softcover-binding',
    useCases: ['Novels & Poetry Books', 'Company Catalogues', 'Magazines'],
    benefits: ['Lightweight and portable', 'Cost-effective for larger quantities', 'Professional finish'],
  },
  {
    icon: <Notebook className="h-8 w-8 text-primary" />,
    title: 'Notebook Binding',
    description: 'Create custom notebooks with your choice of paper, cover, and binding style.',
    imageId: 'notebook-binding',
    useCases: ['Personal Journals', 'Branded Corporate Giveaways', 'Sketchbooks'],
    benefits: ['Fully customizable', 'Unique and personal', 'Great for gifts'],
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: 'Repair & Rebinding',
    description: 'Breathe new life into old treasures. We repair and rebind cherished books.',
    imageId: 'repair-binding',
    useCases: ['Antique Books', 'Damaged Family Bibles', 'Worn-out Favorites'],
    benefits: ['Preserves sentimental value', 'Restores functionality', 'Extends the life of the book'],
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Custom Binding',
    description: 'Your vision, our craftsmanship. We create unique, one-of-a-kind books for any occasion.',
    imageId: 'custom-book',
    useCases: ['Wedding Albums', 'Portfolios', 'One-of-a-kind Art Books'],
    benefits: ['Truly unique product', 'Endless material and style options', 'Perfect for special occasions'],
  },
];

export function Services() {
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of binding options to suit every need, ensuring your documents are preserved and presented beautifully.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => {
            const image = imageMap.get(service.imageId);
            return (
              <Card key={service.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {image && (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start gap-4">
                    {service.icon}
                    <div className='flex-1'>
                      <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                       <p className="text-muted-foreground mt-2 text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                   <div>
                    <h4 className="font-semibold text-sm mb-2">Use Cases:</h4>
                    <p className="text-sm text-muted-foreground">
                      {service.useCases.join(', ')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary/80 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}