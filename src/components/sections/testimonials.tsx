import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'PhD Student',
    quote: "My thesis was bound beautifully. The hardcover is sturdy, and the printing is flawless. It made submitting my work feel so much more special. Highly recommended!",
    avatar: "SL",
  },
  {
    name: 'Michael B.',
    title: 'Author',
    quote: "I used Boundless Books for a short run of my first novel. The quality of the softcover binding was outstanding, and the team was incredibly helpful throughout the process.",
    avatar: "MB",
  },
  {
    name: 'Emily R.',
    title: 'Family Historian',
    quote: "I had my great-grandmother's journal restored and rebound. The care they took was incredible. It's a family treasure that is now preserved for future generations.",
    avatar: "ER",
  },
  {
    name: 'David C.',
    title: 'Corporate Client',
    quote: "We needed high-quality, comb-bound reports for a major presentation. The turnaround was fast, the price was fair, and the final product looked incredibly professional.",
    avatar: "DC",
  },
];


export function Testimonials() {
  const image = PlaceHolderImages.find(img => img.id === 'testimonial-bg');
  
  return (
    <section id="testimonials" className="relative py-20 sm:py-32">
       {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover"
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gray-900/70" />
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We take pride in our work, and our customers agree.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4 h-full">
                  <Card className="bg-background/90 backdrop-blur-sm h-full flex flex-col">
                    <CardContent className="p-6 flex-grow flex flex-col justify-center items-center text-center">
                      <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                           <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2 text-white bg-transparent border-white hover:bg-white hover:text-gray-900" />
          <CarouselNext className="right-0 translate-x-1/2 text-white bg-transparent border-white hover:bg-white hover:text-gray-900" />
        </Carousel>
      </div>
    </section>
  );
}
