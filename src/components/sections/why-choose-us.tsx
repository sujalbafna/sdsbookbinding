import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, Gem, Heart, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: 'Master Craftsmanship',
    description: 'With decades of experience, we combine time-honored techniques with modern precision to deliver exceptional quality on every project.',
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'Personalized Service',
    description: 'We treat every project as our own, providing dedicated support and guidance to ensure your vision comes to life perfectly.',
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary" />,
    title: 'Premium Materials',
    description: 'We source only the finest papers, leathers, and cloths, ensuring your book is not only beautiful but also built to last for generations.',
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: 'Commitment to Excellence',
    description: 'Our reputation is built on a foundation of quality and customer satisfaction. We stand behind our work with a 100% satisfaction guarantee.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the difference that passion and precision can make.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-md hover:shadow-lg transition-shadow border-0">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl mb-2">{feature.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
