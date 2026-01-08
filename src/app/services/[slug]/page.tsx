
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { services, Service } from '@/lib/services';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const getServiceData = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceData(params.slug);

  if (!service) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === service.imageId);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="ghost">
                <Link href="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Services
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
              <div className="md:col-span-3">
                {image && (
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg mb-8">
                    <Image
                      src={image.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                <p className="text-lg text-muted-foreground">{service.description}</p>
              </div>

              <div className="md:col-span-2">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">Service Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Key Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Ideal For</h3>
                      <ul className="space-y-2">
                        {service.useCases.map((useCase, index) => (
                          <li key={index} className="flex items-start">
                             <span className="text-muted-foreground">&#8226; {useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                     <Button asChild className="w-full" size="lg">
                        <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
