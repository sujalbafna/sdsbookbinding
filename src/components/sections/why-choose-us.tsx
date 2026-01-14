import { ThumbsUp, Gem, Heart, Trophy } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: 'Master Craftsmanship',
    description: 'With decades of experience, we combine time-honored techniques with modern precision to deliver exceptional quality on every project.',
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Personalized Service',
    description: 'We treat every project as our own, providing dedicated support and guidance to ensure your vision comes to life perfectly.',
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: 'Premium Materials',
    description: 'We source only the finest papers, leathers, and cloths, ensuring your book is not only beautiful but also built to last for generations.',
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Commitment to Excellence',
    description: 'Our reputation is built on a foundation of quality and customer satisfaction. We stand behind our work with a 100% satisfaction guarantee.',
  },
];

export function WhyChooseUs() {
  const image = PlaceHolderImages.find(img => img.id === 'why-choose-us-image');

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 animate-bg-pan overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the difference that passion and precision can make.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] w-full max-w-lg mx-auto rounded-xl shadow-2xl overflow-hidden">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="flex items-start gap-6">
                <div className="bg-primary/10 rounded-full p-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
