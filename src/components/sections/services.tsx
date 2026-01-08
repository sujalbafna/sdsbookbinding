import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookText, FileText, Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <BookText className="h-8 w-8 text-primary" />,
    title: 'Thesis & Dissertation Binding',
    description: 'Archive your academic work with our durable and professional thesis binding services. Multiple cover and paper options available.',
    imageId: 'thesis-binding',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Report & Manual Binding',
    description: 'Present your corporate reports, training manuals, and documents in a polished, easy-to-read format.',
    imageId: 'report-binding',
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Custom Book Projects',
    description: 'Bring your personal project to life. We handle everything from family histories to self-published novels with creative care.',
    imageId: 'custom-book',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const image = imageMap.get(service.imageId);
            return (
              <Card key={service.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {image && (
                  <div className="relative aspect-[3/2] w-full">
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
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
