
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services } from '@/lib/services';


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
                  <Link href={`/services/${service.slug}`} className="block">
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
                  </Link>
                )}
                <CardHeader>
                  <div className="flex items-start gap-4">
                    {service.icon}
                    <div className='flex-1'>
                      <CardTitle className="font-headline text-xl">
                        <Link href={`/services/${service.slug}`} className="hover:underline">
                          {service.title}
                        </Link>
                      </CardTitle>
                       <p className="text-muted-foreground mt-2 text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                   <div>
                    <h4 className="font-semibold text-sm mb-2">Common Use Cases:</h4>
                    <p className="text-sm text-muted-foreground">
                      {service.useCases.slice(0, 3).join(', ')}...
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                   <Button asChild variant="outline" className="w-full">
                      <Link href={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
