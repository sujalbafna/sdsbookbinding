import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="https://picsum.photos/seed/hero/1920/1080"
        alt="A craftsman binding a book"
        fill
        className="object-cover"
        priority
        data-ai-hint="book binding"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
          Crafting Legacies, One Page at a Time
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          From student theses to heirloom family albums, we provide exceptional book binding services tailored to your needs.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link href="#estimate">Get an Instant Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
