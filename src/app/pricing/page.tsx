import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const pricingTiers = [
  {
    service: 'Spiral & Comb Binding',
    price: 'Starting from $5',
    features: ['Ideal for reports and presentations', 'Quick turnaround', 'Durable plastic coils or combs'],
  },
  {
    service: 'Softcover Binding',
    price: 'Starting from $15',
    features: ['Perfect for novels and manuals', 'Professional look and feel', 'Variety of cover finishes'],
  },
  {
    service: 'Hardcover Binding',
    price: 'Starting from $30',
    features: ['Theses, dissertations, and special editions', 'Maximum durability', 'High-quality cover materials'],
  },
  {
    service: 'Custom & Repair Work',
    price: 'By Quote',
    features: ['Bespoke projects', 'Restoration of old books', 'Consult with our experts for pricing'],
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="pricing" className="py-16 sm:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Pricing</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer competitive pricing for our binding services. Please note that these are starting prices and the final cost may vary based on materials, page count, and complexity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingTiers.map((tier) => (
                <Card key={tier.service} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{tier.service}</CardTitle>
                    <CardDescription className="font-bold text-primary text-xl">{tier.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-1" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert className="mt-12 max-w-3xl mx-auto bg-primary/10 border-primary/30">
              <Info className="h-4 w-4" />
              <AlertTitle className="font-bold text-primary">For an Accurate Quote</AlertTitle>
              <AlertDescription>
                For a precise quote on your project, please contact us directly. We're happy to discuss your specific needs and provide a detailed estimate.
              </AlertDescription>
            </Alert>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
