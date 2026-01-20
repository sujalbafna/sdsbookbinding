import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Sharma',
    avatarId: 'avatar-priya',
    review:
      'SDS Book Binding did an exceptional job on my thesis. The quality of the binding was top-notch, and the team was incredibly professional and helpful throughout the process. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Rohan Joshi',
    avatarId: 'avatar-rohan',
    review:
      'I needed some important company reports bound quickly, and SDS delivered. The spiral binding was perfect for our needs, and the turnaround time was surprisingly fast. Great service!',
    rating: 5,
  },
  {
    name: 'Aisha Khan',
    avatarId: 'avatar-aisha',
    review:
      'I entrusted them with restoring a very old family album, and the result was beyond my expectations. They handled it with so much care and craftsmanship. It looks beautiful. Thank you!',
    rating: 5,
  },
];

export function Reviews() {
    const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));
  
    return (
      <section id="reviews" className="py-16 sm:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Read testimonials from our satisfied customers across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => {
                 const avatar = imageMap.get(review.avatarId);
                 return(
              <Card key={review.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      {avatar && <AvatarImage src={avatar.imageUrl} alt={review.name} data-ai-hint={avatar.imageHint} />}
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <div className="flex items-center gap-0.5 text-yellow-500">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic">
                    "{review.review}"
                  </blockquote>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>
    );
  }
